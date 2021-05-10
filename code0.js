gdjs.BootCode = {};

gdjs.BootCode.conditionTrue_0 = {val:false};
gdjs.BootCode.condition0IsTrue_0 = {val:false};
gdjs.BootCode.condition1IsTrue_0 = {val:false};


gdjs.BootCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.BootCode.condition0IsTrue_0.val = false;
{
gdjs.BootCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BootCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Score1").setNumber(5680);
}{runtimeScene.getGame().getVariables().get("Score2").setNumber(4760);
}{runtimeScene.getGame().getVariables().get("Score3").setNumber(3840);
}{runtimeScene.getGame().getVariables().get("Score4").setNumber(2300);
}{runtimeScene.getGame().getVariables().get("Score5").setNumber(1620);
}{runtimeScene.getGame().getVariables().get("Name1").setString("Nagito");
}{runtimeScene.getGame().getVariables().get("Name2").setString("Chiaki");
}{runtimeScene.getGame().getVariables().get("Name3").setString("Hajime");
}{runtimeScene.getGame().getVariables().get("Name4").setString("Fuyuhiko");
}{runtimeScene.getGame().getVariables().get("Name5").setString("Hiyoko");
}{runtimeScene.getGame().getVariables().get("MusicVolume").setNumber(5);
}{runtimeScene.getGame().getVariables().get("SoundVolume").setNumber(5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


}; //End of gdjs.BootCode.eventsList0x5b70b8


gdjs.BootCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.BootCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['BootCode'] = gdjs.BootCode;
