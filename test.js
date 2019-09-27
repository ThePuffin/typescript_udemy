var names = "coucou";
var theArrays = ["String", "20", 5];
var theNumber = 22;
var newArray = ["String", "StringOther"];
var otherArray = [true, true, false];
var tupleTest = ["coucou", 3, true, "true"];
var DoorStats;
(function (DoorStats) {
    DoorStats[DoorStats["Open"] = 0] = "Open";
    DoorStats[DoorStats["Closed"] = 1] = "Closed";
    DoorStats[DoorStats["Ajar"] = 2] = "Ajar";
})(DoorStats || (DoorStats = {}));
function log(val) {
    console.log(val);
}
log(DoorStats.Open);
log(DoorStats[0]);
function tellJoke() {
    return "Knock knock";
}
log(tellJoke());
var number = 5;
function muteFunction(numberToAdd) {
    number += numberToAdd;
}
muteFunction(10);
log(number);
