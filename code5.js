gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDCharactersDisplayObjects1= [];
gdjs.InstructionsCode.GDCharactersDisplayObjects2= [];
gdjs.InstructionsCode.GDCharactersDisplayObjects3= [];
gdjs.InstructionsCode.GDBalloonBigObjects1= [];
gdjs.InstructionsCode.GDBalloonBigObjects2= [];
gdjs.InstructionsCode.GDBalloonBigObjects3= [];
gdjs.InstructionsCode.GDBalloonMidObjects1= [];
gdjs.InstructionsCode.GDBalloonMidObjects2= [];
gdjs.InstructionsCode.GDBalloonMidObjects3= [];
gdjs.InstructionsCode.GDBalloonSmallObjects1= [];
gdjs.InstructionsCode.GDBalloonSmallObjects2= [];
gdjs.InstructionsCode.GDBalloonSmallObjects3= [];
gdjs.InstructionsCode.GDChickenObjects1= [];
gdjs.InstructionsCode.GDChickenObjects2= [];
gdjs.InstructionsCode.GDChickenObjects3= [];
gdjs.InstructionsCode.GDCookedChickenObjects1= [];
gdjs.InstructionsCode.GDCookedChickenObjects2= [];
gdjs.InstructionsCode.GDCookedChickenObjects3= [];
gdjs.InstructionsCode.GDBombObjects1= [];
gdjs.InstructionsCode.GDBombObjects2= [];
gdjs.InstructionsCode.GDBombObjects3= [];
gdjs.InstructionsCode.GDDogObjects1= [];
gdjs.InstructionsCode.GDDogObjects2= [];
gdjs.InstructionsCode.GDDogObjects3= [];
gdjs.InstructionsCode.GDExitDisplayObjects1= [];
gdjs.InstructionsCode.GDExitDisplayObjects2= [];
gdjs.InstructionsCode.GDExitDisplayObjects3= [];
gdjs.InstructionsCode.GDInstructionsDisplayObjects1= [];
gdjs.InstructionsCode.GDInstructionsDisplayObjects2= [];
gdjs.InstructionsCode.GDInstructionsDisplayObjects3= [];
gdjs.InstructionsCode.GDLoreDisplayObjects1= [];
gdjs.InstructionsCode.GDLoreDisplayObjects2= [];
gdjs.InstructionsCode.GDLoreDisplayObjects3= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_0 = {val:false};
gdjs.InstructionsCode.conditionTrue_1 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition2IsTrue_1 = {val:false};
gdjs.InstructionsCode.condition3IsTrue_1 = {val:false};


gdjs.InstructionsCode.eventsList0x741bbc = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition0IsTrue_0;
gdjs.InstructionsCode.condition0IsTrue_1.val = true;
{
gdjs.InstructionsCode.condition0IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}gdjs.InstructionsCode.conditionTrue_1.val = !gdjs.InstructionsCode.condition0IsTrue_1.val;
}
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.InstructionsCode.GDExitDisplayObjects2.createFrom(runtimeScene.getObjects("ExitDisplay"));
gdjs.InstructionsCode.GDInstructionsDisplayObjects2.createFrom(runtimeScene.getObjects("InstructionsDisplay"));
{for(var i = 0, len = gdjs.InstructionsCode.GDInstructionsDisplayObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDInstructionsDisplayObjects2[i].setString("Controls: -\nA, D: Move left and right\nW, S or K, L: Aim Cannon up and down\nSpace: Fire Cannon\nP, O: Pause, and Unpause\nQ: Quit to Main Menu");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDExitDisplayObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDExitDisplayObjects2[i].setString("Press Space to return to Main Menu");
}
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Controller_type.func(runtimeScene, 1, "Xbox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
gdjs.InstructionsCode.GDExitDisplayObjects2.createFrom(runtimeScene.getObjects("ExitDisplay"));
gdjs.InstructionsCode.GDInstructionsDisplayObjects2.createFrom(runtimeScene.getObjects("InstructionsDisplay"));
{for(var i = 0, len = gdjs.InstructionsCode.GDInstructionsDisplayObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDInstructionsDisplayObjects2[i].setString("Controls: -\nDpad/Left Stick: Move left and right\nDpad/Right Stick: Aim Cannon up and down\n'A'/LT/RT: Fire Cannon\n'Start', 'Y': Pause, and Unpause\n'Back': Quit to Main Menu");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDExitDisplayObjects2.length ;i < len;++i) {
    gdjs.InstructionsCode.GDExitDisplayObjects2[i].setString("Press 'A' to return to Main Menu");
}
}}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Controller_type.func(runtimeScene, 1, "PS4", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
gdjs.InstructionsCode.condition1IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Controller_type.func(runtimeScene, 1, "PS3", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
if (gdjs.InstructionsCode.condition1IsTrue_0.val) {
gdjs.InstructionsCode.GDExitDisplayObjects1.createFrom(runtimeScene.getObjects("ExitDisplay"));
gdjs.InstructionsCode.GDInstructionsDisplayObjects1.createFrom(runtimeScene.getObjects("InstructionsDisplay"));
{for(var i = 0, len = gdjs.InstructionsCode.GDInstructionsDisplayObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDInstructionsDisplayObjects1[i].setString("Controls: -\nDpad/Left Stick: Move left and right\nDpad/Right Stick: Aim Cannon up and down\n'Cross'/L2/R2: Fire Cannon\n'Options', 'Triangle': Pause, and Unpause\n'Share': Quit to Main Menu");
}
}{for(var i = 0, len = gdjs.InstructionsCode.GDExitDisplayObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDExitDisplayObjects1[i].setString("Press 'Cross' to return to Main Menu");
}
}}

}


}; //End of gdjs.InstructionsCode.eventsList0x741bbc
gdjs.InstructionsCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "InstructionsTimer");
}
{ //Subevents
gdjs.InstructionsCode.eventsList0x741bbc(runtimeScene);} //End of subevents
}

}


