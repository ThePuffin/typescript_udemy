function log(val: any): void {
  console.log(val);
}

interface IComplexType {
  id: number;
  name?: string;
}

let complexType: IComplexType = { id: 1, name: "Vinz" };
let othercomplexType: IComplexType = { id: 2 };

interface Point {
  x: number;
  readonly y: number;
}

let p1: Point = { x: 2, y: 2 };

p1.x = 4;
//impossible :
// p1.y = 8;

log(p1);
