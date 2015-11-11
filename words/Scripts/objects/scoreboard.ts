module objects {
    export class Scoreboard {

        //PUBLIC PROPERTIES
        score: number = 0;
        lives: number = 3;

        //PRIVATE PROPERTIES
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;

        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        constructor() {

            this._scoreLabel = new objects.Label("Score: ", "40px Consolas", "#FFF000", 10, 10, false);
            stage.addChild(this._scoreLabel);

            this._livesLabel = new objects.Label("Lives: ", "40px Consolas", "#FFF000", 300, 10, false);
            stage.addChild(this._livesLabel);
        }


        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update() {
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        }

        public reset() {
            this.score = 0;
            this.lives = 3;
        }
    }
}