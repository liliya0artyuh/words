/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/webaudioapi/waa.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../config/config.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/truck.ts" />

/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../states/menu.ts" />
/// <reference path="../states/over.ts" />
/// <reference path="../states/game.ts" />


// Global Game Framework Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var state: number;
var currentState: objects.Scene; // alias for our current state


// Game variables
var menu: states.Menu;
var game: states.Game;
var over: states.Over;
var name: string;
var outcome: number;


//manifest of all of the assets
var manifest= [
    { id: "againButton", src: "../../Assets/images/againButton.png" },
    { id: "back", src: "../../Assets/images/back_long.png" },
    { id: "truck", src: "../../Assets/images/truck.png" },
    { id: "drinkButton", src: "../../Assets/images/drinkButton.png" },
    { id: "eatButton", src: "../../Assets/images/eatButton.png" },
    { id: "feedButton", src: "../../Assets/images/feedButton.png" },
    { id: "getOnButton", src: "../../Assets/images/getOnButton.png" },
    { id: "leftButton", src: "../../Assets/images/leftButton.png" },
    { id: "rightButton", src: "../../Assets/images/rightButton.png" },
    { id: "saveButton", src: "../../Assets/images/saveButton.png" },
    { id: "screamButton", src: "../../Assets/images/screamButton.png" },
    { id: "sleepButton", src: "../../Assets/images/sleepButton.png" },
    { id: "startButton", src: "../../Assets/images/startButton.png" },
    { id: "swimButton", src: "../../Assets/images/swimButton.png" },
    { id: "swimByButton", src: "../../Assets/images/swimByButton.png" },
    { id: "soundtrack", src: "../../Assets/audio/gameSound.m4a" },
    { id: "tooth", src: "../../Assets/images/tooth.jpg" },
    { id: "dragon", src: "../../Assets/images/dragon_1.jpg" },
    { id: "logo", src: "../../Assets/images/logo_small.png" },
    { id: "sound1", src: "../../Assets/audio/0831.wav" }
];


function preload(): void {
    assets = new createjs.LoadQueue(true);
    assets.installPlugin(createjs.Sound);
    //event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    (<HTMLInputElement>document.getElementById("txtName")).value = "";
    name = "";
    document.getElementById("txtName").style.display = "inline";
}

function init(): void {
    console.log("Game started...");
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage 
    stage.enableMouseOver(20); //enable mouse events
    createjs.Ticker.setFPS(60); // set frame rate to 60 frames per second
    createjs.Ticker.on("tick", gameLoop, this); // update gameLoop every frame
        
    setupStats();// setup statistics object

    state = config.MENU_STATE;
    changeState(state);
}

// Main Game Loop
function gameLoop(event: createjs.Event): void {
    stats.begin(); //begin measuring

    currentState.update();
    stage.update(); // redraw/refresh stage every frame

    stats.end(); // end measuring
}

// function to setup stat counting
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); //show fps

    //align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

  //  document.getElementById("main").appendChild(stats.domElement);
    document.body.appendChild(stats.domElement);
}




// state machine
function changeState(state): void {
    //lauch various scenes

    switch (state) {
        case config.MENU_STATE:
            stage.removeAllChildren();
            menu = new states.Menu();
            console.log(menu);
            currentState = menu;
            break;
        case config.PLAY_STATE:
            stage.removeAllChildren();
            game = new states.Game();
            currentState = game;
            break;

        case config.OVER_STATE:
            stage.removeAllChildren();
            over = new states.Over(outcome);
            currentState = over;
            break;
    }
    currentState.start();
    console.log(currentState.numChildren);

}