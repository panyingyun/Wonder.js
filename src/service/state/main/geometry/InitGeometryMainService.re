open MainStateDataType;

open GeometryType;

open BoxGeometryType;

let _isInit = (index: int, state: MainStateDataType.state) =>
  switch (state.boxGeometryRecord.isInitMap |> WonderCommonlib.SparseMapSystem.get(index)) {
  | None => false
  | Some(bool) => bool
  };

let _markIsInit = (index: int, isInit: bool, state: MainStateDataType.state) => {
  state.boxGeometryRecord.isInitMap |> WonderCommonlib.SparseMapSystem.set(index, isInit);
  state
};

let initGeometry = (index: int, state: MainStateDataType.state) =>
  if (_isInit(index, state)) {
    state
  } else {
    let {computeDataFuncMap} = state.boxGeometryRecord;
    switch (computeDataFuncMap |> WonderCommonlib.SparseMapSystem.get(index)) {
    | None => state
    | Some(computeDataFunc) =>
      let {vertices, normals, indices}: geometryComputeData =
        computeDataFunc(index, state.boxGeometryRecord);
      state
      |> VerticesGeometryMainService.setVerticesWithArray(index, vertices)
      |> NormalsGeometryMainService.setNormalsWithArray(index, normals)
      |> IndicesGeometryMainService.setIndicesWithArray(index, indices)
      |> _markIsInit(index, true)
    }
  };

let init = (state: MainStateDataType.state) => {
  WonderLog.Contract.requireCheck(
    () =>
      WonderLog.(
        Contract.(
          Operators.(
            test(
              Log.buildAssertMessage(
                ~expect={j|not dispose any geometry before init|j},
                ~actual={j|not|j}
              ),
              () => DisposeGeometryMainService.isNotDisposed(state) |> assertTrue
            )
          )
        )
      ),
    IsDebugMainService.getIsDebug(MainStateData.stateData)
  );
  let {index} = state.boxGeometryRecord;
  ArraySystem.range(0, index - 1)
  |> ArraySystem.reduceState(
       [@bs] ((state, geometryIndex: int) => initGeometry(geometryIndex, state)),
       state
     )
};

let handleInitComponent = (index: int, state: MainStateDataType.state) => initGeometry(index, state);