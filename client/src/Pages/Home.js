import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import API from "../Utils/Apiskills"


function HomePage(){

    const [topskills, setSkills] = useState([])

    const loadSkills = () => {
        API.getSkills()
        .then(res => setSkills(res.data))
    }

    useEffect(() =>{
        loadSkills()
    })



    const style = {
        margin:" 100px auto 80 px auto ",
        paddingTop: "150px",
        paddingBottom: "200px",
        maxWidth:"80%",
        
    }

    const text ={
        fontSize:"42px",
        textAlign:"center",
        fontWeight:"300",
        // margin:"0 auto ",
        // display:"block"
    }

    const skills ={
        maxWidth:"960px",
        margin:"30px auto 100px auto",
        display:"flex",
        flexWrap:"wrap",

    }

    const items={
        overflow:"hidden",
        width:"300px",
        height:"200px",
        textAlign:"center",
        margin:"10px",
        // backgroundColor:"pink",
        // boxShadow:"0 10px 20pc rgba(167, 185, 218, .3)"


    }

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

    
  
    return (
        <div>
            <section>
        <div style={style} className="container bg-secondary" >
            <h1 className="text-center" style={text}> Juliet is a full stack web developer with in demand skills such as React, Mongodb, and Nodejs. 
                
                 </h1>
                 <h4 style={text}> I am based in San Francisco, CA</h4>
                </div>
                </section>

                <section className="text-center display-3 jumbotron container">
                 <h3 > Top Skills </h3>
                 <div style={skills}>
                     {topskills.map(skill => {
                         return (
                            <Card style={{ width: '18rem' }}>
  <Card.Img style={{height:"200px"}}variant="top" src={skill.image} />
  <Card.Body>
    <Card.Title>{skill.skill}</Card.Title>
    <Button variant="secondary" href={skill.link}>Docs</Button>
  </Card.Body>
</Card>

                            
                            
                          
                     )
                         

                         
                     })}
                

                </div>  
                </section>
                     
                   

        </div>




    )
}

export default HomePage;