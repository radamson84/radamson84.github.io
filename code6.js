gdjs.Audio_32MenuCode = {};
gdjs.Audio_32MenuCode.GDSelectorObjects1= [];
gdjs.Audio_32MenuCode.GDSelectorObjects2= [];
gdjs.Audio_32MenuCode.GDSelectorObjects3= [];
gdjs.Audio_32MenuCode.GDSelectorObjects4= [];
gdjs.Audio_32MenuCode.GDMusicLevelObjects1= [];
gdjs.Audio_32MenuCode.GDMusicLevelObjects2= [];
gdjs.Audio_32MenuCode.GDMusicLevelObjects3= [];
gdjs.Audio_32MenuCode.GDMusicLevelObjects4= [];
gdjs.Audio_32MenuCode.GDSoundLevelObjects1= [];
gdjs.Audio_32MenuCode.GDSoundLevelObjects2= [];
gdjs.Audio_32MenuCode.GDSoundLevelObjects3= [];
gdjs.Audio_32MenuCode.GDSoundLevelObjects4= [];
gdjs.Audio_32MenuCode.GDReturnSelectionObjects1= [];
gdjs.Audio_32MenuCode.GDReturnSelectionObjects2= [];
gdjs.Audio_32MenuCode.GDReturnSelectionObjects3= [];
gdjs.Audio_32MenuCode.GDReturnSelectionObjects4= [];
gdjs.Audio_32MenuCode.GDControlsDisplayObjects1= [];
gdjs.Audio_32MenuCode.GDControlsDisplayObjects2= [];
gdjs.Audio_32MenuCode.GDControlsDisplayObjects3= [];
gdjs.Audio_32MenuCode.GDControlsDisplayObjects4= [];

gdjs.Audio_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Audio_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Audio_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Audio_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Audio_32MenuCode.mapOfGDgdjs_46Audio_9532MenuCode_46GDSelectorObjects1Objects = Hashtable.newFrom({"Selector": gdjs.Audio_32MenuCode.GDSelectorObjects1});gdjs.Audio_32MenuCode.eventsList0x80771c = function(runtimeScene) {

{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MusicVolume")) > 5;
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
gdjs.Audio_32MenuCode.GDMusicLevelObjects3.createFrom(runtimeScene.getObjects("MusicLevel"));
{runtimeScene.getGame().getVariables().get("MusicVolume").setNumber(0);
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MusicVolume")) * 20));
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDMusicLevelObjects3.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDMusicLevelObjects3[i].setString("MUSIC VOLUME: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MusicVolume"))));
}
}}

}


{


{
gdjs.Audio_32MenuCode.GDMusicLevelObjects2.createFrom(runtimeScene.getObjects("MusicLevel"));
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MusicVolume")) * 20));
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDMusicLevelObjects2.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDMusicLevelObjects2[i].setString("MUSIC VOLUME: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MusicVolume"))));
}
}}

}


}; //End of gdjs.Audio_32MenuCode.eventsList0x80771c
gdjs.Audio_32MenuCode.eventsList0x988fbc = function(runtimeScene) {

{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) > 5;
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
gdjs.Audio_32MenuCode.GDSoundLevelObjects3.createFrom(runtimeScene.getObjects("SoundLevel"));
{runtimeScene.getGame().getVariables().get("SoundVolume").setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDSoundLevelObjects3.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDSoundLevelObjects3[i].setString("SOUND VOLUME: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume"))));
}
}}

}


{


{
gdjs.Audio_32MenuCode.GDSoundLevelObjects2.createFrom(runtimeScene.getObjects("SoundLevel"));
{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDSoundLevelObjects2.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDSoundLevelObjects2[i].setString("SOUND VOLUME: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume"))));
}
}}

}


}; //End of gdjs.Audio_32MenuCode.eventsList0x988fbc
gdjs.Audio_32MenuCode.eventsList0x98e2f4 = function(runtimeScene) {

{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) == 0;
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("MusicVolume").add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}
{ //Subevents
gdjs.Audio_32MenuCode.eventsList0x80771c(runtimeScene);} //End of subevents
}

}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) == 1;
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("SoundVolume").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}
{ //Subevents
gdjs.Audio_32MenuCode.eventsList0x988fbc(runtimeScene);} //End of subevents
}

}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) == 2;
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


}; //End of gdjs.Audio_32MenuCode.eventsList0x98e2f4
gdjs.Audio_32MenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{



}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
gdjs.Audio_32MenuCode.GDMusicLevelObjects1.createFrom(runtimeScene.getObjects("MusicLevel"));
gdjs.Audio_32MenuCode.GDSoundLevelObjects1.createFrom(runtimeScene.getObjects("SoundLevel"));
gdjs.Audio_32MenuCode.GDSelectorObjects1.length = 0;

