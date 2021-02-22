gdjs.Name_32EntryCode = {};
gdjs.Name_32EntryCode.GDEntryObjects1= [];
gdjs.Name_32EntryCode.GDEntryObjects2= [];
gdjs.Name_32EntryCode.GDScoreDisplayObjects1= [];
gdjs.Name_32EntryCode.GDScoreDisplayObjects2= [];
gdjs.Name_32EntryCode.GDMessageDisplayObjects1= [];
gdjs.Name_32EntryCode.GDMessageDisplayObjects2= [];
gdjs.Name_32EntryCode.GDEntryDisplayObjects1= [];
gdjs.Name_32EntryCode.GDEntryDisplayObjects2= [];

gdjs.Name_32EntryCode.conditionTrue_0 = {val:false};
gdjs.Name_32EntryCode.condition0IsTrue_0 = {val:false};
gdjs.Name_32EntryCode.condition1IsTrue_0 = {val:false};


gdjs.Name_32EntryCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.Name_32EntryCode.condition0IsTrue_0.val = false;
{
gdjs.Name_32EntryCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Name_32EntryCode.condition0IsTrue_0.val) {
gdjs.Name_32EntryCode.GDScoreDisplayObjects1.createFrom(runtimeScene.getObjects("ScoreDisplay"));
{for(var i = 0, len = gdjs.Name_32EntryCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.Name_32EntryCode.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}}

}


{


{
gdjs.Name_32EntryCode.GDEntryObjects1.createFrom(runtimeScene.getObjects("Entry"));
gdjs.Name_32EntryCode.GDEntryDisplayObjects1.createFrom(runtimeScene.getObjects("EntryDisplay"));
{for(var i = 0, len = gdjs.Name_32EntryCode.GDEntryDisplayObjects1.length ;i < len;++i) {
    gdjs.Name_32EntryCode.GDEntryDisplayObjects1[i].setString((( gdjs.Name_32EntryCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.Name_32EntryCode.GDEntryObjects1[0].getString()));
}
}}

}


{


gdjs.Name_32EntryCode.condition0IsTrue_0.val = false;
{
gdjs.Name_32EntryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Name_32EntryCode.condition0IsTrue_0.val) {
gdjs.Name_32EntryCode.GDEntryObjects1.createFrom(runtimeScene.getObjects("Entry"));
{runtimeScene.getGame().getVariables().get("NewName").setString((( gdjs.Name_32EntryCode.GDEntryObjects1.length === 0 ) ? "" :gdjs.Name_32EntryCode.GDEntryObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "High Scores", false);
}}

}


}; //End of gdjs.Name_32EntryCode.eventsList0x5b70b8


gdjs.Name_32EntryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Name_32EntryCode.GDEntryObjects1.length = 0;
gdjs.Name_32EntryCode.GDEntryObjects2.length = 0;
gdjs.Name_32EntryCode.GDScoreDisplayObjects1.length = 0;
gdjs.Name_32EntryCode.GDScoreDisplayObjects2.length = 0;
gdjs.Name_32EntryCode.GDMessageDisplayObjects1.length = 0;
gdjs.Name_32EntryCode.GDMessageDisplayObjects2.length = 0;
gdjs.Name_32EntryCode.GDEntryDisplayObjects1.length = 0;
gdjs.Name_32EntryCode.GDEntryDisplayObjects2.length = 0;

gdjs.Name_32EntryCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Name_32EntryCode'] = gdjs.Name_32EntryCode;
