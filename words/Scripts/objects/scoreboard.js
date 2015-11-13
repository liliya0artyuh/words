//<!--Repository Name for source code on github: words-- >
//<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
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
