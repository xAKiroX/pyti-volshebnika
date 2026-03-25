gdjs.Level2Code = {};
gdjs.Level2Code.localVariables = [];
gdjs.Level2Code.idToCallbackMap = new Map();
gdjs.Level2Code.GDFall_9595Trees_9595BackgroundObjects1= [];
gdjs.Level2Code.GDFall_9595Trees_9595BackgroundObjects2= [];
gdjs.Level2Code.GDOrange_9595Grass_95959PatchObjects1= [];
gdjs.Level2Code.GDOrange_9595Grass_95959PatchObjects2= [];
gdjs.Level2Code.GDDoorObjects1= [];
gdjs.Level2Code.GDDoorObjects2= [];
gdjs.Level2Code.GDTrophyObjects1= [];
gdjs.Level2Code.GDTrophyObjects2= [];
gdjs.Level2Code.GDEndTextObjects1= [];
gdjs.Level2Code.GDEndTextObjects2= [];
gdjs.Level2Code.GDPlayerObjects1= [];
gdjs.Level2Code.GDPlayerObjects2= [];
gdjs.Level2Code.GDFadeObjects1= [];
gdjs.Level2Code.GDFadeObjects2= [];


gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDTrophyObjects1Objects = Hashtable.newFrom({"Trophy": gdjs.Level2Code.GDTrophyObjects1});
gdjs.Level2Code.asyncCallback10556620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level2Code.localVariables);
gdjs.Level2Code.localVariables.length = 0;
}
gdjs.Level2Code.idToCallbackMap.set(10556620, gdjs.Level2Code.asyncCallback10556620);
gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level2Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level2Code.asyncCallback10556620(runtimeScene, asyncObjectsList)), 10556620, asyncObjectsList);
}
}

}


};gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fade"), gdjs.Level2Code.GDFadeObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDFadeObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDFadeObjects1[i].getBehavior("Tween").addObjectOpacityTween2("Unfade", 0, "linear", 5, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trophy"), gdjs.Level2Code.GDTrophyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_9546Level2Code_9546GDTrophyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level2Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}

{ //Subevents
gdjs.Level2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 6);
}
if (isConditionTrue_0) {
}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDFall_9595Trees_9595BackgroundObjects1.length = 0;
gdjs.Level2Code.GDFall_9595Trees_9595BackgroundObjects2.length = 0;
gdjs.Level2Code.GDOrange_9595Grass_95959PatchObjects1.length = 0;
gdjs.Level2Code.GDOrange_9595Grass_95959PatchObjects2.length = 0;
gdjs.Level2Code.GDDoorObjects1.length = 0;
gdjs.Level2Code.GDDoorObjects2.length = 0;
gdjs.Level2Code.GDTrophyObjects1.length = 0;
gdjs.Level2Code.GDTrophyObjects2.length = 0;
gdjs.Level2Code.GDEndTextObjects1.length = 0;
gdjs.Level2Code.GDEndTextObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDFadeObjects1.length = 0;
gdjs.Level2Code.GDFadeObjects2.length = 0;

gdjs.Level2Code.eventsList1(runtimeScene);
gdjs.Level2Code.GDFall_9595Trees_9595BackgroundObjects1.length = 0;
gdjs.Level2Code.GDFall_9595Trees_9595BackgroundObjects2.length = 0;
gdjs.Level2Code.GDOrange_9595Grass_95959PatchObjects1.length = 0;
gdjs.Level2Code.GDOrange_9595Grass_95959PatchObjects2.length = 0;
gdjs.Level2Code.GDDoorObjects1.length = 0;
gdjs.Level2Code.GDDoorObjects2.length = 0;
gdjs.Level2Code.GDTrophyObjects1.length = 0;
gdjs.Level2Code.GDTrophyObjects2.length = 0;
gdjs.Level2Code.GDEndTextObjects1.length = 0;
gdjs.Level2Code.GDEndTextObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDFadeObjects1.length = 0;
gdjs.Level2Code.GDFadeObjects2.length = 0;


return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
