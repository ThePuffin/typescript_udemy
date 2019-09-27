const names: string = "coucou";

let theArrays: any[] = ["String", "20", 5];

const theNumber: number = 22;

let newArray: string[] = ["String", "StringOther"];

let otherArray: boolean[] = [true, true, false];

let tupleTest: [string, number, boolean, string] = ["coucou", 3, true, "true"];

enum DoorStats {
  Open,
  Closed,
  Ajar
}

function log(val: any) {
  console.log(val);
}

log(DoorStats.Open);
log(DoorStats[0]);

function tellJoke(): string {
  return "Knock knock";
}

log(tellJoke());

let number = 5;
function muteFunction(numberToAdd: number): void {
  number += numberToAdd;
}
muteFunction(10);
log(number);
