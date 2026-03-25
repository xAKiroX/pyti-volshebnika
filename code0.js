gdjs.Level1Code = {};
gdjs.Level1Code.localVariables = [];
gdjs.Level1Code.idToCallbackMap = new Map();
gdjs.Level1Code.GDBackgroundObjects1= [];
gdjs.Level1Code.GDBackgroundObjects2= [];
gdjs.Level1Code.GDCoinObjects1= [];
gdjs.Level1Code.GDCoinObjects2= [];
gdjs.Level1Code.GDPlatform_9595GroundObjects1= [];
gdjs.Level1Code.GDPlatform_9595GroundObjects2= [];
gdjs.Level1Code.GDWinter_9595BackgroundObjects1= [];
gdjs.Level1Code.GDWinter_9595BackgroundObjects2= [];
gdjs.Level1Code.GDLaser_9595SpikesObjects1= [];
gdjs.Level1Code.GDLaser_9595SpikesObjects2= [];
gdjs.Level1Code.GDDoorObjects1= [];
gdjs.Level1Code.GDDoorObjects2= [];
gdjs.Level1Code.GDFull_9595LadderObjects1= [];
gdjs.Level1Code.GDFull_9595LadderObjects2= [];
gdjs.Level1Code.GDCoinTextObjects1= [];
gdjs.Level1Code.GDCoinTextObjects2= [];
gdjs.Level1Code.GDMovingBlockObjects1= [];
gdjs.Level1Code.GDMovingBlockObjects2= [];
gdjs.Level1Code.GDDisappearPlatformObjects1= [];
gdjs.Level1Code.GDDisappearPlatformObjects2= [];
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDFadeObjects1= [];
gdjs.Level1Code.GDFadeObjects2= [];


gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level1Code.GDCoinObjects1});
gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Level1Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDLaser_95959595SpikesObjects1Objects = Hashtable.newFrom({"Laser_Spikes": gdjs.Level1Code.GDLaser_9595SpikesObjects1});
gdjs.Level1Code.asyncCallback13250148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setY(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setX(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(13250148, gdjs.Level1Code.asyncCallback13250148);
gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
for (const obj of gdjs.Level1Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level1Code.asyncCallback13250148(runtimeScene, asyncObjectsList)), 13250148, asyncObjectsList);
}
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level1Code.GDDoorObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level1Code.GDDoorObjects1});
gdjs.Level1Code.asyncCallback13846892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].hide();
}
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(13846892, gdjs.Level1Code.asyncCallback13846892);
gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
for (const obj of gdjs.Level1Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level1Code.asyncCallback13846892(runtimeScene, asyncObjectsList)), 13846892, asyncObjectsList);
}
}

}


};gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")));
}
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].resetTimer("Timer");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level1Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs.Level1Code.GDCoinTextObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.Level1Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinTextObjects1[i].getBehavior("Text").setText("Счёт:" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Landed");
}
}

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Inactive");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laser_Spikes"), gdjs.Level1Code.GDLaser_9595SpikesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDLaser_95959595SpikesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Health").IsDamageCooldownActive(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Health").Hit(10, true, true, null);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Health").TriggerDamageCooldown(null);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}

{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Standing Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level1Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level2");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level1Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level1Code.GDFadeObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Fading", 255, "linear", 1, false);
}
}

{ //Subevents
gdjs.Level1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDDisappearPlatformObjects1[k] = gdjs.Level1Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].activateBehavior("Platform", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") < 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDDisappearPlatformObjects1[k] = gdjs.Level1Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].activateBehavior("Platform", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DisappearPlatform"), gdjs.Level1Code.GDDisappearPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDDisappearPlatformObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDisappearPlatformObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Timer") >= 4 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDDisappearPlatformObjects1[k] = gdjs.Level1Code.GDDisappearPlatformObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDisappearPlatformObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDisappearPlatformObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDisappearPlatformObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDisappearPlatformObjects1[i].resetTimer("Timer");
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDBackgroundObjects1.length = 0;
gdjs.Level1Code.GDBackgroundObjects2.length = 0;
gdjs.Level1Code.GDCoinObjects1.length = 0;
gdjs.Level1Code.GDCoinObjects2.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level1Code.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.Level1Code.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.Level1Code.GDLaser_9595SpikesObjects1.length = 0;
gdjs.Level1Code.GDLaser_9595SpikesObjects2.length = 0;
gdjs.Level1Code.GDDoorObjects1.length = 0;
gdjs.Level1Code.GDDoorObjects2.length = 0;
gdjs.Level1Code.GDFull_9595LadderObjects1.length = 0;
gdjs.Level1Code.GDFull_9595LadderObjects2.length = 0;
gdjs.Level1Code.GDCoinTextObjects1.length = 0;
gdjs.Level1Code.GDCoinTextObjects2.length = 0;
gdjs.Level1Code.GDMovingBlockObjects1.length = 0;
gdjs.Level1Code.GDMovingBlockObjects2.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects1.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDFadeObjects1.length = 0;
gdjs.Level1Code.GDFadeObjects2.length = 0;

gdjs.Level1Code.eventsList3(runtimeScene);
gdjs.Level1Code.GDBackgroundObjects1.length = 0;
gdjs.Level1Code.GDBackgroundObjects2.length = 0;
gdjs.Level1Code.GDCoinObjects1.length = 0;
gdjs.Level1Code.GDCoinObjects2.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level1Code.GDWinter_9595BackgroundObjects1.length = 0;
gdjs.Level1Code.GDWinter_9595BackgroundObjects2.length = 0;
gdjs.Level1Code.GDLaser_9595SpikesObjects1.length = 0;
gdjs.Level1Code.GDLaser_9595SpikesObjects2.length = 0;
gdjs.Level1Code.GDDoorObjects1.length = 0;
gdjs.Level1Code.GDDoorObjects2.length = 0;
gdjs.Level1Code.GDFull_9595LadderObjects1.length = 0;
gdjs.Level1Code.GDFull_9595LadderObjects2.length = 0;
gdjs.Level1Code.GDCoinTextObjects1.length = 0;
gdjs.Level1Code.GDCoinTextObjects2.length = 0;
gdjs.Level1Code.GDMovingBlockObjects1.length = 0;
gdjs.Level1Code.GDMovingBlockObjects2.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects1.length = 0;
gdjs.Level1Code.GDDisappearPlatformObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDFadeObjects1.length = 0;
gdjs.Level1Code.GDFadeObjects2.length = 0;


return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
