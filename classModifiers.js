//class Modifiers
var ClassWithPublicProperty = /** @class */ (function () {
    function ClassWithPublicProperty() {
    }
    return ClassWithPublicProperty;
}());
var publicAccess = new ClassWithPublicProperty();
publicAccess.id = 8;
//Impossible :
// publicAccess.name = "NAME.";
var OtherClassWithPublicProperty = /** @class */ (function () {
    function OtherClassWithPublicProperty() {
    }
    return OtherClassWithPublicProperty;
}());
var otherPublicAccess = new OtherClassWithPublicProperty();
//impossible because it's private :
// otherPublicAccess.id = 8;
console.log(publicAccess);
console.log(otherPublicAccess);
var classWithAutomaticProperties = /** @class */ (function () {
    function classWithAutomaticProperties(id, name) {
        this.id = id;
        this.name = name;
    }
    return classWithAutomaticProperties;
}());
var myAutoClass = new classWithAutomaticProperties(1, "ClassName");
console.log("My auto class id : " + myAutoClass.id);
//not accessible :
// console.log(`My auto class id : ${myAutoClass.name}`);
