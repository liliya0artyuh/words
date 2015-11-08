var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //declare the scene class
    var Scene = (function (_super) {
        __extends(Scene, _super);
        //constructor
        function Scene() {
            _super.call(this);
        }
        //public methods
        Scene.prototype.update = function () {
        };
        Scene.prototype.start = function () {
        };
        return Scene;
    })(createjs.Container);
    objects.Scene = Scene;
})(objects || (objects = {}));
//# sourceMappingURL=scene.js.map