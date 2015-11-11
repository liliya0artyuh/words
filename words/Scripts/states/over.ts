
module states {
    // menu class
    export class Over extends objects.Scene {
        // private instance variables
        _endLabel: objects.Label;
        _againButton: objects.Button;
        _logo: createjs.Bitmap;
        _tooth: createjs.Bitmap;
        _outcomeLabel: objects.Label;
        _outcomeText: string="hello world";
        _arrayOutcome: Array<string>;
        _won: boolean;

        //constructor
        constructor(finalOutcome: number) {
            super();
           
        }

        //private method
        //callback function that allows to respond to button click events
        private _buttonClicked(event: createjs.MouseEvent): void {
            changeState(config.MENU_STATE);
        }

        //public methods
        public start(): void {
            this.addChild(background);
            scoreboard.reset();
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            this._logo.regX = 155;
            this._logo.regY = 101;
            this._logo.x = 440;
            this._logo.y = 140;
            this.addChild(this._logo);

            if (outcome == 1) {
                this._outcomeText = "Well Done! You have collected all the words from the selected category";
            }
            if (outcome == 2) {
                this._outcomeText = "Good try! Study the words and play the game again.";
            }

            this._outcomeLabel = new objects.Label(this._outcomeText, "18px Consolas", "#ffffff", config.centerX, 220, true);
            this.addChild(this._outcomeLabel);

            this._endLabel = new objects.Label("The End", "30px Consolas", "#ffffff", config.centerX, 260, true);
            this.addChild(this._endLabel);
            //instantiate and add a start button
            this._againButton = new objects.Button("againButton", config.centerX, 360, true);
            this.addChild(this._againButton);
            this._againButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        }

        public update(): void {
        }
    }

}