// union types

let unionType: number | string;

unionType = 1;
unionType = "coucou";

// type guards

function addWithUnion(
  arg1: string | number,
  arg2: string | number
): string | number {
  if (typeof arg2 === "number" && typeof arg1 === "number") {
    return arg1 + arg2;
  } else if (typeof arg1 === "string" && typeof arg2 === "string") {
    return arg1 + arg2;
  }
  return arg1.toString() + arg2.toString();
}

// type Aliases

type stringOrNumber = string | number;

function addWithAliases(arg1: stringOrNumber): stringOrNumber {
  console.log(arg1);
  return arg1;
}

// null or undefined

function testUndef(tests: null | number) {
  console.log("test" + tests);
}

// testUndef();
testUndef(tests:null);
