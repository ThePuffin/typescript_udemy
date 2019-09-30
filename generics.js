//generics
//before
function beforeIdentity(args) {
    return args;
}
function beforeIdentity1(args) {
    return args;
}
//with generics
function identity(arg) {
    return arg;
}
var a = identity("myString");
var b = identity(5);
console.log(a, b);
