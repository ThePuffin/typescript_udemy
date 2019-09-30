//abstract classes

abstract class AbstractEmployee {
  public id: number;
  public name: string;
  abstract getDetails(): string;
  public printDetails() {
    console.log(this.getDetails());
  }
}

class NewEmployee extends AbstractEmployee {
  getDetails(): string {
    return `id: ${this.id}, name: ${this.name}`;
  }
}

class NewManager extends NewEmployee {
  public Employees: NewEmployee[];
  getDetails(): string {
    return `${super.getDetails()}, employee count ${this.Employees.length}`;
  }
}

let employee = new NewEmployee();
employee.id = 1;
employee.name = "Employed name";
employee.printDetails();

let employeeTwo = new NewEmployee();
employeeTwo.id = 2;
employeeTwo.name = "Employed name two";
employeeTwo.printDetails();

let manager = new NewManager();
manager.id = 0.1;
manager.name = "managered";
manager.Employees = new Array();
manager.printDetails();
manager.Employees.push(employee, employeeTwo);
manager.printDetails();
