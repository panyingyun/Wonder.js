// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE

import * as Log$WonderLog from "../../../../../../../node_modules/wonder-log/lib/es6_global/src/Log.js";

function setFlipY(gl, flipY, param) {
  switch (param[/* browser */0]) {
    case 0 : 
        return /* () */0;
    case 1 : 
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
        return /* () */0;
    case 2 : 
        return Log$WonderLog.fatal(Log$WonderLog.buildFatalMessage("setFlipY", "unknown browser", "", "", ""));
    
  }
}

export {
  setFlipY ,
  
}
/* Log-WonderLog Not a pure module */