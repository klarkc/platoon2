export function flattenDeep(arr) {
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []
    );
}