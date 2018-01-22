// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as BasicMaterialStateCommon$Wonderjs   from "./BasicMaterialStateCommon.js";
import * as MaterialAddComponentCommon$Wonderjs from "../MaterialAddComponentCommon.js";

function handleAddComponent(material, gameObjectUid, state) {
  var data = BasicMaterialStateCommon$Wonderjs.getMaterialData(state);
  var newrecord = state.slice();
  var newrecord$1 = data.slice();
  newrecord$1[/* gameObjectMap */3] = MaterialAddComponentCommon$Wonderjs.handleAddComponent(material, gameObjectUid, data[/* gameObjectMap */3]);
  newrecord[/* basicMaterialData */15] = newrecord$1;
  return newrecord;
}

export {
  handleAddComponent ,
  
}
/* BasicMaterialStateCommon-Wonderjs Not a pure module */