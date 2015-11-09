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
            this._background = new objects.Background("back");
            this.addChild(this._background);
            //add truck to the game
            this._truck = new objects.Truck("truck");
            this.addChild(this._truck);
            //add words
            this._word = new objects.Word(true); // collectibe word
            this.addChild(this._word);
            //config.currentCategory[this._currentWordItem]
            //add words
            for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord] = new objects.Word(false); // antogonist words
                this.addChild(this._antiWords[antiWord]);
            }
            //add all objects to the stage
            stage.addChild(this);
            this.collision = new managers.Collision;
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
            this._background.update();
            this._truck.update();
            this._word.update();
            for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this._antiWords[antiWord].update();
                this.collision.check(this._antiWords[antiWord], this._truck);
            }
            this.collision.check(this._word, this._truck);
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map