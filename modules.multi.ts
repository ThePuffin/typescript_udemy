//introduction to modules

export class abc {
  a: string;
  b: string;
  c: number;

  constructor(private _a: string, private _b: string, private _c: number) {
    this.a = _a;
    this.b = _b;
    this.c = _c;
  }
}

class abcBis {
  c: string;
  d: string;
  f: number;

  constructor(private _c: string, private _d: string, private _f: number) {
    this.c = _c;
    this.d = _d;
    this.f = _f;
  }
}

export { abcBis as abcBiss };
