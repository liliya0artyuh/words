
module states {
    // menu class
    export class Game extends objects.Scene {
        // private instance variables
        _background: objects.Background;
        _textLabel: objects.Label;
        _leftButton: objects.Button;
        _rightButton: objects.Button;
        _dragon_cave: createjs.Bitmap;
        _truck: objects.Truck;
        _word: objects.Word;
        _antiWord: objects.Word;



        //constructor
        constructor() {
            super();
        }

        //private method
   
       
        //public methods
        public start(): void {
            this._background = new objects.Background("back");
            this.addChild(this._background);

            //add truck to the game
            this._truck = new objects.Truck("truck");
            this.addChild(this._truck);

            //add words
            this._word = new objects.Word("food");// collectibe word
            this.addChild(this._word);

            //add words
          //  this._antiWord = new objects.Word();// antogonist words
          //  this.addChild(this._antiWord);

            //add all objects to the stage
            stage.addChild(this);
        }

        public update(): void {
            this._background.update();
            this._truck.update();
            this._word.update();
        }
    }
}