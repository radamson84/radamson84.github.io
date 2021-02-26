gdjs.Main_32GameCode = {};
gdjs.Main_32GameCode.GDSharkObjects1= [];
gdjs.Main_32GameCode.GDSharkObjects2= [];
gdjs.Main_32GameCode.GDSharkObjects3= [];
gdjs.Main_32GameCode.GDGunObjects1= [];
gdjs.Main_32GameCode.GDGunObjects2= [];
gdjs.Main_32GameCode.GDGunObjects3= [];
gdjs.Main_32GameCode.GDBulletObjects1= [];
gdjs.Main_32GameCode.GDBulletObjects2= [];
gdjs.Main_32GameCode.GDBulletObjects3= [];
gdjs.Main_32GameCode.GDBalloonObjects1= [];
gdjs.Main_32GameCode.GDBalloonObjects2= [];
gdjs.Main_32GameCode.GDBalloonObjects3= [];
gdjs.Main_32GameCode.GDCookedChickenObjects1= [];
gdjs.Main_32GameCode.GDCookedChickenObjects2= [];
gdjs.Main_32GameCode.GDCookedChickenObjects3= [];
gdjs.Main_32GameCode.GDChickenObjects1= [];
gdjs.Main_32GameCode.GDChickenObjects2= [];
gdjs.Main_32GameCode.GDChickenObjects3= [];
gdjs.Main_32GameCode.GDBombObjects1= [];
gdjs.Main_32GameCode.GDBombObjects2= [];
gdjs.Main_32GameCode.GDBombObjects3= [];
gdjs.Main_32GameCode.GDHealthDisplayObjects1= [];
gdjs.Main_32GameCode.GDHealthDisplayObjects2= [];
gdjs.Main_32GameCode.GDHealthDisplayObjects3= [];
gdjs.Main_32GameCode.GDScoreDisplayObjects1= [];
gdjs.Main_32GameCode.GDScoreDisplayObjects2= [];
gdjs.Main_32GameCode.GDScoreDisplayObjects3= [];
gdjs.Main_32GameCode.GDGameOverDisplayObjects1= [];
gdjs.Main_32GameCode.GDGameOverDisplayObjects2= [];
gdjs.Main_32GameCode.GDGameOverDisplayObjects3= [];
gdjs.Main_32GameCode.GDBalloonDisplayObjects1= [];
gdjs.Main_32GameCode.GDBalloonDisplayObjects2= [];
gdjs.Main_32GameCode.GDBalloonDisplayObjects3= [];
gdjs.Main_32GameCode.GDHungerDisplayObjects1= [];
gdjs.Main_32GameCode.GDHungerDisplayObjects2= [];
gdjs.Main_32GameCode.GDHungerDisplayObjects3= [];
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1= [];
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects2= [];
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects3= [];
gdjs.Main_32GameCode.GDFloorTileObjects1= [];
gdjs.Main_32GameCode.GDFloorTileObjects2= [];
gdjs.Main_32GameCode.GDFloorTileObjects3= [];
gdjs.Main_32GameCode.GDScoreFlashObjects1= [];
gdjs.Main_32GameCode.GDScoreFlashObjects2= [];
gdjs.Main_32GameCode.GDScoreFlashObjects3= [];

gdjs.Main_32GameCode.conditionTrue_0 = {val:false};
gdjs.Main_32GameCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32GameCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32GameCode.condition2IsTrue_0 = {val:false};
gdjs.Main_32GameCode.condition3IsTrue_0 = {val:false};
gdjs.Main_32GameCode.conditionTrue_1 = {val:false};
gdjs.Main_32GameCode.condition0IsTrue_1 = {val:false};
gdjs.Main_32GameCode.condition1IsTrue_1 = {val:false};
gdjs.Main_32GameCode.condition2IsTrue_1 = {val:false};
gdjs.Main_32GameCode.condition3IsTrue_1 = {val:false};


gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects = Hashtable.newFrom({"Shark": gdjs.Main_32GameCode.GDSharkObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDGunObjects1Objects = Hashtable.newFrom({"Gun": gdjs.Main_32GameCode.GDGunObjects1});gdjs.Main_32GameCode.eventsList0x76fb3c = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDBalloonDisplayObjects1.createFrom(runtimeScene.getObjects("BalloonDisplay"));
gdjs.Main_32GameCode.GDHungerDisplayObjects1.createFrom(runtimeScene.getObjects("HungerDisplay"));
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1.createFrom(runtimeScene.getObjects("InvincibilityDisplay"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDHungerDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHungerDisplayObjects1[i].setString("Hunger: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Hunger")));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBalloonDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBalloonDisplayObjects1[i].setString("Balloons Popped: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("BalloonCounter")));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1[i].setString("Invincibility: OFF");
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x76fb3c
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBalloonObjects1Objects = Hashtable.newFrom({"Balloon": gdjs.Main_32GameCode.GDBalloonObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.Main_32GameCode.GDBombObjects2});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.Main_32GameCode.GDChickenObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Main_32GameCode.GDBombObjects1});gdjs.Main_32GameCode.eventsList0x77259c = function(runtimeScene) {

{

/* Reuse gdjs.Main_32GameCode.GDBalloonObjects1 */
gdjs.Main_32GameCode.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects1Objects, (gdjs.Main_32GameCode.GDBalloonObjects1.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects1[0] : null));
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBombObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x77259c
gdjs.Main_32GameCode.eventsList0x771b94 = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BombWait")), "BombTimer");
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDBalloonObjects2.createFrom(gdjs.Main_32GameCode.GDBalloonObjects1);

gdjs.Main_32GameCode.GDBombObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects2Objects, ((( gdjs.Main_32GameCode.GDBalloonObjects2.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects2[0].getPointX(""))), ((( gdjs.Main_32GameCode.GDBalloonObjects2.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects2[0].getPointY("")) + 32), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects2[i].addForce(((( gdjs.Main_32GameCode.GDBalloonObjects2.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects2[0].getAverageForce().getX())), 0, 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects2[i].returnVariable(gdjs.Main_32GameCode.GDBombObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BombTimer");
}{runtimeScene.getVariables().get("BombWait").setNumber(gdjs.randomInRange(4, 8));
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Main_32GameCode.GDBalloonObjects2.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects2[0] : null), (gdjs.Main_32GameCode.GDBombObjects2.length !== 0 ? gdjs.Main_32GameCode.GDBombObjects2[0] : null));
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("ChickenWait")), "ChickenTimer");
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBalloonObjects1 */
gdjs.Main_32GameCode.GDChickenObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects1Objects, ((( gdjs.Main_32GameCode.GDBalloonObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects1[0].getPointX(""))), ((( gdjs.Main_32GameCode.GDBalloonObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects1[0].getPointY("")) + 32), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].addForce(((( gdjs.Main_32GameCode.GDBalloonObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects1[0].getAverageForce().getX())), 0, 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].returnVariable(gdjs.Main_32GameCode.GDChickenObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].returnVariable(gdjs.Main_32GameCode.GDChickenObjects1[i].getVariables().getFromIndex(1)).setNumber(-(1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChickenTimer");
}{runtimeScene.getVariables().get("ChickenWait").setNumber(gdjs.randomInRange(3, 7));
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Main_32GameCode.GDBalloonObjects1.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects1[0] : null), (gdjs.Main_32GameCode.GDChickenObjects1.length !== 0 ? gdjs.Main_32GameCode.GDChickenObjects1[0] : null));
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x77259c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Main_32GameCode.eventsList0x771b94
gdjs.Main_32GameCode.eventsList0x772e34 = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Invincibility")) == 0;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHealthDisplayObjects2.createFrom(runtimeScene.getObjects("HealthDisplay"));
{runtimeScene.getVariables().get("Health").sub(1);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects2[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) < 0;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHealthDisplayObjects1.createFrom(runtimeScene.getObjects("HealthDisplay"));
{runtimeScene.getVariables().get("Health").setNumber(0);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x772e34
gdjs.Main_32GameCode.eventsList0x7735e4 = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHungerDisplayObjects1.createFrom(runtimeScene.getObjects("HungerDisplay"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDHungerDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHungerDisplayObjects1[i].setString("Hunger: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Hunger")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x7735e4
gdjs.Main_32GameCode.eventsList0x773a1c = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHungerDisplayObjects1.createFrom(runtimeScene.getObjects("HungerDisplay"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDHungerDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHungerDisplayObjects1[i].setString("Hunger: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Hunger")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x773a1c
gdjs.Main_32GameCode.eventsList0x773e94 = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHungerDisplayObjects1.createFrom(runtimeScene.getObjects("HungerDisplay"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDHungerDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHungerDisplayObjects1[i].setString("Hunger: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Hunger")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x773e94
gdjs.Main_32GameCode.eventsList0x77430c = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHungerDisplayObjects1.createFrom(runtimeScene.getObjects("HungerDisplay"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDHungerDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHungerDisplayObjects1[i].setString("Hunger: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Hunger")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x77430c
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Main_32GameCode.GDBulletObjects1});gdjs.Main_32GameCode.eventsList0x775a3c = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Invincibility")) == 0;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHealthDisplayObjects2.createFrom(runtimeScene.getObjects("HealthDisplay"));
{runtimeScene.getVariables().get("Health").sub(10);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects2[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) < 0;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHealthDisplayObjects1.createFrom(runtimeScene.getObjects("HealthDisplay"));
{runtimeScene.getVariables().get("Health").setNumber(0);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x775a3c
gdjs.Main_32GameCode.eventsList0x776594 = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Invincibility")) == 0;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "cooldownToggle");
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects2.createFrom(runtimeScene.getObjects("InvincibilityDisplay"));
{runtimeScene.getVariables().get("Invincibility").setNumber(1);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDInvincibilityDisplayObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDInvincibilityDisplayObjects2[i].setString("Invincibility: ON");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldownToggle");
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Invincibility")) == 1;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "cooldownToggle");
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1.createFrom(runtimeScene.getObjects("InvincibilityDisplay"));
{runtimeScene.getVariables().get("Invincibility").setNumber(0);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1[i].setString("Invincibility: OFF");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldownToggle");
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x776594
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Main_32GameCode.GDBulletObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBalloonObjects1Objects = Hashtable.newFrom({"Balloon": gdjs.Main_32GameCode.GDBalloonObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects = Hashtable.newFrom({"ScoreFlash": gdjs.Main_32GameCode.GDScoreFlashObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects2Objects = Hashtable.newFrom({"CookedChicken": gdjs.Main_32GameCode.GDCookedChickenObjects2});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects2Objects = Hashtable.newFrom({"Chicken": gdjs.Main_32GameCode.GDChickenObjects2});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.Main_32GameCode.GDBombObjects2});gdjs.Main_32GameCode.eventsList0x7770dc = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDBalloonDisplayObjects2.createFrom(runtimeScene.getObjects("BalloonDisplay"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDBalloonDisplayObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBalloonDisplayObjects2[i].setString("Balloons Popped: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("BalloonCounter")));
}
}}

}


{

gdjs.Main_32GameCode.GDBalloonObjects2.createFrom(gdjs.Main_32GameCode.GDBalloonObjects1);

gdjs.Main_32GameCode.GDCookedChickenObjects2.createFrom(runtimeScene.getObjects("CookedChicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects2Objects, (gdjs.Main_32GameCode.GDBalloonObjects2.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects2[0] : null));
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDCookedChickenObjects2 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects2[i].returnVariable(gdjs.Main_32GameCode.GDCookedChickenObjects2[i].getVariables().getFromIndex(0)).setNumber(8);
}
}}

}


{

gdjs.Main_32GameCode.GDBalloonObjects2.createFrom(gdjs.Main_32GameCode.GDBalloonObjects1);

gdjs.Main_32GameCode.GDChickenObjects2.createFrom(runtimeScene.getObjects("Chicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects2Objects, (gdjs.Main_32GameCode.GDBalloonObjects2.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects2[0] : null));
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDChickenObjects2 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects2[i].returnVariable(gdjs.Main_32GameCode.GDChickenObjects2[i].getVariables().getFromIndex(0)).setNumber(8);
}
}}

}


{

gdjs.Main_32GameCode.GDBalloonObjects2.createFrom(gdjs.Main_32GameCode.GDBalloonObjects1);

gdjs.Main_32GameCode.GDBombObjects2.createFrom(runtimeScene.getObjects("Bomb"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects2Objects, (gdjs.Main_32GameCode.GDBalloonObjects2.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects2[0] : null));
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBombObjects2 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects2[i].returnVariable(gdjs.Main_32GameCode.GDBombObjects2[i].getVariables().getFromIndex(0)).setNumber(8);
}
}}

}


{


{
/* Reuse gdjs.Main_32GameCode.GDBalloonObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBalloonObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBalloonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x7770dc
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Main_32GameCode.GDBulletObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects1Objects = Hashtable.newFrom({"CookedChicken": gdjs.Main_32GameCode.GDCookedChickenObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects = Hashtable.newFrom({"Shark": gdjs.Main_32GameCode.GDSharkObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects1Objects = Hashtable.newFrom({"CookedChicken": gdjs.Main_32GameCode.GDCookedChickenObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects = Hashtable.newFrom({"ScoreFlash": gdjs.Main_32GameCode.GDScoreFlashObjects1});gdjs.Main_32GameCode.eventsList0x77861c = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 100;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDHealthDisplayObjects1 */
{runtimeScene.getVariables().get("Health").setNumber(100);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x77861c
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects = Hashtable.newFrom({"Shark": gdjs.Main_32GameCode.GDSharkObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.Main_32GameCode.GDChickenObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects = Hashtable.newFrom({"ScoreFlash": gdjs.Main_32GameCode.GDScoreFlashObjects1});gdjs.Main_32GameCode.eventsList0x7791ec = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 100;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDHealthDisplayObjects1 */
{runtimeScene.getVariables().get("Health").setNumber(100);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x7791ec
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Main_32GameCode.GDBulletObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects1Objects = Hashtable.newFrom({"Chicken": gdjs.Main_32GameCode.GDChickenObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects = Hashtable.newFrom({"ScoreFlash": gdjs.Main_32GameCode.GDScoreFlashObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects1Objects = Hashtable.newFrom({"CookedChicken": gdjs.Main_32GameCode.GDCookedChickenObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBalloonObjects2Objects = Hashtable.newFrom({"Balloon": gdjs.Main_32GameCode.GDBalloonObjects2});gdjs.Main_32GameCode.eventsList0x779d8c = function(runtimeScene) {

{

gdjs.Main_32GameCode.GDBalloonObjects2.createFrom(runtimeScene.getObjects("Balloon"));
gdjs.Main_32GameCode.GDChickenObjects2.createFrom(gdjs.Main_32GameCode.GDChickenObjects1);


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBalloonObjects2Objects, (gdjs.Main_32GameCode.GDChickenObjects2.length !== 0 ? gdjs.Main_32GameCode.GDChickenObjects2[0] : null));
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBalloonObjects2 */
/* Reuse gdjs.Main_32GameCode.GDChickenObjects2 */
gdjs.Main_32GameCode.GDCookedChickenObjects2.createFrom(gdjs.Main_32GameCode.GDCookedChickenObjects1);

{gdjs.evtTools.linkedObjects.removeLinkBetween(runtimeScene, (gdjs.Main_32GameCode.GDChickenObjects2.length !== 0 ? gdjs.Main_32GameCode.GDChickenObjects2[0] : null), (gdjs.Main_32GameCode.GDBalloonObjects2.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects2[0] : null));
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Main_32GameCode.GDCookedChickenObjects2.length !== 0 ? gdjs.Main_32GameCode.GDCookedChickenObjects2[0] : null), (gdjs.Main_32GameCode.GDBalloonObjects2.length !== 0 ? gdjs.Main_32GameCode.GDBalloonObjects2[0] : null));
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects2[i].addForce((( gdjs.Main_32GameCode.GDBalloonObjects2.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects2[0].getAverageForce().getX()), 0, 1);
}
}}

}


{


{
/* Reuse gdjs.Main_32GameCode.GDChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x779d8c
gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Main_32GameCode.GDBulletObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Main_32GameCode.GDBombObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects = Hashtable.newFrom({"ScoreFlash": gdjs.Main_32GameCode.GDScoreFlashObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects = Hashtable.newFrom({"Shark": gdjs.Main_32GameCode.GDSharkObjects1});gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.Main_32GameCode.GDBombObjects1});gdjs.Main_32GameCode.eventsList0x77b5d4 = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Invincibility")) == 0;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHealthDisplayObjects2.createFrom(runtimeScene.getObjects("HealthDisplay"));
{runtimeScene.getVariables().get("Health").sub(30);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects2.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects2[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) < 0;
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHealthDisplayObjects1.createFrom(runtimeScene.getObjects("HealthDisplay"));
{runtimeScene.getVariables().get("Health").setNumber(0);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x77b5d4
gdjs.Main_32GameCode.eventsList0x77d334 = function(runtimeScene) {

{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score5"));
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Name Entry", true);
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score5"));
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "High Scores", true);
}}

}


}; //End of gdjs.Main_32GameCode.eventsList0x77d334
gdjs.Main_32GameCode.eventsList0x5b70b8 = function(runtimeScene) {

{



}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDHealthDisplayObjects1.createFrom(runtimeScene.getObjects("HealthDisplay"));
gdjs.Main_32GameCode.GDScoreDisplayObjects1.createFrom(runtimeScene.getObjects("ScoreDisplay"));
gdjs.Main_32GameCode.GDGunObjects1.length = 0;

gdjs.Main_32GameCode.GDSharkObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects, 30, 400, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDGunObjects1Objects, (( gdjs.Main_32GameCode.GDSharkObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDSharkObjects1[0].getPointX("")), ((( gdjs.Main_32GameCode.GDSharkObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDSharkObjects1[0].getPointY("")) - 56), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}{runtimeScene.getVariables().get("Health").setNumber(100);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}{runtimeScene.getVariables().get("SpawnWait").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChickenTimer");
}{runtimeScene.getVariables().get("ChickenWait").setNumber(5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HungerTimer");
}{runtimeScene.getVariables().get("Hunger").setNumber(5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BombTimer");
}{runtimeScene.getVariables().get("BombWait").setNumber(4);
}{runtimeScene.getVariables().get("BalloonCounter").setNumber(0);
}{runtimeScene.getVariables().get("Invincibility").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldownToggle");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "01_-_Syobon_Action_-_W32_-_Titerman.ogg", true, 100, 1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x76fb3c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Main_32GameCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));
gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));
gdjs.Main_32GameCode.GDCookedChickenObjects1.createFrom(runtimeScene.getObjects("CookedChicken"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].addForce(0, 8, 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.Main_32GameCode.GDCookedChickenObjects1[i].getVariables().getFromIndex(0))), 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.Main_32GameCode.GDChickenObjects1[i].getVariables().getFromIndex(0))), 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].addForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.Main_32GameCode.GDBombObjects1[i].getVariables().getFromIndex(0))), 1);
}
}}

}


{

gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDChickenObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDChickenObjects1[i].getY() >= 432 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDChickenObjects1[k] = gdjs.Main_32GameCode.GDChickenObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDChickenObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].returnVariable(gdjs.Main_32GameCode.GDChickenObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].addForce(64 * (gdjs.RuntimeObject.getVariableNumber(gdjs.Main_32GameCode.GDChickenObjects1[i].getVariables().getFromIndex(1))), 0, 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].setY(432);
}
}}

}


{

gdjs.Main_32GameCode.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDBombObjects1[i].getY() >= 432 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDBombObjects1[k] = gdjs.Main_32GameCode.GDBombObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDBombObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBombObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].returnVariable(gdjs.Main_32GameCode.GDBombObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].addForce(-(64), 0, 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].setY(432);
}
}}

}


{

gdjs.Main_32GameCode.GDCookedChickenObjects1.createFrom(runtimeScene.getObjects("CookedChicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDCookedChickenObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDCookedChickenObjects1[i].getY() >= 432 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDCookedChickenObjects1[k] = gdjs.Main_32GameCode.GDCookedChickenObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDCookedChickenObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDCookedChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].returnVariable(gdjs.Main_32GameCode.GDCookedChickenObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].setY(432);
}
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("SpawnWait")), "SpawnTimer");
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
gdjs.Main_32GameCode.GDBalloonObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBalloonObjects1Objects, 1080, gdjs.randomInRange(50, 250), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnTimer");
}{runtimeScene.getVariables().get("SpawnWait").setNumber(gdjs.randomInRange(1, 3));
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBalloonObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBalloonObjects1[i].addForce(gdjs.randomInRange(-(128), -(64)), 0, 1);
}
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x771b94(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Hunger")), "HungerTimer");
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "HungerTimer");
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x772e34(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonCounter")) >= 20;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7812756);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Hunger").setNumber(4);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x7735e4(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonCounter")) >= 40;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7813900);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Hunger").setNumber(3);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x773a1c(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonCounter")) >= 60;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7815044);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Hunger").setNumber(2);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x773e94(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("BalloonCounter")) >= 80;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7816188);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Hunger").setNumber(1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x77430c(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cooldown");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7817308);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "m_gurel.wav", false, 100, 1);
}}

}


{



}


{

gdjs.Main_32GameCode.GDSharkObjects1.createFrom(runtimeScene.getObjects("Shark"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
gdjs.Main_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if ( gdjs.Main_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDSharkObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDSharkObjects1[i].getX() < 1016 ) {
        gdjs.Main_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDSharkObjects1[k] = gdjs.Main_32GameCode.GDSharkObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDSharkObjects1.length = k;}}
}
if (gdjs.Main_32GameCode.condition2IsTrue_0.val) {
gdjs.Main_32GameCode.GDGunObjects1.createFrom(runtimeScene.getObjects("Gun"));
/* Reuse gdjs.Main_32GameCode.GDSharkObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDSharkObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDSharkObjects1[i].addForce(96, 0, 0);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDGunObjects1[i].addForce(96, 0, 0);
}
}}

}


{

gdjs.Main_32GameCode.GDSharkObjects1.createFrom(runtimeScene.getObjects("Shark"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
gdjs.Main_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if ( gdjs.Main_32GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDSharkObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDSharkObjects1[i].getX() >= 0 ) {
        gdjs.Main_32GameCode.condition2IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDSharkObjects1[k] = gdjs.Main_32GameCode.GDSharkObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDSharkObjects1.length = k;}}
}
if (gdjs.Main_32GameCode.condition2IsTrue_0.val) {
gdjs.Main_32GameCode.GDGunObjects1.createFrom(runtimeScene.getObjects("Gun"));
/* Reuse gdjs.Main_32GameCode.GDSharkObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDSharkObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDSharkObjects1[i].addForce(-(96), 0, 0);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDGunObjects1[i].addForce(-(96), 0, 0);
}
}}

}


{

gdjs.Main_32GameCode.GDGunObjects1.createFrom(runtimeScene.getObjects("Gun"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
gdjs.Main_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if ( gdjs.Main_32GameCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition2IsTrue_0;
gdjs.Main_32GameCode.condition0IsTrue_1.val = false;
gdjs.Main_32GameCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDGunObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDGunObjects1[i].getAngle() <= 90 ) {
        gdjs.Main_32GameCode.condition0IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDGunObjects1[k] = gdjs.Main_32GameCode.GDGunObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDGunObjects1.length = k;}if ( gdjs.Main_32GameCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDGunObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDGunObjects1[i].getAngle() >= -(89) ) {
        gdjs.Main_32GameCode.condition1IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDGunObjects1[k] = gdjs.Main_32GameCode.GDGunObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDGunObjects1.length = k;}}
gdjs.Main_32GameCode.conditionTrue_1.val = true && gdjs.Main_32GameCode.condition0IsTrue_1.val && gdjs.Main_32GameCode.condition1IsTrue_1.val;
}
}}
}
if (gdjs.Main_32GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDGunObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDGunObjects1[i].rotate(-(48), runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "gasmeter.wav", false, 100, 1);
}}

}


{

gdjs.Main_32GameCode.GDGunObjects1.createFrom(runtimeScene.getObjects("Gun"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
gdjs.Main_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}if ( gdjs.Main_32GameCode.condition1IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition2IsTrue_0;
gdjs.Main_32GameCode.condition0IsTrue_1.val = false;
gdjs.Main_32GameCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDGunObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDGunObjects1[i].getAngle() <= 89 ) {
        gdjs.Main_32GameCode.condition0IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDGunObjects1[k] = gdjs.Main_32GameCode.GDGunObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDGunObjects1.length = k;}if ( gdjs.Main_32GameCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDGunObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDGunObjects1[i].getAngle() >= -(90) ) {
        gdjs.Main_32GameCode.condition1IsTrue_1.val = true;
        gdjs.Main_32GameCode.GDGunObjects1[k] = gdjs.Main_32GameCode.GDGunObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDGunObjects1.length = k;}}
gdjs.Main_32GameCode.conditionTrue_1.val = true && gdjs.Main_32GameCode.condition0IsTrue_1.val && gdjs.Main_32GameCode.condition1IsTrue_1.val;
}
}}
}
if (gdjs.Main_32GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDGunObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDGunObjects1[i].rotate(48, runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "gasmeter.wav", false, 100, 1);
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
gdjs.Main_32GameCode.condition2IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "cooldown");
}if ( gdjs.Main_32GameCode.condition1IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}}
}
if (gdjs.Main_32GameCode.condition2IsTrue_0.val) {
gdjs.Main_32GameCode.GDGunObjects1.createFrom(runtimeScene.getObjects("Gun"));
gdjs.Main_32GameCode.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects, ((( gdjs.Main_32GameCode.GDGunObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDGunObjects1[0].getPointX("")) + 27), ((( gdjs.Main_32GameCode.GDGunObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDGunObjects1[0].getPointY("")) + 59), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].addPolarForce(((( gdjs.Main_32GameCode.GDGunObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDGunObjects1[0].getAngle()) - 90), 640, 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].returnVariable(gdjs.Main_32GameCode.GDBulletObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "cooldown");
}{gdjs.evtTools.sound.playSound(runtimeScene, "magnum.wav", false, 100, 1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x775a3c(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("DebugMode")) == 1;
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32GameCode.eventsList0x776594(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Main_32GameCode.GDBalloonObjects1.createFrom(runtimeScene.getObjects("Balloon"));
gdjs.Main_32GameCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBalloonObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBalloonObjects1 */
/* Reuse gdjs.Main_32GameCode.GDBulletObjects1 */
gdjs.Main_32GameCode.GDScoreDisplayObjects1.createFrom(runtimeScene.getObjects("ScoreDisplay"));
gdjs.Main_32GameCode.GDScoreFlashObjects1.length = 0;

{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].returnVariable(gdjs.Main_32GameCode.GDBulletObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects, (( gdjs.Main_32GameCode.GDBalloonObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects1[0].getPointX("")), (( gdjs.Main_32GameCode.GDBalloonObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBalloonObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].setString("" + gdjs.evtTools.common.toString((((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * 10) - (((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) - 1) * 10))));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].resetTimer("FlashTimer");
}
}{runtimeScene.getGame().getVariables().get("Score").add((((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * 10) - (((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) - 1) * 10)));
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{runtimeScene.getVariables().get("BalloonCounter").add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "targ1.wav", false, 100, 1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x7770dc(runtimeScene);} //End of subevents
}

}


{

gdjs.Main_32GameCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));
gdjs.Main_32GameCode.GDCookedChickenObjects1.createFrom(runtimeScene.getObjects("CookedChicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDCookedChickenObjects1.createFrom(runtimeScene.getObjects("CookedChicken"));
gdjs.Main_32GameCode.GDSharkObjects1.createFrom(runtimeScene.getObjects("Shark"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));
/* Reuse gdjs.Main_32GameCode.GDCookedChickenObjects1 */
gdjs.Main_32GameCode.GDHealthDisplayObjects1.createFrom(runtimeScene.getObjects("HealthDisplay"));
gdjs.Main_32GameCode.GDScoreDisplayObjects1.createFrom(runtimeScene.getObjects("ScoreDisplay"));
gdjs.Main_32GameCode.GDScoreFlashObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects, (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointX("")), (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].setString("" + gdjs.evtTools.common.toString(20));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].resetTimer("FlashTimer");
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("Score").add(20);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{runtimeScene.getVariables().get("Health").add(30);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "croc_die.wav", false, 100, 1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x77861c(runtimeScene);} //End of subevents
}

}


{

gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));
gdjs.Main_32GameCode.GDSharkObjects1.createFrom(runtimeScene.getObjects("Shark"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) > 0;
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDChickenObjects1 */
gdjs.Main_32GameCode.GDHealthDisplayObjects1.createFrom(runtimeScene.getObjects("HealthDisplay"));
gdjs.Main_32GameCode.GDScoreDisplayObjects1.createFrom(runtimeScene.getObjects("ScoreDisplay"));
gdjs.Main_32GameCode.GDScoreFlashObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects, (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointX("")), (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].setString("" + gdjs.evtTools.common.toString(10));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].resetTimer("FlashTimer");
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("Score").add(10);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{runtimeScene.getVariables().get("Health").add(10);
}{for(var i = 0, len = gdjs.Main_32GameCode.GDHealthDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDHealthDisplayObjects1[i].setString("Health: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Health")));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "croc_die.wav", false, 100, 1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x7791ec(runtimeScene);} //End of subevents
}

}


{

gdjs.Main_32GameCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));
gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDChickenObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBulletObjects1 */
/* Reuse gdjs.Main_32GameCode.GDChickenObjects1 */
gdjs.Main_32GameCode.GDScoreDisplayObjects1.createFrom(runtimeScene.getObjects("ScoreDisplay"));
gdjs.Main_32GameCode.GDCookedChickenObjects1.length = 0;

gdjs.Main_32GameCode.GDScoreFlashObjects1.length = 0;

{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].returnVariable(gdjs.Main_32GameCode.GDBulletObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects, (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointX("")), (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].setString("" + gdjs.evtTools.common.toString((((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * 10) - (((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) - 1) * 10))));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].resetTimer("FlashTimer");
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDCookedChickenObjects1Objects, (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointX("")), (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].addForce(0, (( gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDChickenObjects1[0].getAverageForce().getY()), 1);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].returnVariable(gdjs.Main_32GameCode.GDCookedChickenObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDChickenObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDChickenObjects1[0].getVariables()).getFromIndex(0))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "vul_at1.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().get("Score").add((((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * 10) - (((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) - 1) * 10)));
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x779d8c(runtimeScene);} //End of subevents
}

}


{

gdjs.Main_32GameCode.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Main_32GameCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBulletObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBombObjects1 */
/* Reuse gdjs.Main_32GameCode.GDBulletObjects1 */
gdjs.Main_32GameCode.GDScoreDisplayObjects1.createFrom(runtimeScene.getObjects("ScoreDisplay"));
gdjs.Main_32GameCode.GDScoreFlashObjects1.length = 0;

{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].returnVariable(gdjs.Main_32GameCode.GDBulletObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDScoreFlashObjects1Objects, (( gdjs.Main_32GameCode.GDBombObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBombObjects1[0].getPointX("")), (( gdjs.Main_32GameCode.GDBombObjects1.length === 0 ) ? 0 :gdjs.Main_32GameCode.GDBombObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].setString("" + gdjs.evtTools.common.toString((((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * 10) - (((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) - 1) * 10))));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].resetTimer("FlashTimer");
}
}{runtimeScene.getGame().getVariables().get("Score").add((((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) * 10) - (((gdjs.RuntimeObject.getVariableNumber(((gdjs.Main_32GameCode.GDBulletObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Main_32GameCode.GDBulletObjects1[0].getVariables()).getFromIndex(0))) - 1) * 10)));
}{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreDisplayObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().get("Score")));
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "explos1.wav", false, 100, 1);
}}

}


{

gdjs.Main_32GameCode.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));
gdjs.Main_32GameCode.GDSharkObjects1.createFrom(runtimeScene.getObjects("Shark"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDSharkObjects1Objects, gdjs.Main_32GameCode.mapOfGDgdjs_46Main_9532GameCode_46GDBombObjects1Objects, false, runtimeScene, false);
}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBombObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "explos1.wav", false, 100, 1);
}
{ //Subevents
gdjs.Main_32GameCode.eventsList0x77b5d4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.Main_32GameCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDBulletObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDBulletObjects1[i].getY() > 490 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDBulletObjects1[k] = gdjs.Main_32GameCode.GDBulletObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDBulletObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDBalloonObjects1.createFrom(runtimeScene.getObjects("Balloon"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDBalloonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDBalloonObjects1[i].getX() < -(40) ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDBalloonObjects1[k] = gdjs.Main_32GameCode.GDBalloonObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDBalloonObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBalloonObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBalloonObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBalloonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDCookedChickenObjects1.createFrom(runtimeScene.getObjects("CookedChicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDCookedChickenObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDCookedChickenObjects1[i].getX() < -(40) ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDCookedChickenObjects1[k] = gdjs.Main_32GameCode.GDCookedChickenObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDCookedChickenObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDCookedChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDCookedChickenObjects1.createFrom(runtimeScene.getObjects("CookedChicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDCookedChickenObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDCookedChickenObjects1[i].getY() > 490 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDCookedChickenObjects1[k] = gdjs.Main_32GameCode.GDCookedChickenObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDCookedChickenObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDCookedChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDCookedChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDCookedChickenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDChickenObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDChickenObjects1[i].getX() < -(40) ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDChickenObjects1[k] = gdjs.Main_32GameCode.GDChickenObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDChickenObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDChickenObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDChickenObjects1[i].getX() > 1090 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDChickenObjects1[k] = gdjs.Main_32GameCode.GDChickenObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDChickenObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDChickenObjects1.createFrom(runtimeScene.getObjects("Chicken"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDChickenObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDChickenObjects1[i].getY() > 490 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDChickenObjects1[k] = gdjs.Main_32GameCode.GDChickenObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDChickenObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDChickenObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDChickenObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDChickenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDBombObjects1[i].getX() < -(40) ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDBombObjects1[k] = gdjs.Main_32GameCode.GDBombObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDBombObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBombObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDBombObjects1.createFrom(runtimeScene.getObjects("Bomb"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDBombObjects1[i].getY() > 490 ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDBombObjects1[k] = gdjs.Main_32GameCode.GDBombObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDBombObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDBombObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDBombObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDBombObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Main_32GameCode.GDScoreFlashObjects1.createFrom(runtimeScene.getObjects("ScoreFlash"));

gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32GameCode.GDScoreFlashObjects1.length;i<l;++i) {
    if ( gdjs.Main_32GameCode.GDScoreFlashObjects1[i].timerElapsedTime("FlashTimer", 2) ) {
        gdjs.Main_32GameCode.condition0IsTrue_0.val = true;
        gdjs.Main_32GameCode.GDScoreFlashObjects1[k] = gdjs.Main_32GameCode.GDScoreFlashObjects1[i];
        ++k;
    }
}
gdjs.Main_32GameCode.GDScoreFlashObjects1.length = k;}if (gdjs.Main_32GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32GameCode.GDScoreFlashObjects1 */
{for(var i = 0, len = gdjs.Main_32GameCode.GDScoreFlashObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDScoreFlashObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) <= 0;
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_32GameCode.conditionTrue_1 = gdjs.Main_32GameCode.condition1IsTrue_0;
gdjs.Main_32GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7852276);
}
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {
gdjs.Main_32GameCode.GDGameOverDisplayObjects1.createFrom(runtimeScene.getObjects("GameOverDisplay"));
{for(var i = 0, len = gdjs.Main_32GameCode.GDGameOverDisplayObjects1.length ;i < len;++i) {
    gdjs.Main_32GameCode.GDGameOverDisplayObjects1[i].setString("GAME OVER");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameOverTimer");
}}

}


{


gdjs.Main_32GameCode.condition0IsTrue_0.val = false;
gdjs.Main_32GameCode.condition1IsTrue_0.val = false;
{
gdjs.Main_32GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "GameOverTimer");
}if ( gdjs.Main_32GameCode.condition0IsTrue_0.val ) {
{
gdjs.Main_32GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Health")) <= 0;
}}
if (gdjs.Main_32GameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Main_32GameCode.eventsList0x77d334(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Main_32GameCode.eventsList0x5b70b8


gdjs.Main_32GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32GameCode.GDSharkObjects1.length = 0;
gdjs.Main_32GameCode.GDSharkObjects2.length = 0;
gdjs.Main_32GameCode.GDSharkObjects3.length = 0;
gdjs.Main_32GameCode.GDGunObjects1.length = 0;
gdjs.Main_32GameCode.GDGunObjects2.length = 0;
gdjs.Main_32GameCode.GDGunObjects3.length = 0;
gdjs.Main_32GameCode.GDBulletObjects1.length = 0;
gdjs.Main_32GameCode.GDBulletObjects2.length = 0;
gdjs.Main_32GameCode.GDBulletObjects3.length = 0;
gdjs.Main_32GameCode.GDBalloonObjects1.length = 0;
gdjs.Main_32GameCode.GDBalloonObjects2.length = 0;
gdjs.Main_32GameCode.GDBalloonObjects3.length = 0;
gdjs.Main_32GameCode.GDCookedChickenObjects1.length = 0;
gdjs.Main_32GameCode.GDCookedChickenObjects2.length = 0;
gdjs.Main_32GameCode.GDCookedChickenObjects3.length = 0;
gdjs.Main_32GameCode.GDChickenObjects1.length = 0;
gdjs.Main_32GameCode.GDChickenObjects2.length = 0;
gdjs.Main_32GameCode.GDChickenObjects3.length = 0;
gdjs.Main_32GameCode.GDBombObjects1.length = 0;
gdjs.Main_32GameCode.GDBombObjects2.length = 0;
gdjs.Main_32GameCode.GDBombObjects3.length = 0;
gdjs.Main_32GameCode.GDHealthDisplayObjects1.length = 0;
gdjs.Main_32GameCode.GDHealthDisplayObjects2.length = 0;
gdjs.Main_32GameCode.GDHealthDisplayObjects3.length = 0;
gdjs.Main_32GameCode.GDScoreDisplayObjects1.length = 0;
gdjs.Main_32GameCode.GDScoreDisplayObjects2.length = 0;
gdjs.Main_32GameCode.GDScoreDisplayObjects3.length = 0;
gdjs.Main_32GameCode.GDGameOverDisplayObjects1.length = 0;
gdjs.Main_32GameCode.GDGameOverDisplayObjects2.length = 0;
gdjs.Main_32GameCode.GDGameOverDisplayObjects3.length = 0;
gdjs.Main_32GameCode.GDBalloonDisplayObjects1.length = 0;
gdjs.Main_32GameCode.GDBalloonDisplayObjects2.length = 0;
gdjs.Main_32GameCode.GDBalloonDisplayObjects3.length = 0;
gdjs.Main_32GameCode.GDHungerDisplayObjects1.length = 0;
gdjs.Main_32GameCode.GDHungerDisplayObjects2.length = 0;
gdjs.Main_32GameCode.GDHungerDisplayObjects3.length = 0;
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects1.length = 0;
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects2.length = 0;
gdjs.Main_32GameCode.GDInvincibilityDisplayObjects3.length = 0;
gdjs.Main_32GameCode.GDFloorTileObjects1.length = 0;
gdjs.Main_32GameCode.GDFloorTileObjects2.length = 0;
gdjs.Main_32GameCode.GDFloorTileObjects3.length = 0;
gdjs.Main_32GameCode.GDScoreFlashObjects1.length = 0;
gdjs.Main_32GameCode.GDScoreFlashObjects2.length = 0;
gdjs.Main_32GameCode.GDScoreFlashObjects3.length = 0;

gdjs.Main_32GameCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['Main_32GameCode'] = gdjs.Main_32GameCode;
