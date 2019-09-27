// union types
var unionType;
unionType = 1;
unionType = "coucou";
// type guards
function addWithUnion(arg1, arg2) {
    if (typeof arg2 === "number" && typeof arg1 === "number") {
        return arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1 + arg2;
    }
    return arg1.toString() + arg2.toString();
}
function addWithAliases(arg1) {
    console.log(arg1);
    return arg1;
}
// null or undefined
function testUndef(tests) {
    console.log("test" + tests);
}
// testUndef();
testUndef(tests, null);
