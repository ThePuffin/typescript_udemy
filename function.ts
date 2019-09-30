function log(val: any): void {
  console.log(val);
}

function addNumbers(a: number, b: number): string {
  return (a + b).toString();
}

const addString = (a: string, b?: string) => {
  return a + b;
};

log(addString("coucou ", "toi"));
log(addString("coucou toi "));

//give a defaut parameter
function buildName(
  firstName: string,
  lastName: string = "Default name"
): string {
  return `${firstName} ${lastName}`;
}

const myName = buildName("Name");
const myOtherName = buildName("Bruce", "Banner");
log(myName);
log(myOtherName);

function addTwoNumner(numberOne: number, numberTwo: number = 5): number {
  return numberOne + numberTwo;
}
log(addTwoNumner(1));

function buildPerson(firstName: string, ...remainingName: string[]) {
  return `${firstName} ${remainingName.join(" ")}`;
}

log(buildPerson("Vinz", "et", "puis", "c'est", "tout"));
