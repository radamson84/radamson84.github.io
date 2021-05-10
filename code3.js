gdjs.High_32ScoresCode = {};
gdjs.High_32ScoresCode.GDHighScoresTitleObjects1= [];
gdjs.High_32ScoresCode.GDHighScoresTitleObjects2= [];
gdjs.High_32ScoresCode.GDHighScoresTitleObjects3= [];
gdjs.High_32ScoresCode.GDScoreName1Objects1= [];
gdjs.High_32ScoresCode.GDScoreName1Objects2= [];
gdjs.High_32ScoresCode.GDScoreName1Objects3= [];
gdjs.High_32ScoresCode.GDScoreName2Objects1= [];
gdjs.High_32ScoresCode.GDScoreName2Objects2= [];
gdjs.High_32ScoresCode.GDScoreName2Objects3= [];
gdjs.High_32ScoresCode.GDScoreName3Objects1= [];
gdjs.High_32ScoresCode.GDScoreName3Objects2= [];
gdjs.High_32ScoresCode.GDScoreName3Objects3= [];
gdjs.High_32ScoresCode.GDScoreName4Objects1= [];
gdjs.High_32ScoresCode.GDScoreName4Objects2= [];
gdjs.High_32ScoresCode.GDScoreName4Objects3= [];
gdjs.High_32ScoresCode.GDScoreName5Objects1= [];
gdjs.High_32ScoresCode.GDScoreName5Objects2= [];
gdjs.High_32ScoresCode.GDScoreName5Objects3= [];
gdjs.High_32ScoresCode.GDScoreDisplay1Objects1= [];
gdjs.High_32ScoresCode.GDScoreDisplay1Objects2= [];
gdjs.High_32ScoresCode.GDScoreDisplay1Objects3= [];
gdjs.High_32ScoresCode.GDScoreDisplay2Objects1= [];
gdjs.High_32ScoresCode.GDScoreDisplay2Objects2= [];
gdjs.High_32ScoresCode.GDScoreDisplay2Objects3= [];
gdjs.High_32ScoresCode.GDScoreDisplay3Objects1= [];
gdjs.High_32ScoresCode.GDScoreDisplay3Objects2= [];
gdjs.High_32ScoresCode.GDScoreDisplay3Objects3= [];
gdjs.High_32ScoresCode.GDScoreDisplay4Objects1= [];
gdjs.High_32ScoresCode.GDScoreDisplay4Objects2= [];
gdjs.High_32ScoresCode.GDScoreDisplay4Objects3= [];
gdjs.High_32ScoresCode.GDScoreDisplay5Objects1= [];
gdjs.High_32ScoresCode.GDScoreDisplay5Objects2= [];
gdjs.High_32ScoresCode.GDScoreDisplay5Objects3= [];
gdjs.High_32ScoresCode.GDContinueObjects1= [];
gdjs.High_32ScoresCode.GDContinueObjects2= [];
gdjs.High_32ScoresCode.GDContinueObjects3= [];

gdjs.High_32ScoresCode.conditionTrue_0 = {val:false};
gdjs.High_32ScoresCode.condition0IsTrue_0 = {val:false};
gdjs.High_32ScoresCode.condition1IsTrue_0 = {val:false};
gdjs.High_32ScoresCode.condition2IsTrue_0 = {val:false};


gdjs.High_32ScoresCode.eventsList0x98944c = function(runtimeScene) {

{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
gdjs.High_32ScoresCode.condition1IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score5"));
}if ( gdjs.High_32ScoresCode.condition0IsTrue_0.val ) {
{
gdjs.High_32ScoresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score4"));
}}
if (gdjs.High_32ScoresCode.condition1IsTrue_0.val) {
gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay5Objects1);

gdjs.High_32ScoresCode.GDScoreName5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName5Objects1);

{runtimeScene.getGame().getVariables().get("Score5").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}{runtimeScene.getGame().getVariables().get("Name5").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("NewName")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score5")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name5")));
}
}}

}


{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
gdjs.High_32ScoresCode.condition1IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score4"));
}if ( gdjs.High_32ScoresCode.condition0IsTrue_0.val ) {
{
gdjs.High_32ScoresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score3"));
}}
if (gdjs.High_32ScoresCode.condition1IsTrue_0.val) {
gdjs.High_32ScoresCode.GDScoreDisplay4Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay4Objects1);

gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay5Objects1);

gdjs.High_32ScoresCode.GDScoreName4Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName4Objects1);

gdjs.High_32ScoresCode.GDScoreName5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName5Objects1);

{runtimeScene.getGame().getVariables().get("Score5").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score4")));
}{runtimeScene.getGame().getVariables().get("Name5").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score5")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name5")));
}
}{runtimeScene.getGame().getVariables().get("Score4").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}{runtimeScene.getGame().getVariables().get("Name4").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("NewName")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay4Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay4Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score4")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName4Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName4Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}
}}

}


{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
gdjs.High_32ScoresCode.condition1IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score3"));
}if ( gdjs.High_32ScoresCode.condition0IsTrue_0.val ) {
{
gdjs.High_32ScoresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score2"));
}}
if (gdjs.High_32ScoresCode.condition1IsTrue_0.val) {
gdjs.High_32ScoresCode.GDScoreDisplay3Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay3Objects1);

gdjs.High_32ScoresCode.GDScoreDisplay4Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay4Objects1);

gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay5Objects1);

gdjs.High_32ScoresCode.GDScoreName3Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName3Objects1);

gdjs.High_32ScoresCode.GDScoreName4Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName4Objects1);

gdjs.High_32ScoresCode.GDScoreName5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName5Objects1);

{runtimeScene.getGame().getVariables().get("Score5").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score4")));
}{runtimeScene.getGame().getVariables().get("Name5").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score5")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name5")));
}
}{runtimeScene.getGame().getVariables().get("Score4").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score3")));
}{runtimeScene.getGame().getVariables().get("Name4").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name3")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay4Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay4Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score4")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName4Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName4Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}
}{runtimeScene.getGame().getVariables().get("Score3").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}{runtimeScene.getGame().getVariables().get("Name3").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("NewName")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay3Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score3")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName3Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name3")));
}
}}

}


{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
gdjs.High_32ScoresCode.condition1IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score2"));
}if ( gdjs.High_32ScoresCode.condition0IsTrue_0.val ) {
{
gdjs.High_32ScoresCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score1"));
}}
if (gdjs.High_32ScoresCode.condition1IsTrue_0.val) {
gdjs.High_32ScoresCode.GDScoreDisplay2Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay2Objects1);

gdjs.High_32ScoresCode.GDScoreDisplay3Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay3Objects1);

gdjs.High_32ScoresCode.GDScoreDisplay4Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay4Objects1);

gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreDisplay5Objects1);

gdjs.High_32ScoresCode.GDScoreName2Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName2Objects1);

gdjs.High_32ScoresCode.GDScoreName3Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName3Objects1);

gdjs.High_32ScoresCode.GDScoreName4Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName4Objects1);

gdjs.High_32ScoresCode.GDScoreName5Objects2.createFrom(gdjs.High_32ScoresCode.GDScoreName5Objects1);

{runtimeScene.getGame().getVariables().get("Score5").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score4")));
}{runtimeScene.getGame().getVariables().get("Name5").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score5")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName5Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName5Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name5")));
}
}{runtimeScene.getGame().getVariables().get("Score4").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score3")));
}{runtimeScene.getGame().getVariables().get("Name4").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name3")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay4Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay4Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score4")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName4Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName4Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}
}{runtimeScene.getGame().getVariables().get("Score3").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score2")));
}{runtimeScene.getGame().getVariables().get("Name3").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name2")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay3Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score3")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName3Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName3Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name3")));
}
}{runtimeScene.getGame().getVariables().get("Score2").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}{runtimeScene.getGame().getVariables().get("Name2").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("NewName")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay2Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score2")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName2Objects2.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName2Objects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name2")));
}
}}

}


