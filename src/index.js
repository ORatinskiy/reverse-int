module.exports = function reverse(n) {
    let result = '';
    result = n.toString();
    result = result.split("");
    result = result.reverse();
    result = result.join("");
    result = parseInt(result);
    return result;
}