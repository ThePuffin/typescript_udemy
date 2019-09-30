//Classes

class SimpleClass {
  id: number;
  print(): void {
    console.log(`SimpleClass has id: ${this.id}`);
  }
}

//THIS keyword

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 8;
mySimpleClass.print();
