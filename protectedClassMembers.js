//protected class members
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassUsingProtected = /** @class */ (function () {
    function ClassUsingProtected() {
    }
    ClassUsingProtected.prototype.getId = function () {
        return this.id;
    };
    return ClassUsingProtected;
}());
var DerivedFromProtected = /** @class */ (function (_super) {
    __extends(DerivedFromProtected, _super);
    function DerivedFromProtected() {
        var _this = _super.call(this) || this;
        _this.id = 0;
        return _this;
    }
    return DerivedFromProtected;
}(ClassUsingProtected));
var derivedFromProtected = new DerivedFromProtected();
derivedFromProtected.id = 1;
console.log("id returns : " + derivedFromProtected.id);
derivedFromProtected.id = 5;
console.log("id returns : " + derivedFromProtected.id);