{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
gdjs.InstructionsCode.condition1IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "InstructionsTimer");
}if ( gdjs.InstructionsCode.condition0IsTrue_0.val ) {
{
{gdjs.InstructionsCode.conditionTrue_1 = gdjs.InstructionsCode.condition1IsTrue_0;
gdjs.InstructionsCode.condition0IsTrue_1.val = false;
gdjs.InstructionsCode.condition1IsTrue_1.val = false;
gdjs.InstructionsCode.condition2IsTrue_1.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.InstructionsCode.condition0IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
}
}
{
gdjs.InstructionsCode.condition1IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.InstructionsCode.condition1IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
}
}
{
gdjs.InstructionsCode.condition2IsTrue_1.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "CROSS", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if( gdjs.InstructionsCode.condition2IsTrue_1.val ) {
    gdjs.InstructionsCode.conditionTrue_1.val = true;
}
}
{
}
}
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
gdjs.InstructionsCode.GDCharactersDisplayObjects3.length = 0;
gdjs.InstructionsCode.GDBalloonBigObjects1.length = 0;
gdjs.InstructionsCode.GDBalloonBigObjects2.length = 0;
gdjs.InstructionsCode.GDBalloonBigObjects3.length = 0;
gdjs.InstructionsCode.GDBalloonMidObjects1.length = 0;
gdjs.InstructionsCode.GDBalloonMidObjects2.length = 0;
gdjs.InstructionsCode.GDBalloonMidObjects3.length = 0;
gdjs.InstructionsCode.GDBalloonSmallObjects1.length = 0;
gdjs.InstructionsCode.GDBalloonSmallObjects2.length = 0;
gdjs.InstructionsCode.GDBalloonSmallObjects3.length = 0;
gdjs.InstructionsCode.GDChickenObjects1.length = 0;
gdjs.InstructionsCode.GDChickenObjects2.length = 0;
gdjs.InstructionsCode.GDChickenObjects3.length = 0;
gdjs.InstructionsCode.GDCookedChickenObjects1.length = 0;
gdjs.InstructionsCode.GDCookedChickenObjects2.length = 0;
gdjs.InstructionsCode.GDCookedChickenObjects3.length = 0;
gdjs.InstructionsCode.GDBombObjects1.length = 0;
gdjs.InstructionsCode.GDBombObjects2.length = 0;
gdjs.InstructionsCode.GDBombObjects3.length = 0;
gdjs.InstructionsCode.GDDogObjects1.length = 0;
gdjs.InstructionsCode.GDDogObjects2.length = 0;
gdjs.InstructionsCode.GDDogObjects3.length = 0;
gdjs.InstructionsCode.GDExitDisplayObjects1.length = 0;
gdjs.InstructionsCode.GDExitDisplayObjects2.length = 0;
gdjs.InstructionsCode.GDExitDisplayObjects3.length = 0;
gdjs.InstructionsCode.GDInstructionsDisplayObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsDisplayObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsDisplayObjects3.length = 0;
gdjs.InstructionsCode.GDLoreDisplayObjects1.length = 0;
gdjs.InstructionsCode.GDLoreDisplayObjects2.length = 0;
gdjs.InstructionsCode.GDLoreDisplayObjects3.length = 0;

gdjs.InstructionsCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
