//<!--Repository Name for source code on github: words-- >
//<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Truck class ---------------------------------------------
    var Truck = (function (_super) {
        __extends(Truck, _super);
        //CONSTRUCTOR --------------------------------------------------
        function Truck(imageString) {
            _super.call(this, assets.loader.getResult(imageString));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.x = 100;
        }
        //PRIVATE METHODS --------------------------------------------------------
        Truck.prototype._checkBounds = function () {
            //check if Background has left the screen
            if (this.x <= -1696) {
                this._reset();
            }
        };
        Truck.prototype._reset = function () {
            this.x = 0; // start Background - x value
            this.y = 0; // start Background - y value
        };
        //PUBLIC METHODS -----------------------------------------------------
        Truck.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Truck;
    })(createjs.Bitmap);
    objects.Truck = Truck;
})(objects || (objects = {}));
