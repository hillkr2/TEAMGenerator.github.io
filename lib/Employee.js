class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getid() {
        return this.id;
    };
    getname() {
        return this.name;
    };
    getemail() {
        return this.email;
    };
    getRole() {
        return "Employee";
    };

}

module.exports = Employee;