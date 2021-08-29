gdjs.evtsExt__Gamepads__onScenePostEvents = {};

gdjs.evtsExt__Gamepads__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__onScenePostEvents.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__onScenePostEvents.userFunc0x92f288 = function(runtimeScene, eventsFunctionContext) {
"use strict";
//Each time a player press a button i save the last button pressed for the next frame
/** @type {Gamepad[]} */
const gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);

//Get function parameter
let countPlayers = Object.keys(gdjs._extensionController.players).length;

//Repeat for each players
for (let i = 0; i < countPlayers; i++) {
    let gamepad = gamepads[i]; // Get the gamepad of the player

    //we need keep this condition because when use have not yet plug her controller we can't get the controller in the gamepad variable.
    if (gamepad == null) {
        return;
    }

    for (let b = 0; b < Object.keys(gamepad.buttons).length; b++) { //For each buttons
        if (gamepad.buttons[b].pressed) { //One of them is pressed
            gdjs._extensionController.players[i].lastButtonUsed = b; //Save the button pressed

            //Save the state of the button for the next frame.
            gdjs._extensionController.players[i].previousFrameStateButtons[b] = { pressed: true };
        }
    }
}



};
gdjs.evtsExt__Gamepads__onScenePostEvents.eventsList0x5b75c8 = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


{


gdjs.evtsExt__Gamepads__onScenePostEvents.userFunc0x92f288(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__Gamepads__onScenePostEvents.eventsList0x5b75c8


gdjs.evtsExt__Gamepads__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  }
};


gdjs.evtsExt__Gamepads__onScenePostEvents.eventsList0x5b75c8(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerRuntimeScenePostEventsCallback(function(runtimeScene) {
    gdjs.evtsExt__Gamepads__onScenePostEvents.func(runtimeScene, runtimeScene);
});
