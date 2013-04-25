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
var stageHeight = 480;
var stageWidth = 800;
var gameGrid;

// define grid dimensions
var gridWidth = 13;
var gridHeight = 13;
// define offset position
var gridOffsetX = 192;
var gridOffsetY = 32;
// define size of tiles
var tileHeight = 32;
var tileWidth = 32;

// define assets
var img;
var spriteData;
var spriteSheet;

function init() {
    // attach canvas to stage
    stage = new createjs.Stage("createJSCanvas");

    // create the game grid
    buildGameGrid();
}

function buildGameGrid() {
    // create grid object
    gameGrid = [];

    img = new Image();
    img.src = "images/avatarSprites.png";
    img.onload = drawGrid;
    
}

function drawGrid() {
    // create sprite sheet
    spriteData = {
        images: [img],
        frames: { width: 32, height: 32 },
        animations: {
            grass: 4,
            deepGrass: 5,
            tree: 6,
            castle: 7
        }
    }
    spriteSheet = new createjs.SpriteSheet(spriteData);
           
    // create two step loop to create game grid
    // start with building a row
    for (var y = 0; y < gridHeight; y++) {
        gameGrid[y] = []; // set game grid row to contain colums
        // create columns
        for (var x = 0; x < gridWidth; x++) {
            var tile = new createjs.BitmapAnimation(spriteSheet);
            tile.gotoAndStop("grass");

            // position based on tile and offset
            tile.x = gridOffsetX + (x * tileWidth);
            tile.y = gridOffsetY + (y * tileHeight);

            // assign tile to game grid for accessing later
            gameGrid[y][x] = tile;
            // add to the stage
            stage.addChild(tile);
        }
    }

    // determine number of random elements to place on the map
    var deepGrassCount = 20;
    var treeCount = 10;
    var castleCount = 1;
    // ceate deep grass
    for (var i = 0; i < deepGrassCount; i++) {
        var swapTileX = Math.floor(Math.random() * gridWidth);
        var swapTileY = Math.floor(Math.random() * gridHeight);
        gameGrid[swapTileY][swapTileX].gotoAndStop("deepGrass");
    }
    // create trees
    for (var i = 0; i < treeCount; i++) {
        var swapTileX = Math.floor(Math.random() * gridWidth);
        var swapTileY = Math.floor(Math.random() * gridHeight);
        gameGrid[swapTileY][swapTileX].gotoAndStop("tree");
    }
    // create castle
    for (var i = 0; i < castleCount; i++) {
        var swapTileX = Math.floor(Math.random() * gridWidth);
        var swapTileY = Math.floor(Math.random() * gridHeight);
        gameGrid[swapTileY][swapTileX].gotoAndStop("castle");
    }

    // render stage
    stage.update();
}