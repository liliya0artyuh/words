﻿    //<!--Repository Name for source code on github: words-- >
    //<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
    //<!--Author Name: Liliya Artyukh -- >
    //<!--Creation Date: 06 - Nov - 2015 -- >
    //<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >

module managers {
    export class Asset {
        //PUBLIC PROPERTIES 
        public loader: createjs.LoadQueue;


        //PRIVATE PROPERTIES
        //manifest of all of the assets
    private _manifest = [
        { id: "againButton", src: "../../Assets/images/againButton.png" },
        { id: "back", src: "../../Assets/images/back_long.png" },
        { id: "truck", src: "../../Assets/images/truck.png" },
        { id: "emptyButton", src: "../../Assets/images/button183x82.png" },
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "aboutButton", src: "../../Assets/images/about.png" },
        { id: "rulesButton", src: "../../Assets/images/rules.png" },
        { id: "logo", src: "../../Assets/images/logo.png" },
        { id: "wellDone", src: "../../Assets/audio/wellDone.wav" },
        { id: "oh", src: "../../Assets/audio/oh.wav" }
    ];



        //CONSTRUCTOR
        constructor() {
            this.preload();
        }


        preload() {
            this.loader = new createjs.LoadQueue(true);
            this.loader.installPlugin(createjs.Sound);
            //event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this._manifest);
        }
    }
}