const Employee=require("../lib/Employee")

test("Instantiate employee instance",()=>{
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
    
});

test("Set id using constructor argument",()=>{
    const id = 1;
    const emp = new Employee(id);
    expect(emp.id).toBe(id);
});

test("set name using constructor argument",()=>{
    const name = "sample";
    const emp = new Employee(1,name);
    expect(emp.name).toBe(name);
});

test("Set email using constructor argument",()=>{
    const email = "sample@mail.com";
    const emp = new Employee(1,"sample",email);
    expect(emp.email).toBe(email);
});
// //Using method function
test("get id using getid()",()=>{
    const val = 1;
    const emp = new Employee(val);
    expect(emp.getid()).toBe(val);
});

test("get name using getname()",()=>{
    const name = "sample";
    const emp = new Employee(1,name);
    expect(emp.getname()).toBe(name);
});

test("Set email using email()",()=>{
    const mail = "sample@mail.com";
    const emp = new Employee(1,"sample",mail);
    expect(emp.getemail()).toBe(mail);
});
test("getRole() should return \"Employee\"", () => {
    const val = "Employee";
    const e = new Employee(1,"sample",  "sample@test.com");
    expect(e.getRole()).toBe(val);
  });