var objects;
(function (objects) {
    var Scoreboard = (function () {
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++
        function Scoreboard() {
            //PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 3;
            this._scoreLabel = new objects.Label("Score: ", "40px Consolas", "#FFF000", 10, 10, false);
            stage.addChild(this._scoreLabel);
            this._livesLabel = new objects.Label("Lives: ", "40px Consolas", "#FFF000", 300, 10, false);
            stage.addChild(this._livesLabel);
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        Scoreboard.prototype.update = function () {
            this._livesLabel.text = "Lives: " + this.lives;
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