gdjs.High_32ScoresCode = {};
gdjs.High_32ScoresCode.GDHighScoresTitleObjects1= [];
gdjs.High_32ScoresCode.GDHighScoresTitleObjects2= [];

gdjs.High_32ScoresCode.conditionTrue_0 = {val:false};
gdjs.High_32ScoresCode.condition0IsTrue_0 = {val:false};
gdjs.High_32ScoresCode.condition1IsTrue_0 = {val:false};
gdjs.High_32ScoresCode.condition2IsTrue_0 = {val:false};


gdjs.High_32ScoresCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.High_32ScoresCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HighScoreDelay");
}}

}


{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
gdjs.High_32ScoresCode.condition1IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.High_32ScoresCode.condition0IsTrue_0.val ) {
{
gdjs.High_32ScoresCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "HighScoreDelay");
}}
if (gdjs.High_32ScoresCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


}; //End of gdjs.High_32ScoresCode.eventsList0x5b70b8


gdjs.High_32ScoresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.High_32ScoresCode.GDHighScoresTitleObjects1.length = 0;
gdjs.High_32ScoresCode.GDHighScoresTitleObjects2.length = 0;

gdjs.High_32ScoresCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['High_32ScoresCode'] = gdjs.High_32ScoresCode;
