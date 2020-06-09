const Intern = require("../lib/Intern");

test("set school using constructor", () => {
  const sch = "HilCoE";
  const s = new Intern(1, "sample","sample@mail.com", sch);
  expect(s.school).toBe(sch);
});

test("getRole() should return \"Intern\"", () => {
  const trn = "Intern";
  const i = new Intern(1, "sample",  "sample@mail.com", trn);
  expect(i.getRole()).toBe(trn);
});

test("get school using getSchool()", () => {
    const sch = "HilCoE";
    const s = new Intern(1,"sample",  "sample@mail.com", sch);
    expect(s.getschool()).toBe(sch);
});