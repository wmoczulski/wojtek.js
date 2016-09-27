/**
 * Making the javascript a better language
 * TODO: unit tests
 */

/**
 * @returns {*} first element of array
 */
Array.prototype.first = function () {
    return this[0];
};

/**
 * @returns {*} last element of array
 */
Array.prototype.last = function () {
    return this[this.length - 1];
};

/**
 * Note that arrays with strings as key are actually objects, and depending on implementation may not be ordered
 * @returns {string} first key of array
 */
Array.prototype.firstKey = function () {
    for (key in this) {
        return key;
    }
};
