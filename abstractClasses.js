//abstract classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractEmployee = /** @class */ (function () {
    function AbstractEmployee() {
    }
    AbstractEmployee.prototype.printDetails = function () {
        console.log(this.getDetails());
    };
    return AbstractEmployee;
}());
var NewEmployee = /** @class */ (function (_super) {
    __extends(NewEmployee, _super);
    function NewEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewEmployee.prototype.getDetails = function () {
        return "id: " + this.id + ", name: " + this.name;
    };
    return NewEmployee;
}(AbstractEmployee));
var NewManager = /** @class */ (function (_super) {
    __extends(NewManager, _super);
    function NewManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewManager.prototype.getDetails = function () {
        return _super.prototype.getDetails.call(this) + ", employee count " + this.Employees.length;
    };
    return NewManager;
}(NewEmployee));
var employee = new NewEmployee();
employee.id = 1;
employee.name = "Employed name";
employee.printDetails();
var employeeTwo = new NewEmployee();
employeeTwo.id = 2;
employeeTwo.name = "Employed name two";
employeeTwo.printDetails();
var manager = new NewManager();
manager.id = 0.1;
manager.name = "managered";
manager.Employees = new Array();
manager.printDetails();
manager.Employees.push(employee, employeeTwo);
manager.printDetails();
