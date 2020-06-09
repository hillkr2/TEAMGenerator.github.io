const Manager = require("../lib/Manager");


test("set officenumber using constructor argument",()=>{
    const off = 111;
    const mng = new Manager(1,"sample","sample@mail.com",off);
    expect(mng.Officenumber).toBe(off);
});

test("getRole() should return \"Manager\"", () => {
    const val = "Manager";
    const e = new Manager(1,"sample",  "sample@test.com",111);
    expect(e.getRole()).toBe(val);
  });

  test("get officenumber using get officenumber()",()=>{
    const off = 111;
    const mng = new Manager(1,"sample","sample@mail.com",off);
    expect(mng.getofficenumber()).toBe(off);
});