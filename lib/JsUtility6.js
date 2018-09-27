/**
 * A collection of useful Javascript utility functions.
 *
 * @author Raheel Yawar <raheelyawar@gmail.com>
 *
 * @class Utility
 * @static
 * */
export default class Utility {
    /**
     * Clone a JSON object.
     *
     * @param {Object} obj
     * */
    static cloneJson(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Remove an item from an array.
     *
     * @param {Array} array
     * @param {Number|Object} element The element in array
     * */
    static removeFromArray(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}
