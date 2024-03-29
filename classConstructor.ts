class ClassWithConstructor {
  id: number;
  name: string;

  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }

  getName(): string {
    return this.name;
  }
}

let classWithConstructor = new ClassWithConstructor(1, "Vinz");
console.log(classWithConstructor.getName());