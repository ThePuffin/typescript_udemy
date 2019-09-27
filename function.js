function log(val) {
    console.log(val);
}
function addNumbers(a, b) {
    return (a + b).toString();
}
var addString = function (a, b) {
    return a + b;
};
log(addString("coucou ", "toi"));
log(addString("coucou toi"));
