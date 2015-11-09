var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var states;
(function (states) {
    // menu class
    var Over = (function (_super) {
        __extends(Over, _super);
        //constructor
        function Over(finalOutcome) {
            _super.call(this);
            this._arrayOutcome = new Array;
            this._arrayOutcome = [name + " got on the tree trunk. \n\nUnfortunately, the tree trunk was old, hollow and decayed.\n\nThe trunk broke into pieces. \n\nAnd both the hero and the trunk went under the water.",
                name + " continues swimming looking for a dry solid ground. \n\nHowever, he got very tired and submerged into the deep waters.",
                name + " screamed loudly and angrily at the bear.\n\nThe bear noticing an easy dinner went after the hero.",
                name + " decided to pretend to be dead. \n\nHowever, without moving he/she could not stay afloat.",
                name + " drank some water.\n\nUnfortunately, he/she did not survive from the poison from the bread.",
                name + " fell asleep.\n\nUnfortunately, he/she did not survive from the poison from the bread.",
                name + " screamed 'Bonzai!' and attacked the dragon.\n\nDragon was very strong.\n\nThe hero had no chance to survive.",
                name + " threw the bread to the dragon.\n\nDragon ate the bread.\b\bThe bread turned out to be poisoned.\n\nDragon died.\n\n" + name + " got the tooth!",
            ];
            switch (finalOutcome) {
                case 1:
                    this._won = false;
                    this._outcomeText = this._arrayOutcome[0];
                    break;
                case 2:
                    this._won = false;
                    this._outcomeText = this._arrayOutcome[1];
                    break;
                case 3:
                    this._won = false;
                    this._outcomeText = this._arrayOutcome[2];
                    break;
                case 4:
                    this._won = false;
                    this._outcomeText = this._arrayOutcome[3];
                    break;
                case 5:
                    this._won = false;
                    this._outcomeText = this._arrayOutcome[4];
                    break;
                case 6:
                    this._won = false;
                    this._outcomeText = this._arrayOutcome[5];
                    break;
                case 7:
                    this._won = false;
                    this._outcomeText = this._arrayOutcome[6];
                    break;
                case 8:
                    this._won = true;
                    this._outcomeText = this._arrayOutcome[7];
                    break;
            }
        }
        //private method
        //callback function that allows to respond to button click events
        Over.prototype._buttonClicked = function (event) {
            document.getElementById("txtName").value = "";
            document.getElementById("txtName").style.display = "inline";
            name = "";
            changeState(config.MENU_STATE);
        };
        //public methods
        Over.prototype.start = function () {
            //instantiate and add a logo
            this._logo = new createjs.Bitmap(assets.loader.getResult("logo"));
            this._logo.regX = 155;
            this._logo.regY = 101;
            this._logo.x = 440;
            this._logo.y = 140;
            this.addChild(this._logo);
            this._outcomeLabel = new objects.Label(this._outcomeText, "12px Consolas", "#000000", 320, 160, true);
            this.addChild(this._outcomeLabel);
            if (this._won) {
                //instantiate and add a tooth image
                this._tooth = new createjs.Bitmap(assets.loader.getResult("tooth"));
                this._tooth.regX = 52;
                this._tooth.regY = 30;
                this._tooth.x = 360;
                this._tooth.y = 240;
                this.addChild(this._tooth);
            }
            this._endLabel = new objects.Label("The End", "30px Consolas", "#000000", 320, 280, true);
            this.addChild(this._endLabel);
            //instantiate and add a start button
            this._againButton = new objects.Button("againButton", 300, 340, true);
            this.addChild(this._againButton);
            this._againButton.on("click", this._buttonClicked, this);
            stage.addChild(this);
        };
        Over.prototype.update = function () {
        };
        return Over;
    })(objects.Scene);
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map