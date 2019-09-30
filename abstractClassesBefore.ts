//abstract Classes

class Employee {
  public id: number;
  public name: string;

  printDetails() {
    console.log(Number(`id: ${this.id}, name ${this.name}`));
  }
}

class Manager {
  public id: number;
  public name: string;
  public Employee: Employee[];
  printDetails() {
    console.log(
      `id: ${this.id}, name : ${this.name}, employeeCount: ${this.Employee.length}`
    );
  }
}
