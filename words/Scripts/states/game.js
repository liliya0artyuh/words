//<!--Repository Name for source code on github: words-- >
//<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // menu class
    var Game = (function (_super) {
        __extends(Game, _super);
        //constructor
        function Game() {
            _super.call(this);
            this._antiWords = [];
            this._wordOrder = [0];
        }
        //public methods
        Game.prototype.start = function () {
            this._determineCategories();
            this.addChild(background);
            this._line1 = new createjs.Shape;
            this._line1.graphics.beginStroke("red").beginFill("red").drawRect(50, 50, 700, 1);
            this.addChild(this._line1);
            this._line2 = new createjs.Shape;
            this._line2.graphics.beginStroke("red").beginFill("red").drawRect(50, 100, 700, 1);
            this.addChild(this._line2);
            this._line3 = new createjs.Shape;
            this._line3.graphics.beginStroke("red").beginFill("red").drawRect(50, 150, 700, 1);
            this.addChild(this._line3);
            this._line4 = new createjs.Shape;
            this._line4.graphics.beginStroke("red").beginFill("red").drawRect(50, 200, 700, 1);
            this.addChild(this._line4);
            this._line5 = new createjs.Shape;
            this._line5.graphics.beginStroke("red").beginFill("red").drawRect(50, 250, 700, 1);
            this.addChild(this._line5);
            this._line6 = new createjs.Shape;
            this._line6.graphics.beginStroke("red").beginFill("red").drawRect(50, 300, 700, 1);
            this.addChild(this._line6);
            this._line7 = new createjs.Shape;
            this._line7.graphics.beginStroke("red").beginFill("red").drawRect(50, 350, 700, 1);
            this.addChild(this._line7);
            this._line8 = new createjs.Shape;
            this._line8.graphics.beginStroke("red").beginFill("red").drawRect(50, 400, 700, 1);
            this.addChild(this._line8);
            this._line9 = new createjs.Shape;
            this._line9.graphics.beginStroke("red").beginFill("red").drawRect(50, 450, 700, 1);
            this.addChild(this._line9);
            this._line10 = new createjs.Shape;
            this._line10.graphics.beginStroke("red").beginFill("red").drawRect(50, 500, 700, 1);
            this.addChild(this._line10);
            //add truck/collector to the game
            this._truck = new objects.Truck("truck");
            this.addChild(this._truck);
            //add selected category words
            this._word = new objects.Word(true); // collectibe word
            this.addChild(this._word);
            //add enemy words
            for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord] = new objects.Word(false); // antogonist words
                this.addChild(this._antiWords[antiWord]);
            }
            //add all objects to the stage
            stage.addChild(this);
            scoreboard = new objects.Scoreboard;
            collision = new managers.Collision;
        };
        //private method
        /*
        private _checkIfExists(x: number): number {
        //    console.log("this.nextItem " + this.nextItem );
         //   console.log("this.wordOrder.length " + this.wordOrder.length);
        //    console.log("this.wordOrder[0] " + this.wordOrder[0] );
            while (this.wordOrder.length < 10) {
                if (this.wordOrder.length == 1) {
                    this.wordOrder[0] = this.nextItem;
                } else {
                    for (var i = 0; i <= this.wordOrder.length; i++) {
                        console.log("this.wordOrder.length " + this.wordOrder.length);
                        console.log("this.nextItem " + this.nextItem);
                        console.log("this.wordOrder[i] " + this.wordOrder[i]);

                        if (this.nextItem == this.wordOrder[i]) {
                            this.numExists = true;
                            break;
                        } else {
                            this.numExists = false;
                            if (i == this.wordOrder.length) {
                                this.wordOrder[i + 1] = this.nextItem;
                            }
                        }
                    }

                }

            }
            return this.nextItem;
        }
        */
        //determine categories for collectible words and the antagonist words
        Game.prototype._determineCategories = function () {
            console.log("wordCategory " + wordCategory);
            if (wordCategory == "foodBtn") {
                config.currentCategory = config.foodWords;
                config.antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
                Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
                console.log("this._currentCategory " + config.currentCategory);
                console.log("this._antagonistWords " + config.antagonistWords);
            }
            else if (wordCategory == "furnitureBtn") {
                config.currentCategory = config.furnitureWords;
                config.antagonistWords = config.foodWords;
                Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
                Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
            }
            else if (wordCategory == "clothesBtn") {
                config.currentCategory = config.clothesWords;
                config.antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(config.antagonistWords, config.foodWords);
                Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
            }
            else if (wordCategory == "animalsBtn") {
                config.currentCategory = config.animalsWords;
                config.antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
                Array.prototype.push.apply(config.antagonistWords, config.foodWords);
            }
        };
        Game.prototype.update = function () {
            this._truck.update();
            this._word.update();
            for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord].update();
                collision.check(this._antiWords[antiWord], this._truck);
            }
            collision.check(this._word, this._truck);
            scoreboard.update();
            if (scoreboard.lives <= 0) {
                outcome = 2;
                numOfCollectedWords = scoreboard.score / 100;
                numOfLivesLost = 3;
                changeState(config.OVER_STATE);
            }
            if (scoreboard.score == 1000) {
                outcome = 1;
                numOfCollectedWords = 10;
                numOfLivesLost = 3 - scoreboard.lives;
                changeState(config.OVER_STATE);
            }
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map