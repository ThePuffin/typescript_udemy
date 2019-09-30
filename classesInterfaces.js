//Implementing interfaces
function printClass(a) {
    a.print();
}
var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.prototype.print = function () {
        console.log("ClassA.print()");
    };
    return ClassA;
}());
var ClassB = /** @class */ (function () {
    function ClassB() {
    }
    ClassB.prototype.print = function () {
        console.log("ClassB.print()");
    };
    return ClassB;
}());
var classA = new ClassA();
classA.print();
var classB = new ClassB();
