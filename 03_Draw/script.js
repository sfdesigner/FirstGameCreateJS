/* Code Hinting References */
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
/// <reference path="../easeljs/filters/BoxBlurFilter.js" />
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

    // create a circle
    var circle = new createjs.Shape();
    circle.graphics.beginFill("yellow").drawCircle(0, 0, 50);
    circle.x = 50;
    circle.y = 50;
    stage.addChild(circle);

    // create an ellipse
    var ellipse = new createjs.Shape();
    ellipse.graphics.beginFill("red").drawEllipse(0, 0, 25, 50);
    ellipse.x = 50;
    ellipse.y = 100;
    stage.addChild(ellipse);
    
    // draw a square
    var square = new createjs.Shape();
    square.graphics.beginFill("black").drawRect(0, 0, 50, 50);
    square.x = 50;
    square.y = 150;
    stage.addChild(square);

    // draw rounded rectangle
    var roundRect = new createjs.Shape();
    roundRect.graphics.beginFill("blue").drawRoundRect(0, 0, 100, 50, 10);
    roundRect.x = 50;
    roundRect.y = 200;
    stage.addChild(roundRect);

    // draw star
    var star = new createjs.Shape();
    star.graphics.beginFill("green").drawPolyStar(0, 0, 50, 6, 0.5, 0);
    star.x = 50;
    star.y = 300;
    stage.addChild(star);

    // draw line
    var line = new createjs.Shape();
    line.graphics.setStrokeStyle(1).beginStroke("red").moveTo(200, 50).lineTo(250, 50);
    stage.addChild(line);

    // draw multiple lines
    var multiline = new createjs.Shape();
    multiline.graphics.setStrokeStyle(1).beginStroke("blue").moveTo(200, 100).lineTo(250, 125).lineTo(200, 150);
    stage.addChild(multiline);

    // draw curve
    var curve = new createjs.Shape();
    curve.graphics.setStrokeStyle(1).beginStroke("green").moveTo(200, 175).curveTo(250, 250, 300, 175);
    stage.addChild(curve);

    // draw bezier curve
    var bezier = new createjs.Shape();
    bezier.graphics.setStrokeStyle(1).beginStroke("orange").moveTo(200, 250).bezierCurveTo(225, 300, 250, 300, 275, 250);
    stage.addChild(bezier);

    // draw multiple bezier curves
    var multibezier = new createjs.Shape();
    multibezier.graphics.setStrokeStyle(1).beginStroke("magenta").moveTo(200, 300).bezierCurveTo(225, 350, 250, 300, 275, 300).bezierCurveTo(300,275,325,275,325,300);
    stage.addChild(multibezier);

    // draw linear gradient fill
    var gradient = new createjs.Shape();
    gradient.graphics.setStrokeStyle(1).beginStroke("blue");
    gradient.graphics.beginLinearGradientFill(["white", "black"], [0, 1], 0, 0, 0, 50).drawRect(0, 0, 50, 50);
    gradient.x = 400;
    gradient.y = 50;
    stage.addChild(gradient);

    // draw radial gradient fill
    var radial = new createjs.Shape();
    radial.graphics.setStrokeStyle(1).beginStroke("red");
    radial.graphics.beginRadialGradientFill(["#E00", "#300"], [0, .5], 20, 20, 0, 25, 25, 50).drawEllipse(0,0,50,50);
    radial.x = 400;
    radial.y = 125;
    stage.addChild(radial);

    // add shadow
    var shadow = new createjs.Shape();
    shadow.graphics.beginFill("blue").drawRect(0, 0, 50, 50);
    shadow.shadow = new createjs.Shadow("black", 5, 5, 10);
    shadow.x = 400;
    shadow.y = 200;
    stage.addChild(shadow);

    // render stage
    stage.update();
}