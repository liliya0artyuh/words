module objects {
    export class Scoreboard {

        //PUBLIC PROPERTIES
        score: number = 0;
        lives: number = 3;

        //PRIVATE PROPERTIES
        private _scoreLabel: createjs.Text;
        private _livesLable: createjs.Text;

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        constructor() {

            this._scoreLabel = new createjs.Text("Score: ", "40px Consolas", "#FFF000");
            this._scoreLabel.x = 10;
            this._scoreLabel.y = 10;
            stage.addChild(this._scoreLabel);

            this._livesLable = new createjs.Text("Score: ", "40px Consolas", "#FFF000");
            this._scoreLabel.x = 300;
            this._scoreLabel.y = 10;
            stage.addChild(this._livesLable);
        }


        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update() {
            this._livesLable.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        }
    }
}