function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        };
    }
    return result;
}
var res = createFunctions();
console.log(res.length);