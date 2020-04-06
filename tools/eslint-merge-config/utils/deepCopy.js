const deepCopy = (obj) => {
    if (typeof obj === 'object') {
        const copyArray = (arr) => arr.map((val) => deepCopy(val));
        if (obj instanceof Array) return copyArray(obj);
        const newObj = {};
        for (key in obj) {
            if (obj[key] instanceof Array) {
                newObj[key] = copyArray(obj[key]);
            } else if (typeof obj[key] === 'object') {
                newObj[key] = deepCopy(obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
    return obj;
};

module.exports = deepCopy;