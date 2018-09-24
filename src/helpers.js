export function arrayToMap (array) {
    return array.reduce((previousValue, item) => {
        previousValue[item.id] = item;
        return previousValue;
    }, {});
}

export function mapToArray (object) {
    return Object.keys(object).map((id) => {
        return object[id];
    });
}