{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score1"));
}if (gdjs.High_32ScoresCode.condition0IsTrue_0.val) {
/* Reuse gdjs.High_32ScoresCode.GDScoreDisplay1Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreDisplay2Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreDisplay3Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreDisplay4Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreDisplay5Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreName1Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreName2Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreName3Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreName4Objects1 */
/* Reuse gdjs.High_32ScoresCode.GDScoreName5Objects1 */
{runtimeScene.getGame().getVariables().get("Score5").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score4")));
}{runtimeScene.getGame().getVariables().get("Name5").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay5Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score5")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName5Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name5")));
}
}{runtimeScene.getGame().getVariables().get("Score4").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score3")));
}{runtimeScene.getGame().getVariables().get("Name4").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name3")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay4Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score4")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName4Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}
}{runtimeScene.getGame().getVariables().get("Score3").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score2")));
}{runtimeScene.getGame().getVariables().get("Name3").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name2")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay3Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score3")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName3Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name3")));
}
}{runtimeScene.getGame().getVariables().get("Score2").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score1")));
}{runtimeScene.getGame().getVariables().get("Name2").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name1")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay2Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score2")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName2Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name2")));
}
}{runtimeScene.getGame().getVariables().get("Score1").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}{runtimeScene.getGame().getVariables().get("Name1").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("NewName")));
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay1Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score1")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName1Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name1")));
}
}}

}


}; //End of gdjs.High_32ScoresCode.eventsList0x98944c
gdjs.High_32ScoresCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.High_32ScoresCode.condition0IsTrue_0.val = false;
{
gdjs.High_32ScoresCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.High_32ScoresCode.condition0IsTrue_0.val) {
gdjs.High_32ScoresCode.GDScoreDisplay1Objects1.createFrom(runtimeScene.getObjects("ScoreDisplay1"));
gdjs.High_32ScoresCode.GDScoreDisplay2Objects1.createFrom(runtimeScene.getObjects("ScoreDisplay2"));
gdjs.High_32ScoresCode.GDScoreDisplay3Objects1.createFrom(runtimeScene.getObjects("ScoreDisplay3"));
gdjs.High_32ScoresCode.GDScoreDisplay4Objects1.createFrom(runtimeScene.getObjects("ScoreDisplay4"));
gdjs.High_32ScoresCode.GDScoreDisplay5Objects1.createFrom(runtimeScene.getObjects("ScoreDisplay5"));
gdjs.High_32ScoresCode.GDScoreName1Objects1.createFrom(runtimeScene.getObjects("ScoreName1"));
gdjs.High_32ScoresCode.GDScoreName2Objects1.createFrom(runtimeScene.getObjects("ScoreName2"));
gdjs.High_32ScoresCode.GDScoreName3Objects1.createFrom(runtimeScene.getObjects("ScoreName3"));
gdjs.High_32ScoresCode.GDScoreName4Objects1.createFrom(runtimeScene.getObjects("ScoreName4"));
gdjs.High_32ScoresCode.GDScoreName5Objects1.createFrom(runtimeScene.getObjects("ScoreName5"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HighScoreDelay");
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay1Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score1")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay2Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score2")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay3Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score3")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay4Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score4")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreDisplay5Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreDisplay5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score5")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName1Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName1Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name1")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName2Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName2Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name2")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName3Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName3Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name3")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName4Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName4Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name4")));
}
}{for(var i = 0, len = gdjs.High_32ScoresCode.GDScoreName5Objects1.length ;i < len;++i) {
    gdjs.High_32ScoresCode.GDScoreName5Objects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Name5")));
}
}
{ //Subevents
gdjs.High_32ScoresCode.eventsList0x98944c(runtimeScene);} //End of subevents
}

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
{gdjs.evtTools.sound.playSound(runtimeScene, "tick.wav", false, (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("SoundVolume")) * 20), 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


}; //End of gdjs.High_32ScoresCode.eventsList0x5b70b8


gdjs.High_32ScoresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.High_32ScoresCode.GDHighScoresTitleObjects1.length = 0;
gdjs.High_32ScoresCode.GDHighScoresTitleObjects2.length = 0;
gdjs.High_32ScoresCode.GDHighScoresTitleObjects3.length = 0;
gdjs.High_32ScoresCode.GDScoreName1Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreName1Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreName1Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreName2Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreName2Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreName2Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreName3Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreName3Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreName3Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreName4Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreName4Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreName4Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreName5Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreName5Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreName5Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay1Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay1Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay1Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay2Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay2Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay2Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay3Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay3Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay3Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay4Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay4Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay4Objects3.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay5Objects1.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay5Objects2.length = 0;
gdjs.High_32ScoresCode.GDScoreDisplay5Objects3.length = 0;
gdjs.High_32ScoresCode.GDContinueObjects1.length = 0;
gdjs.High_32ScoresCode.GDContinueObjects2.length = 0;
gdjs.High_32ScoresCode.GDContinueObjects3.length = 0;

gdjs.High_32ScoresCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['High_32ScoresCode'] = gdjs.High_32ScoresCode;
