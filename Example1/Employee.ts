export class Employee{
    name: string;
    position: string;
    address: string;
    salary: number;

    // Getter
    public getName(){
        return this.name;
    }

    public getPosition(){
        return this.position;
    }

    public getAddress(){
        return this.address;
    }

    public getSalary(){
        return this.salary;
    }

    // Setter
    setName(name: string):void {
        this.name = name;
    }

    public setPosition(position: string):void { 
        this.position = position;
    }
    
    public setAddress(address: string){
        this.address = address;
    }

    public setSalary(salary: number){
        this.salary = salary;
    }
}