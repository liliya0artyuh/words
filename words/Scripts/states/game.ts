
module states {
    // menu class
    export class Game extends objects.Scene {
        // private instance variables
        _background: objects.Background;
        _textLabel: objects.Label;
        _leftButton: objects.Button;
        _rightButton: objects.Button;
        _dragon_cave: createjs.Bitmap;

        //constructor
        constructor() {
            super();
        }

        //private method
   
       
        //public methods
        public start(): void {
            this._background = new objects.Background("back");
            this.addChild(this._background);
            stage.addChild(this);
        }

        public update(): void {
            this._background.update();
        }
    }
}