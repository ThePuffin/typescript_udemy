//Classes
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass has id: " + this.id);
    };
    return SimpleClass;
}());
//THIS keyword
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 8;
mySimpleClass.print();
