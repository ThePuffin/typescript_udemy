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
