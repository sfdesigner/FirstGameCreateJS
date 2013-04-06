﻿/* Code Hinting References */
/// <reference path="../easeljs/display/Bitmap.js" />
/// <reference path="../easeljs/display/BitmapAnimation.js" />
/// <reference path="../easeljs/display/Container.js" />
/// <reference path="../easeljs/display/DisplayObject.js" />
/// <reference path="../easeljs/display/DOMElement.js" />
/// <reference path="../easeljs/display/Graphics.js" />
/// <reference path="../easeljs/display/MovieClip.js" />
/// <reference path="../easeljs/display/Shadow.js" />
/// <reference path="../easeljs/display/Shape.js" />
/// <reference path="../easeljs/display/SpriteSheet.js" />
/// <reference path="../easeljs/display/Stage.js" />
/// <reference path="../easeljs/display/Text.js" />
/// <reference path="../easeljs/events/EventDispatcher.js" />
/// <reference path="../easeljs/events/MouseEvent.js" />
/// <reference path="../easeljs/filters/AlphaMapFilter.js" />
/// <reference path="../easeljs/filters/AlphaMaskFilter.js" />
/// <reference path="../easeljs/filters/BoxBlueFilter.js" />
/// <reference path="../easeljs/filters/ColorFilter.js" />
/// <reference path="../easeljs/filters/ColorMatrix.js" />
/// <reference path="../easeljs/filters/ColorMatrixFilter.js" />
/// <reference path="../easeljs/filters/Filter.js" />
/// <reference path="../easeljs/geom/Matrix2D.js" />
/// <reference path="../easeljs/geom/Point.js" />
/// <reference path="../easeljs/geom/Rectangle.js" />
/// <reference path="../easeljs/ui/ButtonHelper.js" />
/// <reference path="../easeljs/ui/Touch.js" />
/// <reference path="../easeljs/utils/Log.js" />
/// <reference path="../easeljs/utils/SpriteSheetBuilder.js" />
/// <reference path="../easeljs/utils/SpriteSheetUtils.js" />
/// <reference path="../easeljs/utils/Ticker.js" />
/// <reference path="../easeljs/utils/UID.js" />
// define variables
var stage;
var stageHeight = 500;
var stageWidth = 500;

function init() {
    // attach canvas to stage
    stage = new createjs.Stage("createJSCanvas");

    // create new shape
    var shape = new createjs.Shape();
    shape.graphics.beginFill("red").drawCircle(0, 0, 50);
    shape.x = 100;
    shape.y = 100;

    // add shape to display list
    stage.addChild(shape);

    // render stage
    stage.update();
}