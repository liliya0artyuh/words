//<!--Repository Name for source code on github: words-- >
//<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var managers;
(function (managers) {
    var Collision = (function () {
        //CONSTRUCTOR+++++++++++++++++++++++++++++++++++++++++++++++++++
        function Collision() {
        }
        //PUBLIC METHODS
        //check distance bettween truck and any other objects
        Collision.prototype.check = function (gameObject, gameMainObject) {
            var p1 = new createjs.Point;
            var p2 = new createjs.Point;
            p1.x = gameMainObject.x;
            p1.y = gameMainObject.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((gameMainObject.width * 0.5) + (gameObject.width * 0.5))) {
                if (gameObject.isColliding == false) {
                    console.log("collision!");
                    //encrease points
                    //add sound
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "hero") {
                        scoreboard.score += 100;
                    }
                    if (gameObject.name == "enemy") {
                        scoreboard.lives--;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
