export default class Utility {
    /**
     * @param {Object} obj
     * */
    static cloneJson(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * @param {Array} array
     * @param {Number|Object} element The element in array
     * */
    static removeFromArray(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }

    /**
     * @param {Array} array
     * @param {boolean} value
     * */
    static getFirstExists(array, value) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].exists === value) {
                return array[i];
            }
        }// end of for i

        return null;
    }

    /**
     * @param {Array} array
     * */
    static shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}
