"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Permanent = /** @class */ (function (_super) {
    __extends(Permanent, _super);
    function Permanent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Getter
    Permanent.prototype.getBonus = function () {
        return this.bonus;
    };
    // Setter
    Permanent.prototype.setBonus = function (bonus) {
        this.bonus = bonus;
    };
    return Permanent;
}(Employee_1.Employee));
var permanent_employee = new Permanent();
permanent_employee.setName("Employee 1");
permanent_employee.setAddress("Street 1");
permanent_employee.setPosition("Position 1");
permanent_employee.setSalary(50000);
permanent_employee.setBonus(100000);
console.log(permanent_employee.getName() + ", " + permanent_employee.getAddress(), ", " +
    permanent_employee.getPosition() + ", " + permanent_employee.getSalary() + ", " + permanent_employee.getSalary() + ", " +
    permanent_employee.getBonus());
