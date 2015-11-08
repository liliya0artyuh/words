module functions {

    //determines the next word
    export function   determineNextWord(): void {
            //determine next collectible word
            this._currentWordItem = Math.floor(Math.random() * (10 - 0 + 1) + 0);
            console.log(this._currentWordItem);
            //   this._checkIfExists(this.nextItem);

            //determine next set of antagonist words 
            for(var antiWordCounter = 0; antiWordCounter< this._numOfAntiWords; antiWordCounter++) {
        this._antiWordItems[antiWordCounter] = (Math.floor(Math.random() * (30 - 0 + 1) + 0));
    }
    }

            //determine categories for collectible words and the antagonist words
    export function determineCategories(): void {
        console.log("wordCategory " + wordCategory);
        if(wordCategory == "foodBtn") {
            config.currentCategory = config.foodWords;
            config.antagonistWords = config.furnitureWords;
            Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
            Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
            console.log("this._currentCategory " + config.currentCategory);
            console.log("this._antagonistWords " + config.antagonistWords);
        } else if (wordCategory == "furnitureBtn") {
            config.currentCategory = config.furnitureWords;
            config.antagonistWords = config.foodWords;
            Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
            Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
        } else if (wordCategory == "clothesBtn") {
            config.currentCategory = config.clothesWords;
            config.antagonistWords = config.furnitureWords;
            Array.prototype.push.apply(config.antagonistWords, config.foodWords);
            Array.prototype.push.apply(config.antagonistWords, config.animalsWords);
        } else if (wordCategory == "animalsBtn") {
            config.currentCategory = config.animalsWords;
            config.antagonistWords = config.furnitureWords;
            Array.prototype.push.apply(config.antagonistWords, config.clothesWords);
            Array.prototype.push.apply(config.antagonistWords, config.foodWords);
        }
    }
}