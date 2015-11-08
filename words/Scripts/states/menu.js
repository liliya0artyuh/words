var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // menu class
    var Menu = (function (_super) {
        __extends(Menu, _super);
        //constructor
        function Menu() {
            _super.call(this);
            this._centerX = 424;
        }
        //private method
        //callback function that allows to respond to button click events
        Menu.prototype._startClicked = function (event) {
            console.log("event.target " + event.target);
            createjs.Sound.play("soundtrack");
            this.removeAllChildren();
            this._getDetails();
        };
        Menu.prototype._categoryClicked = function (event) {
            wordCategory = event.target.name;
            //get the name of user
            name = document.getElementById("txtName").value;
            if (name == null || name == "") {
                name = "YOU";
            }
            console.log("check name after button is clicked " + name);
            document.getElementById("txtName").style.display = "none";
            changeState(config.PLAY_STATE);
        };
        //public methods
        Menu.prototype.start = function () {
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.getResult("logo"));
            this._logo.x = this._centerX; //place in the middle along x axis
            this._logo.y = 50;
            //set regX so image is centered along x axis
            this._logo.regX = 292 * 0.5;
            //add logo to game container
            this.addChild(this._logo);
            //add label to ask if user wants to paly the game
            this._introLabel = new objects.Label(" Do you want to play?", "40px Consolas", "#000000", this._centerX, 260, true);
            this.addChild(this._introLabel);
            //instantiate and add a start button
            this._startButton = new objects.Button("startButton", this._centerX, 340, true);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startClicked, this);
            //add this menu container to the stage
            stage.addChild(this);
        };
        Menu.prototype._getDetails = function () {
            this._nameLabel = new objects.Label("What's your name?", "20px Consolas", "#000000", 181, 110, false);
            this.addChild(this._nameLabel);
            document.getElementById("txtName").style.display = "inline";
            console.log("check name " + name);
            this._selectCategoryLabel = new objects.Label("Select Category:", "20px Consolas", "#000000", 181, 170, false);
            this.addChild(this._selectCategoryLabel);
            //add category buttons and their labels
            this._foodBtn = new objects.Button("emptyButton", 181, 200, false);
            this._foodBtn.name = "foodBtn";
            this.addChild(this._foodBtn);
            this._foodBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("FOOD", "30px Consolas", "#000000", 272.5, 231, true);
            this.addChild(this._foodLabel);
            this._furnitureBtn = new objects.Button("emptyButton", 484, 200, false);
            this._furnitureBtn.name = "furnitureBtn";
            this.addChild(this._furnitureBtn);
            this._furnitureBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("FURNITURE", "30px Consolas", "#000000", 575.5, 231, true);
            this.addChild(this._foodLabel);
            this._clothesBtn = new objects.Button("emptyButton", 181, 300, false);
            this._clothesBtn.name = "clothesBtn";
            this.addChild(this._clothesBtn);
            this._clothesBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("CLOTHES", "30px Consolas", "#000000", 272.5, 331, true);
            this.addChild(this._foodLabel);
            this._animalsBtn = new objects.Button("emptyButton", 484, 300, false);
            this._animalsBtn.name = "animalsBtn";
            this.addChild(this._animalsBtn);
            this._animalsBtn.on("click", this._categoryClicked, this);
            this._foodLabel = new objects.Label("ANIMALS", "30px Consolas", "#000000", 575.5, 331, true);
            this.addChild(this._foodLabel);
            stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        return Menu;
    })(objects.Scene);
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map