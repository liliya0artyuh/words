
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
        _nextItem: number = 0;
        _currentWord: string;
        _wordOrder: number[] = [0];
        _category: string;
        _numExists: boolean;
        _currentCategory: string[];
        _antagonistWords: string[];
        _antiWord1: string;
        _antiWord2: string;
        _antiWord3: string;



        //constructor
        constructor() {
            super();
        }

        //private method
        //determine categories for collectible words and the antagonist words
        private _determineCategories(): void {
            console.log("wordCategory " + wordCategory);
            if (wordCategory == "foodBtn") {
                this._currentCategory = config.foodWords;
                this._antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(this._antagonistWords, config.clothesWords);
                Array.prototype.push.apply(this._antagonistWords, config.animalsWords);
                console.log("this._currentCategory " + this._currentCategory);
                console.log("this._antagonistWords " + this._antagonistWords);
            } else if (wordCategory == "furnitureBtn") {
                this._currentCategory = config.furnitureWords;
                this._antagonistWords = config.foodWords;
                Array.prototype.push.apply(this._antagonistWords, config.clothesWords);
                Array.prototype.push.apply(this._antagonistWords, config.animalsWords);
            } else if (wordCategory == "clothesBtn") {
                this._currentCategory = config.clothesWords;
                this._antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(this._antagonistWords, config.foodWords);
                Array.prototype.push.apply(this._antagonistWords, config.animalsWords);
            } else if (wordCategory == "animalsBtn") {
                this._currentCategory = config.animalsWords;
                this._antagonistWords = config.furnitureWords;
                Array.prototype.push.apply(this._antagonistWords, config.clothesWords);
                Array.prototype.push.apply(this._antagonistWords, config.foodWords);
            }
        }


        //determines the next word
        private _determineNextWord(): void {
            //determine next collectible word
            this._nextItem = Math.floor(Math.random() * (10 - 0 + 1) + 0);
            console.log(this._nextItem);
            //   this._checkIfExists(this.nextItem);
            this._currentWord = this._currentCategory[this._nextItem];


            //determine next set of antagonist words 
            this._antiWord1 = this._antagonistWords[Math.floor(Math.random() * (30 - 0 + 1) + 0)];
            this._antiWord2 = this._antagonistWords[Math.floor(Math.random() * (30 - 0 + 1) + 0)];
            this._antiWord3 = this._antagonistWords[Math.floor(Math.random() * (30 - 0 + 1) + 0)];

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


        public reset(): void {
            this._determineNextWord();
            this._word.text = this._currentWord;
        }

        //public methods
        public start(): void {
            this._determineCategories();
            this._determineNextWord();


            this._background = new objects.Background("back");
            this.addChild(this._background);

            //add truck to the game
            this._truck = new objects.Truck("truck");
            this.addChild(this._truck);

            //add words
            this._word = new objects.Word(this._currentWord);// collectibe word
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