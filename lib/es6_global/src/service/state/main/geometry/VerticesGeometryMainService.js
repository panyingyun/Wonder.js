// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as VerticesService$Wonderjs           from "../../../primitiive/geometry/VerticesService.js";
import * as TypeArrayService$Wonderjs          from "../../../primitiive/TypeArrayService.js";
import * as TypeArrayPoolService$Wonderjs      from "../../../record/typeArrayPool/TypeArrayPoolService.js";
import * as PointsGeometryMainService$Wonderjs from "./PointsGeometryMainService.js";

function getVertices(index, param) {
  return VerticesService$Wonderjs.getVertices(index, param[/* boxGeometryRecord */20][/* verticesMap */1]);
}

function unsafeGetVertices(index, param) {
  return VerticesService$Wonderjs.unsafeGetVertices(index, param[/* boxGeometryRecord */20][/* verticesMap */1]);
}

function setVerticesWithArray(index, record, state) {
  var boxGeometryRecord = state[/* boxGeometryRecord */20];
  var match = PointsGeometryMainService$Wonderjs.setPointsWithArray(/* tuple */[
        index,
        getVertices(index, state),
        record
      ], /* tuple */[
        TypeArrayPoolService$Wonderjs.getFloat32TypeArrayFromPool,
        TypeArrayService$Wonderjs.fillFloat32Array,
        TypeArrayService$Wonderjs.makeFloat32Array
      ], /* tuple */[
        state[/* typeArrayPoolRecord */32],
        boxGeometryRecord[/* verticesMap */1]
      ]);
  var newrecord = state.slice();
  var newrecord$1 = boxGeometryRecord.slice();
  newrecord$1[/* verticesMap */1] = match[1];
  newrecord[/* boxGeometryRecord */20] = newrecord$1;
  newrecord[/* typeArrayPoolRecord */32] = match[0];
  return newrecord;
}

export {
  getVertices          ,
  unsafeGetVertices    ,
  setVerticesWithArray ,
  
}
/* VerticesService-Wonderjs Not a pure module */