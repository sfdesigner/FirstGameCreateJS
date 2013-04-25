// define variables
var stage;
var stageHeight = 480;
var stageWidth = 800;
var gameGrid;
var gridData;
var avatar;
var playerLocation = { x: 2, y: 2 };
var moveDirection;
var playerHealth = 100;
var enemyHealth = 100;

// define grid dimensions
var gridWidth = 13;
var gridHeight = 13;
// define offset position
var gridOffsetX = 192;
var gridOffsetY = 32;
// define size of tiles
var tileHeight = 32;
var tileWidth = 32;

// define controls
var moveUp;
var moveDown;
var moveLeft;
var moveRight;

// define ui elements
var playerHealthBar;
var enemyHealthBar;

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
    gridData = [];

    // create a gradient background for the game
    var background = new createjs.Shape();
    background.graphics.beginLinearGradientFill(["#000", "#666"],[0,1], 0, 0, 0, 480).drawRect(0, 0, 800, 480);
    stage.addChild(background);

    img = new Image();
    img.src = "images/avatarSprites.png";
    img.onload = drawGrid;

    drawControls();
    drawHealthBars();
}

function drawGrid() {
    // create sprite sheet
    spriteData = {
        images: [img],
        frames: { width: 32, height: 32 },
        animations: {
            avatar: [0,3],
            grass: 4,
            deepGrass: 5,
            tree: 6,
            castle: 7,
            dragon: [8,11]
        }
    }
    spriteSheet = new createjs.SpriteSheet(spriteData);
          
    // create two step loop to create game grid
    // start with building a row
    for (var y = 0; y < gridHeight; y++) {
        gameGrid[y] = []; // set game grid row to contain colums
        gridData[y] = [];
        // create columns
        for (var x = 0; x < gridWidth; x++) {
            var tile = new createjs.BitmapAnimation(spriteSheet);
            tile.gotoAndStop("grass");

            // position based on tile and offset
            tile.x = gridOffsetX + (x * tileWidth);
            tile.y = gridOffsetY + (y * tileHeight);

            // assign tile to game grid for accessing later
            gameGrid[y][x] = tile;
            gridData[y][x] = "grass";
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
        gridData[swapTileY][swapTileX] = "deepGrass";
    }
    // create trees
    for (var i = 0; i < treeCount; i++) {
        var swapTileX = Math.floor(Math.random() * gridWidth);
        var swapTileY = Math.floor(Math.random() * gridHeight);
        gameGrid[swapTileY][swapTileX].gotoAndStop("tree");
        gridData[swapTileY][swapTileX] = "tree";
    }
    // create castle
    for (var i = 0; i < castleCount; i++) {
        var swapTileX = Math.floor(Math.random() * gridWidth);
        var swapTileY = Math.floor(Math.random() * gridHeight);
        gameGrid[swapTileY][swapTileX].gotoAndStop("castle");
        gridData[swapTileY][swapTileX] = "castle";
    }

    gameGrid[playerLocation.y][playerLocation.x].gotoAndPlay("avatar");

    // change update interval to slow down animation
    createjs.Ticker.setInterval(500);
    // add ticker to automatically update the stage
    createjs.Ticker.addEventListener("tick", stage);

    // add dragon to grid, which won't move
    gameGrid[10][10].gotoAndPlay("dragon");

    // render stage
    stage.update();
}

function drawControls() {
    moveUp = new createjs.Shape();
    moveUp.graphics.beginFill("red").drawRoundRect(71, 165, 50, 50, 10);
    moveUp.shadow = new createjs.Shadow("black", 0, 0, 10);
    moveUp.onClick = moveAvatarUp;

    moveDown = new createjs.Shape();
    moveDown.graphics.beginFill("red").drawRoundRect(71, 265, 50, 50, 10);
    moveDown.shadow = new createjs.Shadow("black", 0, 0, 10);
    moveDown.onClick = moveAvatarDown;

    moveLeft = new createjs.Shape();
    moveLeft.graphics.beginFill("red").drawRoundRect(20, 215, 50, 50, 10);
    moveLeft.shadow = new createjs.Shadow("black", 0, 0, 10);
    moveLeft.onClick = moveAvatarLeft;

    moveRight = new createjs.Shape();
    moveRight.graphics.beginFill("red").drawRoundRect(121, 215, 50, 50, 10);
    moveRight.shadow = new createjs.Shadow("black", 0, 0, 10);
    moveRight.onClick = moveAvatarRight;

    stage.addChild(moveUp, moveDown, moveLeft, moveRight);
}

function moveAvatarDown(evt) {
    if (playerLocation.y < gridHeight-1) playerLocation.y++;
    redrawGrid();
}

function moveAvatarUp(evt) {
    if (playerLocation.y > 0) playerLocation.y--;
    redrawGrid();
}

function moveAvatarLeft(evt) {
    if (playerLocation.x > 0) playerLocation.x--;
    redrawGrid();
}

function moveAvatarRight(evt) {
    if (playerLocation.x < gridWidth-1) playerLocation.x++;
    redrawGrid();
}

function redrawGrid() {
    for (var y = 0; y < gridHeight; y++) {
        for (var x = 0; x < gridWidth; x++) {
            switch (gridData[y][x]) {
                case "grass":
                    gameGrid[y][x].gotoAndStop("grass");
                    break;
                case "deepGrass":
                    gameGrid[y][x].gotoAndStop("deepGrass");
                    break;
                case "tree":
                    gameGrid[y][x].gotoAndStop("tree");
                    break;
                case "castle":
                    gameGrid[y][x].gotoAndStop("castle");
                    break;
                default:
                    break;
            }
            gameGrid[playerLocation.y][playerLocation.x].gotoAndPlay("avatar");
            gameGrid[10][10].gotoAndPlay("dragon");
        }
    }
    //playerHealth--;
    //enemyHealth -= 5;
    //updateHealthBars();
    stage.update();
}

function drawHealthBars() {
    var healthBackgroundPlayer = new createjs.Shape();
    healthBackgroundPlayer.graphics.beginLinearGradientFill(["#333", "#666"], [0, 1], 0, 0, 0, 25);
    healthBackgroundPlayer.graphics.drawRect(0, 0, 150, 25);
    healthBackgroundPlayer.shadow = new createjs.Shadow("black", 0, 0, 10);
    healthBackgroundPlayer.x = 627;
    healthBackgroundPlayer.y = 100;

    playerHealthBar = new createjs.Shape();
    playerHealthBar.graphics.beginLinearGradientFill(["#F00", "#600"], [0, 1], 0, 0, 0, 25);
    playerHealthBar.graphics.drawRect(0, 0, 150, 25);
    playerHealthBar.x = 627;
    playerHealthBar.y = 100;

    var healthBackgroundEnemy = new createjs.Shape();
    healthBackgroundEnemy.graphics.beginLinearGradientFill(["#333", "#666"], [0, 1], 0, 0, 0, 25);
    healthBackgroundEnemy.graphics.drawRect(0, 0, 150, 25);
    healthBackgroundEnemy.shadow = new createjs.Shadow("black", 0, 0, 10);
    healthBackgroundEnemy.x = 627;
    healthBackgroundEnemy.y = 140;

    enemyHealthBar = new createjs.Shape();
    enemyHealthBar.graphics.beginLinearGradientFill(["#0F0", "#060"], [0, 1], 0, 0, 0, 25);
    enemyHealthBar.graphics.drawRect(0, 0, 150, 25);
    enemyHealthBar.x = 627;
    enemyHealthBar.y = 140;

    stage.addChild(healthBackgroundPlayer,playerHealthBar,healthBackgroundEnemy,enemyHealthBar);
}

function updateHealthBars() {
    playerHealthBar.graphics.clear();
    playerHealthBar.graphics.beginLinearGradientFill(["#F00", "#600"], [0, 1], 0, 0, 0, 25);
    playerHealthBar.graphics.drawRect(0, 0, Math.floor(playerHealth*1.5), 25);

    enemyHealthBar.graphics.clear();
    enemyHealthBar.graphics.beginLinearGradientFill(["#0F0", "#060"], [0, 1], 0, 0, 0, 25);
    enemyHealthBar.graphics.drawRect(0, 0, Math.floor(enemyHealth*1.5), 25);
}