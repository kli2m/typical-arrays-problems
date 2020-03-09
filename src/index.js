exports.min = function min(array) {
    if (arguments.length === 0 || array.length < 1) return 0
    return Math.min.apply(null, array);
}

exports.max = function max(array) {
    if (arguments.length === 0 || array.length < 1) return 0
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    if (arguments.length === 0 || array.length < 1) return 0
    return array.reduce((p, v) => (p + v)) / array.length
}