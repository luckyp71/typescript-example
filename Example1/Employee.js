"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    // Getter
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getPosition = function () {
        return this.position;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    // Setter
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.setPosition = function (position) {
        this.position = position;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    return Employee;
}());
exports.Employee = Employee;
