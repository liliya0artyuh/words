module objects {

    export class Word extends createjs.Text {

        //PUBLIC PROPERTIES ----------------------------------------
        width: number;
        height: number;
        _dx: number = 1;
        //determines the next set of words
        _currentWordItem: number = 0;
        _antiWordItem: number = 0;
        _currentWord = true;
        isColliding: boolean = false;
        sound: string = "";
        public name: string = "";


        //CONSTRUCTOR --------------------------------------------------
        constructor(curWord: boolean) {
            super("placeholder", "40px Consolas", "green");
            //check if the word is enemy or hero
            if (curWord) {
                this._currentWord = true;//hero
                this.sound = "wellDone";
                this.name = "hero";
            } else {
                this._currentWord = false;//enemy
                this.sound = "oh";
                this.name = "enemy";
            }
            this._reset();
        }


        //PRIVATE METHODS --------------------------------------------------------

        //determines the next word
        private _determineNextWord(): void {
            //determine next collectible word
            if (this._currentWord) {
                this._currentWordItem = Math.floor(Math.random() * (10 - 0 + 0) + 0);
                console.log(this._currentWordItem);
                //   this._checkIfExists(this.nextItem);
            } else{

            //determine next set of antagonist words 
 //           for (var antiWordCounter = 0; antiWordCounter < config.numOfAntiWords; antiWordCounter++) {
                this._antiWordItem = Math.floor(Math.random() * (30 - 0 + 0) + 0);
           }
        }




        //PUBLIC METHODS ---------------------------------------------------------
        //resets the text of of the word and its positions
        public _reset(): void {
            this._determineNextWord();
            if (this._currentWord) {
                this.text = config.currentCategory[this._currentWordItem];
            } else {
                // for (var antiWord = 0; antiWord < config.numOfAntiWords; antiWord++) {
                this.text = config.antagonistWords[this._antiWordItem];// antogonist words
                //   }
            }
            this._dx = (Math.random() * (1.5 - 0.5 + 0.5) + 0.5);//sets random speed between 1 and 2
            this.y = Math.floor(Math.random() * 450);// start word at random location
            this.x = 848;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }

        //checks if word left the screen and if so calls functions to reset word to new word
        private _checkBounds(): void {
            //check if word has left the screen
            if (this.x < 0) {
                this._reset();
            }
        }


        public update(): void {
            this.x -= this._dx;
           this._checkBounds();
        }

    }
}