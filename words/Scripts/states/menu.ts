
module states {
    // menu class
    export class Menu extends objects.Scene {
        // private instance variables
        _introLabel: objects.Label;
        _startButton: objects.Button;
        _logo: createjs.Bitmap;
        _nameLabel: objects.Label;

        //constructor
        constructor() {
            super();
        }

        //private method
        //callback function that allows to respond to button click events
        private _buttonClicked(event: createjs.MouseEvent): void {
            createjs.Sound.play("soundtrack");
            //get the name of user
            name = (<HTMLInputElement>document.getElementById("txtName")).value;
            if (name == null || name == "") {
                name = "Pin";
            }
            console.log(name);
            changeState(config.PLAY_STATE);
    }

        //public methods
        public start(): void {
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.getResult("dragon"));
            this._logo.regX = 155;
            this._logo.regY = 101;
            this._logo.x = 360;
            this._logo.y = 145;
            this.addChild(this._logo);

            this._nameLabel = new objects.Label("What's your name?", "12px Consolas", "#000000", 250, 220);
            this.addChild(this._nameLabel);

            document.getElementById("txtName").style.display = "inline";
            console.log(name);

            this._introLabel = new objects.Label(" Do you want to play?", "40px Consolas", "#000000", 320, 260);
            this.addChild(this._introLabel);

            //instantiate and add a start button
            this._startButton = new objects.Button("startButton", 300, 340);
            this.addChild(this._startButton);
            this._startButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        }

        public update(): void {
        }
    }

}