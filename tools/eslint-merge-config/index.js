/**
 * Does a shallow merge of object <from> to object <to>.
 * Traverses each of the keys in Object <from>, and, if
 * they are an array, concatenates them to <to>.  If 
 * they are an object, then it will extend <to>.
 * @param {Object} from Object to copy from
 * @param {Object} to Object to copy to
 * @returns {Object} The object that has been extended
 */
function merge(from, to) {
	for (var key in from) {
		let hasKey = to.hasOwnProperty(key);
		if (Array.isArray(from[key])) {
			if (!hasKey) to[key] = [];
			to[key] = to[key].concat(from[key]);
		} else if (typeof from[key] === "object") {
			if (!hasKey) to[key] = {};
			Object.assign(to[key], from[key]);
		} else {
			to[key] = from[key];
		}
	}
	return to;
}

module.exports = merge;