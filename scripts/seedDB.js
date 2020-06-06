
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/portfolio")


const topSkills = [
    {link:"https://reactjs.org/docs/getting-started.html",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
skill:"React",
link:"http://es6-features.org/#Constants"},
{image: "https://miro.medium.com/max/1050/1*ktJUMJO60oHoluiEV6KBmA.png",
skill:"ES6",
link:"https://nodejs.org/docs/"},
{image: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png",
skill:"Nodejs",
link:"https://dev.mysql.com/doc/"},
{image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
skill:"MySQL",
link:"https://www.javascript.com/learn/strings"},
{image: "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png",
skill:"Javascript and Jquery",
link:"https://expressjs.com/en/guide/routing.html"},
{image: "https://miro.medium.com/proxy/1*XP-mZOrIqX7OsFInN2ngRQ.png",
skill:"ExpressJS",
link:"https://www.npmjs.com/package/bcrypt"},
{image: "https://en.bitcoinwiki.org/upload/en/images/thumb/3/32/Bcrypt.png/530px-Bcrypt.png",
skill:"Authentication",
link:"#"}
]


const Projects =[
    {
        Title:"Password Generator",
        Image:"https://github.com/Jules-Boogie/password-generator/blob/master/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://jules-boogie.github.io/password-generator/",
        Gitlink:"https://github.com/Jules-Boogie/password-generator",
        Type:"homework"
    },
    {
        Title:"Timed Code Quiz",
        Image:"https://github.com/Jules-Boogie/code-quiz/blob/master/assets/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://jules-boogie.github.io/code-quiz/main.html",
        Gitlink:"https://github.com/Jules-Boogie/code-quiz",
        Type:"homework"
    },
    {
        Title:"Work-Day Planner",
        Image:"https://github.com/Jules-Boogie/work-day-scheduler/blob/master/Assets/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://jules-boogie.github.io/work-day-scheduler/",
        Gitlink:"https://github.com/Jules-Boogie/work-day-scheduler",
        Type:"homework"
    },
    {
        Title:"Covid-19 Tracker",
        Image:"https://github.com/Jules-Boogie/covid19-tracker/blob/master/assets/images/covid-19-animated-app.gif?raw=true",
        Description:"",
        deployedLink:"https://jules-boogie.github.io/covid19-tracker/",
        Gitlink:"https://github.com/Jules-Boogie/covid19-tracker",
        Type:"project"
    },
    {
        Title:"Weather Dashboard",
        Image:"https://github.com/Jules-Boogie/weather-dashboard/blob/master/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://jules-boogie.github.io/weather-dashboard/",
        Gitlink:"https://github.com/Jules-Boogie/weather-dashboard",
        Type:"homework"
    },
    {
        Title:"ReadMe Generator",
        Image:"https://github.com/Jules-Boogie/readme-generator/blob/master/Develop/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"#",
        Gitlink:"https://github.com/Jules-Boogie/readme-generator",
        Type:"homework"
    },
    {
        Title:"Employee Summary",
        Image:"https://github.com/Jules-Boogie/employee-summary/blob/master/Assets/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"#",
        Gitlink:"https://github.com/Jules-Boogie/employee-summary",
        Type:"homework"
    },
    {
        Title:"Note Taker",
        Image:"https://github.com/Jules-Boogie/notetaker/blob/master/public/assets/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://jg-notetaker.herokuapp.com/",
        Gitlink:"https://github.com/Jules-Boogie/notetaker",
        Type:"homework"
    },
    {
        Title:"Employee Tracker - Nodejs",
        Image:"https://github.com/Jules-Boogie/Employee-Tracker/blob/master/Assets/Capture1.PNG?raw=true",
        Description:"",
        deployedLink:"#",
        Gitlink:"https://github.com/Jules-Boogie/Employee-Tracker",
        Type:"homework"
    },
    {
        Title:"ThriftStore",
        Image:"https://github.com/Jules-Boogie/thrift-store/blob/master/assets/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://thrift-store.herokuapp.com/",
        Gitlink:"https://github.com/Jules-Boogie/thrift-store",
        Type:"homework"
    },
    {
        Title:"JobTrek",
        Image:"https://github.com/Jules-Boogie/P2-JobTrek/blob/master/assets/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://jobtrek.herokuapp.com/",
        Gitlink:"https://github.com/Jules-Boogie/P2-JobTrek",
        Type:"project"
    },
    {
        Title:"Employee Directory",
        Image:"https://github.com/Jules-Boogie/employee-directory/blob/master/public/usersbyname.PNG?raw=true",
        Description:"",
        deployedLink:"https://jules-boogie.github.io/employee-directory/",
        Gitlink:"https://github.com/Jules-Boogie/employee-directory",
        Type:"homework"
    },
    {
        Title:"Savoire Faire-Clothing Store",
        Image:"https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/before%20login.PNG?raw=true",
        Description:"",
        deployedLink:"https://savoire-faire.herokuapp.com/",
        Gitlink:"https://github.com/Jules-Boogie/savoir-faire",
        Type:"project"
    },
    {
        Title:"Mern Book Search API",
        Image:"https://github.com/Jules-Boogie/Books-API/blob/master/assets/Capture.PNG?raw=true",
        Description:"",
        deployedLink:"https://googlesearchbooksz.herokuapp.com/",
        Gitlink:"https://github.com/Jules-Boogie/Books-API",
        Type:"homework"
    },

];

db.Skill.remove({})
  .then(() => db.Skill.collection.insertMany(topSkills))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
db.Project.remove({})
.then(() => db.Skill.collection.insertMany(Projects))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});