{for(var i = 0, len = gdjs.Audio_32MenuCode.GDMusicLevelObjects1.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDMusicLevelObjects1[i].setString("MUSIC VOLUME: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MusicVolume"))));
}
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDSoundLevelObjects1.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDSoundLevelObjects1[i].setString("SOUND VOLUME: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume"))));
}
}{runtimeScene.getVariables().get("Selection").setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Audio_32MenuCode.mapOfGDgdjs_46Audio_9532MenuCode_46GDSelectorObjects1Objects, 410, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 196, "");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "01_-_Syobon_Action_-_W32_-_Titerman.ogg", 1, true, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("MusicVolume")) * 20), 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}}

}


{



}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Audio_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "MenuDelay");
}if ( gdjs.Audio_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Audio_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.Audio_32MenuCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Audio_32MenuCode.eventsList0x98e2f4(runtimeScene);} //End of subevents
}

}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Audio_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.Audio_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Audio_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "MenuDelay");
}}
if (gdjs.Audio_32MenuCode.condition1IsTrue_0.val) {
gdjs.Audio_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").sub(1);
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 196);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}}

}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Audio_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.Audio_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Audio_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "MenuDelay");
}}
if (gdjs.Audio_32MenuCode.condition1IsTrue_0.val) {
gdjs.Audio_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").add(1);
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 196);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MenuDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}}

}


{



}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) > 2;
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
gdjs.Audio_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").setNumber(0);
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 196);
}
}}

}


{


gdjs.Audio_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Audio_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) < 0;
}if (gdjs.Audio_32MenuCode.condition0IsTrue_0.val) {
gdjs.Audio_32MenuCode.GDSelectorObjects1.createFrom(runtimeScene.getObjects("Selector"));
{runtimeScene.getVariables().get("Selection").setNumber(2);
}{for(var i = 0, len = gdjs.Audio_32MenuCode.GDSelectorObjects1.length ;i < len;++i) {
    gdjs.Audio_32MenuCode.GDSelectorObjects1[i].setY((gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Selection")) * 40) + 196);
}
}}

}


}; //End of gdjs.Audio_32MenuCode.eventsList0x5b70b8


gdjs.Audio_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Audio_32MenuCode.GDSelectorObjects1.length = 0;
gdjs.Audio_32MenuCode.GDSelectorObjects2.length = 0;
gdjs.Audio_32MenuCode.GDSelectorObjects3.length = 0;
gdjs.Audio_32MenuCode.GDSelectorObjects4.length = 0;
gdjs.Audio_32MenuCode.GDMusicLevelObjects1.length = 0;
gdjs.Audio_32MenuCode.GDMusicLevelObjects2.length = 0;
gdjs.Audio_32MenuCode.GDMusicLevelObjects3.length = 0;
gdjs.Audio_32MenuCode.GDMusicLevelObjects4.length = 0;
gdjs.Audio_32MenuCode.GDSoundLevelObjects1.length = 0;
gdjs.Audio_32MenuCode.GDSoundLevelObjects2.length = 0;
gdjs.Audio_32MenuCode.GDSoundLevelObjects3.length = 0;
gdjs.Audio_32MenuCode.GDSoundLevelObjects4.length = 0;
gdjs.Audio_32MenuCode.GDReturnSelectionObjects1.length = 0;
gdjs.Audio_32MenuCode.GDReturnSelectionObjects2.length = 0;
gdjs.Audio_32MenuCode.GDReturnSelectionObjects3.length = 0;
gdjs.Audio_32MenuCode.GDReturnSelectionObjects4.length = 0;
gdjs.Audio_32MenuCode.GDControlsDisplayObjects1.length = 0;
gdjs.Audio_32MenuCode.GDControlsDisplayObjects2.length = 0;
gdjs.Audio_32MenuCode.GDControlsDisplayObjects3.length = 0;
gdjs.Audio_32MenuCode.GDControlsDisplayObjects4.length = 0;

gdjs.Audio_32MenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Audio_32MenuCode'] = gdjs.Audio_32MenuCode;
