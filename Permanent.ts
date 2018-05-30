import { Employee } from "./Employee";

class Permanent extends Employee {
    private bonus: number;

    // Getter
    public getBonus(){
        return this.bonus;
    }

    // Setter
    public setBonus(bonus: number){
        this.bonus = bonus;
    }
}

var permanent_employee = new Permanent();
permanent_employee.setName("Employee 1");
permanent_employee.setAddress("Street 1");
permanent_employee.setPosition("Position 1");
permanent_employee.setSalary(50000);
permanent_employee.setBonus(100000);

console.log(permanent_employee.getName()+", "+permanent_employee.getAddress(),", "+
            permanent_employee.getPosition()+", "+permanent_employee.getSalary()+", "+permanent_employee.getSalary()+", "+
            permanent_employee.getBonus())