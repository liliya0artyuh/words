module objects {

    export class Word extends createjs.Bitmap {

        //PUBLIC PROPERTIES ----------------------------------------
        width: number;
        height: number;
        dy: number = 5;


        //CONSTRUCTOR --------------------------------------------------
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._reset();
        }


        //PRIVATE METHODS --------------------------------------------------------
        private _checkBounds(): void {
            //check if island has left the screen
            if (this.y > 480 + this.height) {
                this._reset();
            }
        }

        private _reset(): void {
            this.x = Math.floor(Math.random() * 640);// start island at random location
            this.y = this.height;
        }

        //PUBLIC METHODS -----------------------------------------------------
        public update(): void {
            this.y += this.dy;
            this._checkBounds();
        }

    }
}