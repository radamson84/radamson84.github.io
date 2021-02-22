gdjs.Start_32MenuCode = {};
gdjs.Start_32MenuCode.GDStartGameSelectionObjects1= [];
gdjs.Start_32MenuCode.GDStartGameSelectionObjects2= [];
gdjs.Start_32MenuCode.GDStartGameSelectionObjects3= [];
gdjs.Start_32MenuCode.GDHighScoresSelectionObjects1= [];
gdjs.Start_32MenuCode.GDHighScoresSelectionObjects2= [];
gdjs.Start_32MenuCode.GDHighScoresSelectionObjects3= [];
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects1= [];
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects2= [];
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects3= [];
gdjs.Start_32MenuCode.GDSelectorObjects1= [];
gdjs.Start_32MenuCode.GDSelectorObjects2= [];
gdjs.Start_32MenuCode.GDSelectorObjects3= [];

gdjs.Start_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDSelectorObjects1Objects = Hashtable.newFrom({"Selector": gdjs.Start_32MenuCode.GDSelectorObjects1});gdjs.Start_32MenuCode.eventsList0x6b181c = function(runtimeScene) {

{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "MenuDelay");
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects2.createFrom(runtimeScene.getObjects("DebugModeSelection"));
{for(var i = 0, len = gdjs.Start_32MenuCode.GDDebugModeSelectionObjects2.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDDebugModeSelectionObjects2[i].setString("DEBUG MODE: OFF");
}
}{runtimeScene.getGame().getVariables().get("DebugMode").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, 100, 1);
}}

}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 0;
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "MenuDelay");
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects1.createFrom(runtimeScene.getObjects("DebugModeSelection"));
{for(var i = 0, len = gdjs.Start_32MenuCode.GDDebugModeSelectionObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDDebugModeSelectionObjects1[i].setString("DEBUG MODE: ON");
}
}{runtimeScene.getGame().getVariables().get("DebugMode").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, 100, 1);
}}

}


}; //End of gdjs.Start_32MenuCode.eventsList0x6b181c
gdjs.Start_32MenuCode.eventsList0x6b053c = function(runtimeScene) {

{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) == 0;
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Game", true);
}}

}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) == 1;
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "High Scores", false);
}}

}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) == 2;
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Start_32MenuCode.eventsList0x6b181c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Start_32MenuCode.eventsList0x6b053c
gdjs.Start_32MenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{



}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
gdjs.Start_32MenuCode.GDSelectorObjects1.length = 0;

{runtimeScene.getVariables().get("Selection").setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDSelectorObjects1Objects, 420, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 172, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}{runtimeScene.getGame().getVariables().get("DebugMode").setNumber(0);
}{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}}

}


{



}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "MenuDelay");
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, 100, 1);
}
{ //Subevents
gdjs.Start_32MenuCode.eventsList0x6b053c(runtimeScene);} //End of subevents
}

}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "MenuDelay");
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
gdjs.Start_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").sub(1);
}{for(var i = 0, len = gdjs.Start_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 172);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, 100, 1);
}}

}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "MenuDelay");
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
gdjs.Start_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").add(1);
}{for(var i = 0, len = gdjs.Start_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 172);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, 100, 1);
}}

}


{



}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) > 2;
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
gdjs.Start_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").setNumber(0);
}{for(var i = 0, len = gdjs.Start_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 172);
}
}}

}


{


gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) < 0;
}if (gdjs.Start_32MenuCode.condition0IsTrue_0.val) {
gdjs.Start_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").setNumber(2);
}{for(var i = 0, len = gdjs.Start_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 172);
}
}}

}


}; //End of gdjs.Start_32MenuCode.eventsList0x5b70b8


gdjs.Start_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32MenuCode.GDStartGameSelectionObjects1.length = 0;
gdjs.Start_32MenuCode.GDStartGameSelectionObjects2.length = 0;
gdjs.Start_32MenuCode.GDStartGameSelectionObjects3.length = 0;
gdjs.Start_32MenuCode.GDHighScoresSelectionObjects1.length = 0;
gdjs.Start_32MenuCode.GDHighScoresSelectionObjects2.length = 0;
gdjs.Start_32MenuCode.GDHighScoresSelectionObjects3.length = 0;
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects1.length = 0;
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects2.length = 0;
gdjs.Start_32MenuCode.GDDebugModeSelectionObjects3.length = 0;
gdjs.Start_32MenuCode.GDSelectorObjects1.length = 0;
gdjs.Start_32MenuCode.GDSelectorObjects2.length = 0;
gdjs.Start_32MenuCode.GDSelectorObjects3.length = 0;

gdjs.Start_32MenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Start_32MenuCode'] = gdjs.Start_32MenuCode;
