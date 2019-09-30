//protected class members

class ClassUsingProtected {
  protected id: number;

  public getId() {
    return this.id;
  }
}

class DerivedFromProtected extends ClassUsingProtected {
  constructor() {
    super();
    this.id = 0;
  }
}

let derivedFromProtected = new DerivedFromProtected();
derivedFromProtected.id = 1;
console.log(`id returns : ${derivedFromProtected.id}`);
derivedFromProtected.id = 5;
console.log(`id returns : ${derivedFromProtected.id}`);
