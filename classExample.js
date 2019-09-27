class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class student extends person {
  constructor(name, age, country) {
    super(name, age);
    this.country = country;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }
  getCountry() {
    return this.country;
  }
  setCountry(country) {
    this.country = country;
  }
}

let john = new student("John", 30, "france");
console.log(john);

console.log(john.getAge());
john.setAge(99);
console.log(john.getAge());
console.log(john);
