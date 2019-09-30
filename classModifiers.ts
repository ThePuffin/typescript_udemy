//class Modifiers

class ClassWithPublicProperty {
  public id: number;
  readonly name: string;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 8;
//Impossible :
// publicAccess.name = "NAME.";

class OtherClassWithPublicProperty {
  private id: number;
}

let otherPublicAccess = new OtherClassWithPublicProperty();
//impossible because it's private :
// otherPublicAccess.id = 8;

console.log(publicAccess);
console.log(otherPublicAccess);

class classWithAutomaticProperties {
  constructor(public id: number, private name: string) {}
}

let myAutoClass = new classWithAutomaticProperties(1, "ClassName");
console.log(`My auto class id : ${myAutoClass.id}`);
//not accessible :
// console.log(`My auto class id : ${myAutoClass.name}`);
