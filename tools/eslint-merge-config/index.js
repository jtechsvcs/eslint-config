const deepCopy = require('./utils/deepCopy');

/**
 * Does a shallow merge of object `from` to object `to`.
 * Traverses each of the keys in Object `from`, allowing for:
 * 
 * * If the value of a key is an array, it will be concatenated
 * 	 onto `to`.
 * * If the value of a key is an object it will extend `to` the
 *   key/values of that object.
 * @param {Object} from Object to copy from
 * @param {Object} to Object to copy to
 * @returns {Object} The object that has been extended
 */
function merge(from, to) {
    const mergedInto = deepCopy(to);
    for (var key in from) {
        let hasKey = mergedInto.hasOwnProperty(key);
        if (Array.isArray(from[key])) {
            if (
                !hasKey || 
				!(mergedInto[key] instanceof Array)
            ) mergedInto[key] = [];

            mergedInto[key].push(...from[key]);
        } else if (typeof from[key] === "object") {
            if (
                !hasKey || 
				!(typeof mergedInto[key] === "object")
            ) mergedInto[key] = {};
			
            Object.assign(mergedInto[key], from[key]);
        } else {
            mergedInto[key] = from[key];
        }
    }
    return mergedInto;
}

module.exports = merge;