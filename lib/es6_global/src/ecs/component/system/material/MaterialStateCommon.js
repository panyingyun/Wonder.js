// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

import * as Js_option                from "../../../../../../../node_modules/bs-platform/lib/es6/js_option.js";
import * as SparseMapSystem$Wonderjs from "../../../../structure/SparseMapSystem.js";

function getMaterialData(state) {
  return Js_option.getExn(state[/* materialData */13]);
}

function deepCopyStateForRestore(state) {
  var match = Js_option.getExn(state[/* materialData */13]);
  var index = match[/* index */0];
  var disposedIndexArray = match[/* disposedIndexArray */5];
  var newrecord = state.slice();
  newrecord[/* materialData */13] = /* Some */[/* record */[
      /* index */index,
      /* shaderIndexMap : int array */[],
      /* colorMap */SparseMapSystem$Wonderjs.copy(match[/* colorMap */2]),
      /* gameObjectMap */SparseMapSystem$Wonderjs.copy(match[/* gameObjectMap */3]),
      /* groupCountMap */SparseMapSystem$Wonderjs.copy(match[/* groupCountMap */4]),
      /* disposedIndexArray */disposedIndexArray.slice()
    ]];
  return newrecord;
}

function restore(_, targetState) {
  var newrecord = targetState.slice();
  var newrecord$1 = Js_option.getExn(targetState[/* materialData */13]).slice();
  newrecord[/* materialData */13] = /* Some */[(newrecord$1[/* shaderIndexMap */1] = /* int array */[], newrecord$1)];
  return newrecord;
}

export {
  getMaterialData         ,
  deepCopyStateForRestore ,
  restore                 ,
  
}
/* SparseMapSystem-Wonderjs Not a pure module */