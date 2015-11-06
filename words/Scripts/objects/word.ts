module objects {

    export class Word extends createjs.Text {

        //PUBLIC PROPERTIES ----------------------------------------
        width: number;
        height: number;
        dx: number = 1;

        category: string;

        //foodWords = new String["apple", "potato", "onion", "pear", "rice", "bread", "beef", "cheese", "milk", "juice"];
        //furnitureWords = new String["chair", "desk", "bookshelf", "sofa", "table", "lamp", "bed", "mirror", "carpet", "TV"];
        //clothesWords = new String["dress", "shorts", "shirt", "skirt", "pants", "hat", "scarf", "suit", "tie", "socks"];
        //animalsWords = new String["dog", "cat", "caw", "elephant", "sheep", "horse", "pig", "bear", "fox", "wolf"];

        //CONSTRUCTOR --------------------------------------------------
        constructor() {
            super("apple", "12px Consolas", "green");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
          //  this.regX = this.width * 0.5;
            //this.regY = this.height * 0.5;
            this.x = 848;
            this.y = 10;
          //  this._reset();
        }


        //PRIVATE METHODS --------------------------------------------------------
        private _checkBounds(): void {
            //check if island has left the screen
            if (this.y > 480 + this.height) {
                this._reset();
            }
        }

        private getWord(): string {
            this.category = "food";
            return this.category;
        }

        private _reset(): void {
            this.x = Math.floor(Math.random() * 640);// start island at random location
            this.y = this.height;
        }

        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
            this.x -= this.dx;
          //  this._checkBounds();
        }

    }
}