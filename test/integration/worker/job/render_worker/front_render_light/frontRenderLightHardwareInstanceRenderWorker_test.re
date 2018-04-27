open Wonder_jest;

open Js.Promise;

let _ =
  describe(
    "test front render light hardware instance in render worker",
    () => {
      open Expect;
      open Expect.Operators;
      open Sinon;
      let sandbox = getSandboxDefaultVal();
      let state = ref(MainStateTool.createState());
      beforeEach(
        () => {
          sandbox := createSandbox();
          state :=
            TestToolMainWorker.initWithJobConfig(
              ~sandbox,
              ~buffer=
                SettingTool.buildBufferConfigStr(
                  ~transformDataBufferCount=500,
                  ~lightMaterialDataBufferCount=50,
                  ~customGeometryPointDataBufferCount=300,
                  ()
                ),
              ()
            )
        }
      );
      afterEach(() => TestToolWorker.clear(sandbox));
      describe(
        "send instance data",
        () =>
          describe(
            "send modelMatrix and normalMatrix data",
            () =>
              describe(
                "send sourceInstance gameObject's and objectInstanceGameObject gameObjects' model matrices",
                () => {
                  let _prepare = (sandbox, state) => {
                    let (
                      state,
                      gameObject,
                      (geometry, material, meshRenderer, sourceInstance, objectInstanceGameObject)
                    ) =
                      FrontRenderLightHardwareInstanceRenderWorkerTool.prepare(sandbox, state);
                    (state, gameObject, sourceInstance, objectInstanceGameObject)
                  };
                  testPromise(
                    "buffer sub data",
                    () => {
                      let (state, (sourceTransform, objectTransform), array_buffer, bufferSubData) =
                        FrontRenderLightHardwareInstanceForNoWorkerAndWorkerJobTool.prepareForBufferSubDataCase(
                          sandbox,
                          _prepare,
                          state
                        );
                      let state =
                        state
                        |> FakeGlToolWorker.setFakeGl(
                             FakeGlToolWorker.buildFakeGl(
                               ~sandbox,
                               ~array_buffer,
                               ~bufferSubData,
                               ()
                             )
                           );
                      RenderJobsRenderWorkerTool.initAndMainLoopAndRender(
                        ~state,
                        ~sandbox,
                        ~completeFunc=
                          (_) =>
                            FrontRenderLightHardwareInstanceForNoWorkerAndWorkerJobTool.testForBufferSubDataCase(
                              sandbox,
                              (sourceTransform, objectTransform),
                              array_buffer,
                              bufferSubData,
                              MainStateTool.unsafeGetState()
                            )
                            |> resolve,
                        ()
                      )
                    }
                  )
                }
              )
          )
      )
    }
  );