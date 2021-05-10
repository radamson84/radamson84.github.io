gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDCharactersDisplayObjects1= [];
gdjs.InstructionsCode.GDCharactersDisplayObjects2= [];
gdjs.InstructionsCode.GDBalloonBigObjects1= [];
gdjs.InstructionsCode.GDBalloonBigObjects2= [];
gdjs.InstructionsCode.GDBalloonMidObjects1= [];
gdjs.InstructionsCode.GDBalloonMidObjects2= [];
gdjs.InstructionsCode.GDBalloonSmallObjects1= [];
gdjs.InstructionsCode.GDBalloonSmallObjects2= [];
gdjs.InstructionsCode.GDChickenObjects1= [];
gdjs.InstructionsCode.GDChickenObjects2= [];
gdjs.InstructionsCode.GDCookedChickenObjects1= [];
gdjs.InstructionsCode.GDCookedChickenObjects2= [];
gdjs.InstructionsCode.GDBombObjects1= [];
gdjs.InstructionsCode.GDBombObjects2= [];
gdjs.InstructionsCode.GDDogObjects1= [];
gdjs.InstructionsCode.GDDogObjects2= [];
gdjs.InstructionsCode.GDExitDisplayObjects1= [];
gdjs.InstructionsCode.GDExitDisplayObjects2= [];
gdjs.InstructionsCode.GDInstructionsDisplayObjects1= [];
gdjs.InstructionsCode.GDInstructionsDisplayObjects2= [];
gdjs.InstructionsCode.GDLoreDisplayObjects1= [];
gdjs.InstructionsCode.GDLoreDisplayObjects2= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};


gdjs.InstructionsCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "InstructionsTimer");
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "InstructionsTimer");
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


}; //End of gdjs.InstructionsCode.eventsList0x5b70b8


gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDCharactersDisplayObjects1.length = 0;
gdjs.InstructionsCode.GDCharactersDisplayObjects2.length = 0;
gdjs.InstructionsCode.GDBalloonBigObjects1.length = 0;
gdjs.InstructionsCode.GDBalloonBigObjects2.length = 0;
gdjs.InstructionsCode.GDBalloonMidObjects1.length = 0;
gdjs.InstructionsCode.GDBalloonMidObjects2.length = 0;
gdjs.InstructionsCode.GDBalloonSmallObjects1.length = 0;
gdjs.InstructionsCode.GDBalloonSmallObjects2.length = 0;
gdjs.InstructionsCode.GDChickenObjects1.length = 0;
gdjs.InstructionsCode.GDChickenObjects2.length = 0;
gdjs.InstructionsCode.GDCookedChickenObjects1.length = 0;
gdjs.InstructionsCode.GDCookedChickenObjects2.length = 0;
gdjs.InstructionsCode.GDBombObjects1.length = 0;
gdjs.InstructionsCode.GDBombObjects2.length = 0;
gdjs.InstructionsCode.GDDogObjects1.length = 0;
gdjs.InstructionsCode.GDDogObjects2.length = 0;
gdjs.InstructionsCode.GDExitDisplayObjects1.length = 0;
gdjs.InstructionsCode.GDExitDisplayObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsDisplayObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsDisplayObjects2.length = 0;
gdjs.InstructionsCode.GDLoreDisplayObjects1.length = 0;
gdjs.InstructionsCode.GDLoreDisplayObjects2.length = 0;

gdjs.InstructionsCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
