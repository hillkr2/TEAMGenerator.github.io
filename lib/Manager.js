const Employee = require("./Employee");
class Manager extends Employee{
    constructor(id, name,email,Officenumber){
       super(id,name,email);
       this.Officenumber=Officenumber;
    }
    getofficenumber(){
        return this.Officenumber;
    };
    getRole(){
        return "Manager";
    };
}

module.exports=Manager;