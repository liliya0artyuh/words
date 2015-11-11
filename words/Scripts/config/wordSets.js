//<!--Repository Name for source code on github: words-- >
//<!--Description: A game that allows to users practise with memorising English words in different categories in a fun manner -- >
//<!--Author Name: Liliya Artyukh -- >
//<!--Creation Date: 06 - Nov - 2015 -- >
//<!--Last Modified Date: 12 - Nov - 2015 -- >
//<!--Last Modified by: Liliya Artyukh -- >
var config;
(function (config) {
    //word sets
    config.foodWords = ["apple", "potato", "onion", "pear", "rice", "bread", "beef", "cheese", "milk", "juice"];
    config.furnitureWords = ["chair", "desk", "bookshelf", "sofa", "table", "lamp", "bed", "mirror", "carpet", "TV"];
    config.clothesWords = ["dress", "shorts", "shirt", "skirt", "pants", "hat", "scarf", "suit", "tie", "socks"];
    config.animalsWords = ["dog", "cat", "cow", "elephant", "sheep", "horse", "pig", "bear", "fox", "wolf"];
    config.currentCategory = [];
    config.antagonistWords = [];
})(config || (config = {}));
//# sourceMappingURL=wordSets.js.map