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
        function Word(word) {
            _super.call(this, word, "40px Consolas", "green");
            this._dx = 1;
            this.reset();
            // this._width = this.getBounds().width;
            ////this._height = this.getBounds().height;
            //this.x = 848;
            //this.y = 10;
        }
        //PRIVATE METHODS --------------------------------------------------------
        //checks if word left the screen and if so calls functions to reset word to new word
        Word.prototype._checkBounds = function () {
            //check if word has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        //PUBLIC METHODS ---------------------------------------------------------
        //resets the text of of the word and its positions
        Word.prototype.reset = function () {
            this._dx = (Math.random() * (1.5 - 0.5 + 0.5) + 0.5); //sets random speed between 1 and 2
            this.y = Math.floor(Math.random() * 450); // start word at random location
            this.x = 848;
        };
        Word.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        return Word;
    })(createjs.Text);
    objects.Word = Word;
})(objects || (objects = {}));
