var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    ClassWithConstructor.prototype.getName = function () {
        return this.name;
    };
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(1, "Vinz");
console.log(classWithConstructor.getName());
