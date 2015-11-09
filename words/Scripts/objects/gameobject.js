var objects;
(function (objects) {
    var gameObject = (function () {
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function gameObject() {
            this.isColliding = false;
            this.soundString = "";
        }
        return gameObject;
    })();
    objects.gameObject = gameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map