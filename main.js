const inquirer = require("inquirer");
const fs = require("fs");
const style = require("./generated_html/css")

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

let teamarr = [];
let countId = 0;

function Startaccept() {
    inquirer.prompt([{
        message: "Please entrer a Team name:",
        name: "teammember"
    }
    ]).then(function (data) {
        const teamname = data.teammember;
        teamarr.push(teamname);
        countId = countId + 1;
        addManager();
        //addTeamMember();
    });

}

function addTeamMember() {

    countId = countId + 1;

    inquirer.prompt([
        {   
            type: "list",
            message: "Would you like add new team member?",
            choices: ["Yes, add new Engineer", "Yes, add new Intern", "complete"],
            name: "addmemberdata"
        }
    ]).then(function (data) {

        switch (data.addmemberdata) {
            
            case "Yes, add new Engineer":
                {
                    addEngineer();
                }
                break;
            case "Yes, add new Intern":
                {
                    addIntern();
                }
                break;
            case "complete":
                {
                    //console.log("R");
                    teamreport();
                }
                break;
        }
    });
}

function addManager() {
    inquirer.prompt([
        {
            message: "Please enter team manager name",
            name: "name"
        },
        {
            message: "Please enter email address",
            name: "email"
        },
        {
            message: "Please enter office number",
            name: "officenumber"
        }
    ]).then(function (data) {
        const name = data.name;
        const id = countId;
        const email = data.email;
        const officenumber = data.officenumber;
        const teamem = new Manager(id, name, email, officenumber);    

        teamarr.push(teamem);
        addTeamMember();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "Please enter engineer's name",
            name: "name"
        },
        {
            message: "Please enter engineer's email",
            name: "email"
        },
        {
            message: "Please enter engineer's github profile",
            name: "github"
        }

    ]).then(function (data) {
        const name = data.name;
        const id = countId;
        const email = data.email;
        const github = data.github;
        const engiteam = new Engineer(id, name, email, github);
        // console.log("GitHub "+engiteam.getgithub());
        teamarr.push(engiteam);

        addTeamMember();
    });
}

function addIntern() {
    inquirer.prompt([

        {
            message: "Please enter intern's name",
            name: "name"
        },
        {
            message: "Please enter intern's email",
            name: "email"
        },
        {
            message: "Please enter the name of school",
            name: "school"
        }

    ]).then(function (data) {
        const name = data.name;
        const email = data.email;
        const id = countId;
        const school = data.school;
        const internteam = new Intern(id, name, email, school)
        teamarr.push(internteam);
        addTeamMember();
    });
}
function teamreport() {
    // Console.log("You have done!");
    // Console.log("Team Report");
    const htmlarr = [];
    const htmlbegin = `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <style>
    ${style}
    </style>
</head>
<body>
    <div class = "banner-bar">
        <h1>${teamarr[0]} </h1>
    </div>
    <div class="card-container">
    `
    htmlarr.push(htmlbegin);
    for (let i = 1; i < teamarr.length; i++) {
        let obj = `
        <div class = "member-card">
            <div class ="card-top">
                <h2>${teamarr[i].getname()}</h2>
                <h2>${teamarr[i].getRole()}</h2>
            </div>
           
        <div class ="card-bottom">
            <p> Employee ID:${teamarr[i].getid()} </p>
            <p> Email: <a href="mailto:${teamarr[i].getemail()}">${teamarr[i].getemail()}</a> </p>
            `
        if (teamarr[i].getRole() == "Manager") {
            obj += ` <p> Office No: ${teamarr[i].getofficenumber()}</p>`
        }
        else if (teamarr[i].getRole() == "Engineer") {
            obj += `<p> GitHub: <a href="https://github.com/${teamarr[i].getgithub()}">${teamarr[i].getgithub()}</a></p>`
        }
       else if (teamarr[i].getRole() == "Intern") {
            obj += `<p> School: ${teamarr[i].getschool()} </p>`
        }

        obj += `
            </div>
            </div>
            `
        htmlarr.push(obj);
    }
    const endhtml = `  
            </div>
            </body>
            </html>
            `
    htmlarr.push(endhtml);

    fs.writeFile(`./generated_html/${teamarr[0]}.html`, htmlarr.join(""), function (err) {

    })

}


Startaccept()