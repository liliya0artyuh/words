﻿    //<!--Repository Name for source code on github: words-- >
    //<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module managers {
    export class Collision {
        //PROPERTIES
        private _collectorX: number = config.collectorWidth;
        private _wordX: number;

        private _collectorY1: number;
        private _collectorY2: number;
        private _wordY1: number;
        private _wordY2: number;


        private _p1: createjs.Point;
        private _p2: createjs.Point;



        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
        }



        public check(gameObject: any, gameMainObject: any) {
            this._collectorY1 = gameMainObject.y;
            this._collectorY2 = this._collectorY1 + config.collectorHeight;
            this._wordY2 = gameObject.y;
            this._wordY1 = this._wordY2 + config.wordHeight;
            this._wordX = gameObject.x;

            if (this._wordX <= this._collectorX) {
               // console.log("word reached collector zone");
                if (this._wordY1 >= this._collectorY1 && this._wordY2 <= this._collectorY2) {
                    if (gameObject.isColliding == false) {

                        console.log("collision!");
                        //encrease points
                        //add sound
                        createjs.Sound.play(gameObject.sound);
                        if (gameObject.name == "hero") {
                            scoreboard.score += 100;
                            console.log("gameObject.name == " + "hero");
                            console.log("this._collectorX" + this._collectorX);
                            console.log("this._wordX" + this._wordX);
                            console.log("this._collectorY2" + this._collectorY2);
                            console.log("this._collectorY1" + this._collectorY1);
                            console.log("this._wordY2" + this._wordY2);
                            console.log("this._wordY1" + this._wordY1);
                            console.log("------------------------------------------");
                        }
                        if (gameObject.name == "enemy") {
                            console.log("gameObject.name == " + "enemy");
                            console.log("this._collectorX" + this._collectorX);
                            console.log("this._wordX" + this._wordX);
                            console.log("this._collectorY2" + this._collectorY2);
                            console.log("this._collectorY1" + this._collectorY1);
                            console.log("this._wordY2" + this._wordY2);
                            console.log("this._wordY1" + this._wordY1);
                            console.log("------------------------------------------");
                            scoreboard.lives--;
                        }
                    }
                    gameObject.isColliding = true;
                } else {
                    gameObject.isColliding = false;
                }

            } else {
                gameObject.isColliding = false;
            }


        }
        /*
        //PUBLIC METHODS
        //check distance bettween truck and any other objects
        public check(gameObject: any, gameMainObject: any ) {
             this._p1= new createjs.Point;
             this._p2 = new createjs.Point;

            p1.x = gameObject.x;
            p1.y = gameObject.y;

            p2.x = gameMainObject.x;
            p2.y = gameMainObject.y;

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
                    } 
                }
                gameObject.isColliding = true;
            } else {
                gameObject.isColliding = false;
            }
        }
        */
    }
}