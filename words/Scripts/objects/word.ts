module objects {

    export class Word extends createjs.Text {

        //PUBLIC PROPERTIES ----------------------------------------
        width: number;
        height: number;
        dx: number = 1;
        nextItem: number = 0;
        currentWord: string;
        wordOrder: number[] = [0];
        category: string;
        numExists: boolean;
        _currentCategody: string[];

         //word sets
     foodWords: string[] = ["apple", "potato", "onion", "pear", "rice", "bread", "beef", "cheese", "milk", "juice"];

     furnitureWords: string[] = ["chair", "desk", "bookshelf", "sofa", "table", "lamp", "bed", "mirror", "carpet", "TV"];
     clothesWords: string[] = ["dress", "shorts", "shirt", "skirt", "pants", "hat", "scarf", "suit", "tie", "socks"];
     animalsWords: string[] = ["dog", "cat", "caw", "elephant", "sheep", "horse", "pig", "bear", "fox", "wolf"];



        //CONSTRUCTOR --------------------------------------------------
        constructor(selectedcategory: string) {
            super("placeholder", "30px Consolas", "green");

            this.determineNextWord();
            this._reset();
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //  this.regX = this.width * 0.5;
            //this.regY = this.height * 0.5;
            this.x = 848;
            this.y = 10;
        }


        //PRIVATE METHODS --------------------------------------------------------
        //checks if word left the screen and if so calls functions to reset word to new word
        private _checkBounds(): void {
            //check if word has left the screen
            if (this.x < 0) {
                this.determineNextWord();
                this._reset();
            }
        }


        //determines the next word
        private determineNextWord(): void {
            //determine next collectible word
            this.nextItem = Math.floor(Math.random() * (10 - 0 + 1) + 0);
            console.log(this.nextItem);
         //   this._checkIfExists(this.nextItem);
            this.currentWord = this.foodWords[this.nextItem];


            //determine next antagonist word 
            for (var antiWord; antiWord < 3; antiWord++) {
                Math.floor(Math.random() * (10 - 0 + 1) + 0);
            }

        }


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

        private getCategory(): string {
            this.category = "category";
            return this.category;
        }

        //resets the text of of the word and its positions
        private _reset(): void {
            this.text = this.currentWord;
            this.y = Math.floor(Math.random() * 500);// start word at random location
            this.x = 848;
        }

        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
            this.x -= this.dx;
           this._checkBounds();
        }

    }
}