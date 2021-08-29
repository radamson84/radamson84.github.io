gdjs.evtsExt__Gamepads__C_Controller_X_is_connected = {};

gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.userFunc0x92f288 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameter
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in condition: "Gamepad connected", is not valid number, must be between 0 and 4.');
    return;
}

// If gamepad was disconnected it will be null (so this will return false)
// If gamepad was never connected it will be undefined (so this will return false)
eventsFunctionContext.returnValue = !!gamepads[playerId];
};
gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.eventsList0x5b75c8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.userFunc0x92f288(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.eventsList0x5b75c8


gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func = function(runtimeScene, player_ID, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
        var objectsList = eventsFunctionContext._objectsMap[objectName];
    return objectsList ? gdjs.objectsListsToArray(objectsList) : [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
if (argName === "player_ID") return player_ID;
    return "";
  }
};


gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.eventsList0x5b75c8(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

