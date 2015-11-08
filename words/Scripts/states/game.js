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
            //determines the next set of words
            this._currentWordItem = 0;
            this._antiWordItems = [];
            this._wordOrder = [0];
            this._numOfAntiWords = 3;
        }
        //public methods
        Game.prototype.start = function () {
            this._determineCategories();
            this._determineNextWord();
            this._background = new objects.Background("back");
            this.addChild(this._background);
            //add truck to the game
            this._truck = new objects.Truck("truck");
            this.addChild(this._truck);
            //add words
            this._word = new objects.Word(this._currentCategory[this._currentWordItem]); // collectibe word
            this.addChild(this._word);
            //add words
            for (var antiWord = 0; antiWord < this._numOfAntiWords; antiWord++) {
                this._antiWords[antiWord] = new objects.Word(this._antagonistWords[this._antiWordItems[antiWord]]); // antogonist words
                this.addChild(this._antiWords[antiWord]);
            }
            //add all objects to the stage
            stage.addChild(this);
        };
        //private method
        //determine categories for collectible words and the antagonist words
        Game.prototype._determineCategories = function () {
            console.log("wordCategory " + wordCategory);
            if (wordCategory == "foodBtn") {
                this._currentCategory = config.foodWords;
                this._antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(this._antagonistWords, config.clothesWords);
                Array.prototype.push.apply(this._antagonistWords, config.animalsWords);
                console.log("this._currentCategory " + this._currentCategory);
                console.log("this._antagonistWords " + this._antagonistWords);
            }
            else if (wordCategory == "furnitureBtn") {
                this._currentCategory = config.furnitureWords;
                this._antagonistWords = config.foodWords;
                Array.prototype.push.apply(this._antagonistWords, config.clothesWords);
                Array.prototype.push.apply(this._antagonistWords, config.animalsWords);
            }
            else if (wordCategory == "clothesBtn") {
                this._currentCategory = config.clothesWords;
                this._antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(this._antagonistWords, config.foodWords);
                Array.prototype.push.apply(this._antagonistWords, config.animalsWords);
            }
            else if (wordCategory == "animalsBtn") {
                this._currentCategory = config.animalsWords;
                this._antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(this._antagonistWords, config.clothesWords);
                Array.prototype.push.apply(this._antagonistWords, config.foodWords);
            }
        };
        //determines the next word
        Game.prototype._determineNextWord = function () {
            //determine next collectible word
            this._currentWordItem = Math.floor(Math.random() * (10 - 0 + 1) + 0);
            console.log(this._currentWordItem);
            //   this._checkIfExists(this.nextItem);
            //determine next set of antagonist words 
            for (var antiWordCounter = 0; antiWordCounter < this._numOfAntiWords; antiWordCounter++) {
                this._antiWordItems[antiWordCounter] = (Math.floor(Math.random() * (30 - 0 + 1) + 0));
            }
        };
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
        Game.prototype.reset = function () {
            this._determineNextWord();
            this._word.text = this._currentWord;
        };
        Game.prototype.update = function () {
            this._background.update();
            this._truck.update();
            this._word.update();
            for (var antiWord = 0; antiWord < this._numOfAntiWords; antiWord++) {
                this._antiWords[antiWord].update();
            }
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
