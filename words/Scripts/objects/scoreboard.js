var objects;
(function (objects) {
    var Scoreboard = (function () {
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        function Scoreboard() {
            //PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 3;
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
        Scoreboard.prototype.update = function () {
            this._livesLable.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
        };
        Scoreboard.prototype.reset = function () {
            this.score = 0;
            this.lives = 3;
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map