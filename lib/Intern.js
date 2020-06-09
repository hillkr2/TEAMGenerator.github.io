//const Employee=require("./Employee");
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(id,name,email,school){
       super(id,name,email);
        this.school=school;
    }
    getschool(){
        return this.school;
    };
    getRole(){
        return "Intern";
    } ;   

}
module.exports=Intern;