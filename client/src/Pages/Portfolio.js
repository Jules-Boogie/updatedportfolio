import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import ProjectCard from "../Components/PortFolioCard/Card"
import API from "../Utils/Apiproject"



function PortfolioPage(){
const [projects , setProjects] = useState([])
const [homework, setHomework] = useState([])


const loadProjects =()=>{
    API.getProjects()
    .then(res => setProjects(res.data));
};

const loadHomework = () => {
    API.getHomework()
    .then(res => setHomework(res.data))
}

useEffect(() => {
    loadHomework()
    loadProjects()
},[])





    // const Projects =[
    //     {
    //         Title:"Password Generator",
    //         Image:"https://github.com/Jules-Boogie/password-generator/blob/master/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://jules-boogie.github.io/password-generator/",
    //         Gitlink:"https://github.com/Jules-Boogie/password-generator",
    //     },
    //     {
    //         Title:"Timed Code Quiz",
    //         Image:"https://github.com/Jules-Boogie/code-quiz/blob/master/assets/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://jules-boogie.github.io/code-quiz/main.html",
    //         Gitlink:"https://github.com/Jules-Boogie/code-quiz",
    //     },
    //     {
    //         Title:"Work-Day Planner",
    //         Image:"https://github.com/Jules-Boogie/work-day-scheduler/blob/master/Assets/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://jules-boogie.github.io/work-day-scheduler/",
    //         Gitlink:"https://github.com/Jules-Boogie/work-day-scheduler",
    //     },
    //     {
    //         Title:"Covid-19 Tracker",
    //         Image:"https://github.com/Jules-Boogie/covid19-tracker/blob/master/assets/images/covid-19-animated-app.gif?raw=true",
    //         Description:"",
    //         deployedLink:"https://jules-boogie.github.io/covid19-tracker/",
    //         Gitlink:"https://github.com/Jules-Boogie/covid19-tracker",
    //     },
    //     {
    //         Title:"Weather Dashboard",
    //         Image:"https://github.com/Jules-Boogie/weather-dashboard/blob/master/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://jules-boogie.github.io/weather-dashboard/",
    //         Gitlink:"https://github.com/Jules-Boogie/weather-dashboard",
    //     },
    //     {
    //         Title:"ReadMe Generator",
    //         Image:"https://github.com/Jules-Boogie/readme-generator/blob/master/Develop/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"#",
    //         Gitlink:"https://github.com/Jules-Boogie/readme-generator",
    //     },
    //     {
    //         Title:"Employee Summary",
    //         Image:"https://github.com/Jules-Boogie/employee-summary/blob/master/Assets/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"#",
    //         Gitlink:"https://github.com/Jules-Boogie/employee-summary",
    //     },
    //     {
    //         Title:"Note Taker",
    //         Image:"https://github.com/Jules-Boogie/notetaker/blob/master/public/assets/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://jg-notetaker.herokuapp.com/",
    //         Gitlink:"https://github.com/Jules-Boogie/notetaker",
    //     },
    //     {
    //         Title:"Employee Tracker - Nodejs",
    //         Image:"https://github.com/Jules-Boogie/Employee-Tracker/blob/master/Assets/Capture1.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"#",
    //         Gitlink:"https://github.com/Jules-Boogie/Employee-Tracker",
    //     },
    //     {
    //         Title:"ThriftStore",
    //         Image:"https://github.com/Jules-Boogie/thrift-store/blob/master/assets/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://thrift-store.herokuapp.com/",
    //         Gitlink:"https://github.com/Jules-Boogie/thrift-store",
    //     },
    //     {
    //         Title:"JobTrek",
    //         Image:"https://github.com/Jules-Boogie/P2-JobTrek/blob/master/assets/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://jobtrek.herokuapp.com/",
    //         Gitlink:"https://github.com/Jules-Boogie/P2-JobTrek",
    //     },
    //     {
    //         Title:"Employee Directory",
    //         Image:"https://github.com/Jules-Boogie/employee-directory/blob/master/public/usersbyname.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://jules-boogie.github.io/employee-directory/",
    //         Gitlink:"https://github.com/Jules-Boogie/employee-directory",
    //     },
    //     {
    //         Title:"Savoire Faire-Clothing Store",
    //         Image:"https://github.com/Jules-Boogie/savoir-faire/blob/master/client/public/app%20photos/before%20login.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://savoire-faire.herokuapp.com/",
    //         Gitlink:"https://github.com/Jules-Boogie/savoir-faire",
    //     },
    //     {
    //         Title:"Mern Book Search API",
    //         Image:"https://github.com/Jules-Boogie/Books-API/blob/master/assets/Capture.PNG?raw=true",
    //         Description:"",
    //         deployedLink:"https://googlesearchbooksz.herokuapp.com/",
    //         Gitlink:"https://github.com/Jules-Boogie/Books-API",
    //     },

    // ];
    


    return (

        <div>
            <h1 className="display-4 text-center"> My Work </h1>
            <Container>
                <h3 className="display-5 text-center"> Small Exercises </h3>
                <ProjectCard projects={homework}
        />
            </Container>

            <Container>
                <h3 className="display-5 text-center">  Project Builds </h3>
                <ProjectCard projects={projects}
        />
            </Container>





        </div>

     

    )
}


export default PortfolioPage;