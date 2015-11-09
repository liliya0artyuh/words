﻿module managers {
    export class Collision {

        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
        }


        //PUBLIC METHODS
        //check distance bettween truck and any other objects
        public check(gameObject: any, gameMainObject: any ) {
            var p1: createjs.Point = new createjs.Point;
            var p2: createjs.Point = new createjs.Point;

            p1.x = gameMainObject.x;
            p1.y = gameMainObject.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;

            if (utility.distance(p1, p2) < ((gameMainObject.width * 0.5) + (gameObject.width * 0.5))) {
                if (gameObject.isColliding == false) {
                    console.log("collision!");
                    //encrease points
                    //add sound
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "hero") {
                        scoreboard.score +=100;
                    } 
                    if (gameObject.name == "enemy") {
                        scoreboard.lives--;
                        //if equals 3 lives then 
                    } 
                }
                gameObject.isColliding = true;
            } else {
                gameObject.isColliding = false;
            }
        }
    }
}