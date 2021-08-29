gdjs.evtsExt__Gamepads__C_Controller_type = {};

gdjs.evtsExt__Gamepads__C_Controller_type.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__C_Controller_type.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__C_Controller_type.userFunc0x92f288 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameters
const playerId = eventsFunctionContext.getArgument("player_ID") - 1;
const controllerType = eventsFunctionContext.getArgument("controller_type").toUpperCase();

if (playerId < 0 || playerId > 4) {
    console.error('Parameter gamepad identifier in condition: "Gamepad type", is not valid number, must be between 0 and 4.');
    return;
}
if (controllerType === "") {
    console.error('Parameter type in condition: "Gamepad type", is not a string.');
    return;
}

const gamepad = gamepads[playerId];

//we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
if (gamepad == null) return;

eventsFunctionContext.returnValue = gamepad ? gamepad.id.toUpperCase().indexOf(controllerType) !== -1 : false;

};
gdjs.evtsExt__Gamepads__C_Controller_type.eventsList0x5b75c8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Gamepads__C_Controller_type.userFunc0x92f288(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__Gamepads__C_Controller_type.eventsList0x5b75c8


gdjs.evtsExt__Gamepads__C_Controller_type.func = function(runtimeScene, player_ID, controller_type, parentEventsFunctionContext) {
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
if (argName === "controller_type") return controller_type;
    return "";
  }
};


gdjs.evtsExt__Gamepads__C_Controller_type.eventsList0x5b75c8(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

