/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/webaudioapi/waa.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />

/// <reference path="../config/wordsets.ts" />
/// <reference path="../functions/methods.ts" />
/// <reference path="../config/config.ts" />

/// <reference path="../objects/background.ts" />
/// <reference path="../objects/word.ts" />
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
var wordCategory: string;


//manifest of all of the assets
var manifest= [
    { id: "againButton", src: "../../Assets/images/againButton.png" },
    { id: "back", src: "../../Assets/images/back_long.png" },
    { id: "truck", src: "../../Assets/images/truck.png" },
    { id: "emptyButton", src: "../../Assets/images/button183x82.png" },
    { id: "startButton", src: "../../Assets/images/startButton.png" },
    { id: "soundtrack", src: "../../Assets/audio/gameSound.m4a" },
    { id: "logo", src: "../../Assets/images/logo.png" },
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