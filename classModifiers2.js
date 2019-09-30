//class Modifiers 2
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty() {
    }
    ClassWithPrivateProperty.printData = function () {
        console.log(this._eat);
    };
    Object.defineProperty(ClassWithPrivateProperty.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassWithPrivateProperty.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    ClassWithPrivateProperty._eat = "Eat food";
    return ClassWithPrivateProperty;
}());
var classWithPrivateProperty = new ClassWithPrivateProperty();
classWithPrivateProperty.name = "Surprise !!!";
classWithPrivateProperty.id = 5;
console.log(classWithPrivateProperty.name);
ClassWithPrivateProperty._hobby = "read";
console.log(ClassWithPrivateProperty._hobby);
ClassWithPrivateProperty.printData();
