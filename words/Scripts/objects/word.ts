module objects {

    export class Word extends createjs.Text {

        //PUBLIC PROPERTIES ----------------------------------------
        _width: number;
        _height: number;
        _dx: number = 1;

        //CONSTRUCTOR --------------------------------------------------
        constructor(word: string) {
            super(word, "40px Consolas", "green");
            this.reset();
           // this._width = this.getBounds().width;
            ////this._height = this.getBounds().height;
            //this.x = 848;
            //this.y = 10;
        }


        //PRIVATE METHODS --------------------------------------------------------
      



        //PUBLIC METHODS ---------------------------------------------------------
        //resets the text of of the word and its positions
        public reset(): void {
            this._dx = (Math.random() * (1.5 - 0.5 + 0.5) + 0.5);//sets random speed between 1 and 2
            this.y = Math.floor(Math.random() * 450);// start word at random location
            this.x = 848;
        }


        //checks if word left the screen and if so calls functions to reset word to new word
        public checkBounds(): void {
            //check if word has left the screen
            if (this.x < 0) {
                this.reset();
            }
        }

        public update(): void {
            this.x -= this._dx;
           this.checkBounds();
        }

    }
}