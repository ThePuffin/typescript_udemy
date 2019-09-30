//generics

//before
function beforeIdentity(args: number): number {
  return args;
}

function beforeIdentity1(args: any): any {
  return args;
}

//with generics

function identity<T>(arg: T): T {
  return arg;
}

const a = identity("myString");
//use generics:
const b = identity<number>(5);

console.log(a, b);
