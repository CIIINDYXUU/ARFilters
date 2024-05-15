// -----JS CODE-----
// @input Component.ScreenTransform screenTransform
// @input SceneObject background

script.screenTransform.getSceneObject().enabled = false;

// Move the ScreenTransform to match the position of touch events
function onTouch(eventData) {
    script.screenTransform.getSceneObject().enabled = true;
    script.background.enabled = false;
    var touchPos = eventData.getTouchPosition();
    var parentPos = script.screenTransform.screenPointToParentPoint(touchPos);
    script.screenTransform.anchors.setCenter(parentPos);
}

script.createEvent("TouchStartEvent").bind(onTouch);
script.createEvent("TouchMoveEvent").bind(onTouch);

function touchEnd () {
    script.screenTransform.getSceneObject().enabled = false;
    global.tweenManager.startTween(script.getSceneObject(), "fadeIn", fadeOut);
}
script.createEvent("TouchEndEvent").bind(touchEnd);

function fadeOut() {
    global.tweenManager.startTween(script.getSceneObject(), "fadeOut");
}