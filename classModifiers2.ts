//class Modifiers 2

class ClassWithPrivateProperty {
  private _id: number;
  private _name: string;
  static _hobby: string;
  static _eat: string = "Eat food";

  static printData(): void {
    console.log(this._eat);
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}

const classWithPrivateProperty = new ClassWithPrivateProperty();
classWithPrivateProperty.name = "Surprise !!!";
classWithPrivateProperty.id = 5;
console.log(classWithPrivateProperty.name);

ClassWithPrivateProperty._hobby = "read";
console.log(ClassWithPrivateProperty._hobby);
ClassWithPrivateProperty.printData();
