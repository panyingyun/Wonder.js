// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as BufferCustomGeometryService$Wonderjs      from "../../../../record/main/geometry/custom/BufferCustomGeometryService.js";
import * as ReallocatedPointsGeometryService$Wonderjs from "../../../../primitive/geometry/ReallocatedPointsGeometryService.js";

function getVertices(index, param) {
  var customGeometryRecord = param[/* customGeometryRecord */5];
  return ReallocatedPointsGeometryService$Wonderjs.getFloat32PointData(BufferCustomGeometryService$Wonderjs.getInfoIndex(index), customGeometryRecord[/* vertices */0], customGeometryRecord[/* verticesInfos */3]);
}

export {
  getVertices ,
  
}
/* ReallocatedPointsGeometryService-Wonderjs Not a pure module */