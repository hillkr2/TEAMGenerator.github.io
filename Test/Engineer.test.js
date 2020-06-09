const Engineer = require("../lib/Engineer")
//const emp =require("../lib/Employee");
test("Instantiate engineer instance",()=>{
  const eng = new Engineer();
  expect(typeof(eng)).toBe("object");
  
});



test("set github using constructor argument",()=>{
    const github = "githubprofile";
    const eng = new Engineer(1,"sample","sample@mail.com",github);
    expect(eng.github).toBe(github);
});

  test("get github using github()",()=>{
    const gn = "githubprofile";
    const eng = new Engineer(1,"sample","sample@mail.com",gn);
    expect(eng.getgithub()).toBe(gn);
});

test("getRole() should return \"Engineer\"", () => {
  const val = "Engineer";
  const e = new Engineer(1,"sample", "sample@test.com","githubname");
  expect(e.getRole()).toBe(val);
});