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
log(addString("coucou toi "));
//give a defaut parameter
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Default name"; }
    return firstName + " " + lastName;
}
var myName = buildName("Name");
var myOtherName = buildName("Bruce", "Banner");
log(myName);
log(myOtherName);
function addTwoNumner(numberOne, numberTwo) {
    if (numberTwo === void 0) { numberTwo = 5; }
    return numberOne + numberTwo;
}
log(addTwoNumner(1));
function buildPerson(firstName) {
    var remainingName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        remainingName[_i - 1] = arguments[_i];
    }
    return firstName + " " + remainingName.join(" ");
}
log(buildPerson("Vinz", "et", "puis", "c'est", "tout"));
