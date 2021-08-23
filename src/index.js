module.exports = function reverse(n) {
    n = Math.abs(n);
    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
};
