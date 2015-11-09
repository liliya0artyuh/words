var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Word = (function (_super) {
        __extends(Word, _super);
        //CONSTRUCTOR --------------------------------------------------
        function Word(curWord) {
            _super.call(this, "placeholder", "40px Consolas", "green");
            this._dx = 1;
            //determines the next set of words
            this._currentWordItem = 0;
            this._antiWordItem = 0;
            this._currentWord = true;
            this.isColliding = false;
            this.sound = "";
            //check if the word is enemy or hero
            if (curWord) {
                this._currentWord = true; //hero
                this.sound = "wellDone";
            }
            else {
                this._currentWord = false; //enemy
                this.sound = "oh";
            }
            this._reset();
        }
        //PRIVATE METHODS --------------------------------------------------------
        //determines the next word
        Word.prototype._determineNextWord = function () {
            //determine next collectible word
            if (this._currentWord) {
                this._currentWordItem = Math.floor(Math.random() * (10 - 0 + 0) + 0);
                console.log(this._currentWordItem);
            }
            else {
                //determine next set of antagonist words 
                //           for (var antiWordCounter = 0; antiWordCounter < config.numOfAntiWords; antiWordCounter++) {
                this._antiWordItem = Math.floor(Math.random() * (30 - 0 + 0) + 0);
            }
        };
        //PUBLIC METHODS ---------------------------------------------------------
        //resets the text of of the word and its positions
        Word.prototype._reset = function () {
            this._determineNextWord();
            if (this._currentWord) {
                this.text = config.currentCategory[this._currentWordItem];
            }
            else {
                // for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this.text = config.antagonistWords[this._antiWordItem]; // antogonist words
            }
            this._dx = (Math.random() * (1.5 - 0.5 + 0.5) + 0.5); //sets random speed between 1 and 2
            this.y = Math.floor(Math.random() * 450); // start word at random location
            this.x = 848;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        };
        //checks if word left the screen and if so calls functions to reset word to new word
        Word.prototype._checkBounds = function () {
            //check if word has left the screen
            if (this.x < 0) {
                this._reset();
            }
        };
        Word.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Word;
    })(createjs.Text);
    objects.Word = Word;
})(objects || (objects = {}));
//# sourceMappingURL=word.js.map