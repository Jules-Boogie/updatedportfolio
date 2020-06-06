import React, {useState} from 'react';
import { Image, Button, Col, Row, Container } from 'react-bootstrap'
import Resume from "../Components/ResumeModal/Resume"



function AboutPage() {

    const [modalshow, setModalshow] = useState(false)
    const handlemodalShow = () =>{
        setModalshow(true)
    }

    const handlemodalClose = () =>{
        setModalshow(false)
    }



    const imgstyle = {
        height:"400px",
        width:"500px"
    }

    const imgstyle1 = {
        height:"600px",
        width:"400px"
    }
    const text={
        fontSize:"24px",
        color:"black"
    }


    return (
        <div  className="container text-white">
            <section>
            <h2 className="text-center"> About Me &hearts; </h2>
           <div>
            <Container >
                <Row>
                    
                    <Col s={6} md={6} >
                        <Image  className="card" style={imgstyle} src={require("../Images/IMG_1878.JPG")} rounded />
                    </Col>
                    
                   
                    <Col s={6} md={6}>
                        <Image  className="card" style={imgstyle1} src={require("../Images/aboutpic.jpg")} rounded />
                        
                    </Col>
                    
                </Row>
            </Container>
            </div> 
            </section>
            <section>
            <h1 className="text-center"><strong>Juliet George</strong></h1>
            <h1 className="text-center">Full Stack Developer</h1>
            <>
            <Button variant="secondary" className="text-center bg-lg container" onClick={handlemodalShow}>  Resume </Button>
            <Resume 
            show={modalshow}
            onHide={handlemodalClose}
            />
            </>
            <h2 className="text-center">&hearts;</h2>

            <div className="row">
                <div className="col-sm-2"></div>
                <div style={text} className="col-lg-8 bg-secondary">
                    <p className="aboutParagraph"> I was born in the south of Nigeria.
                    I was raised by my grandparents who emphasized the importance of science and technology
                    in the lives. My grandfather would buy the newest computers and show me how to you them.
                    This was how my love for computers began. My first device was a Samsung SPH A680,
                    I cherished my phone but also used it to take pictures and play video games.
                    </p>

                    <p className="aboutParagraph ">
                         I have recently completed a 12-week Coding BootCamp with the University of Berkeley Extension, where I learned HTML, CSS, Javascript, Jquery, MySql, MongoDB, Nodejs, and ExpressJS. Please take a look at my Portfolio page to see the top projects I have worked on. 
                        I am looking forward to starting out my career as software engineer. I am using this time to study complex Javascript, Angular, Vue, and Algorithms. 
                        I have lived in San Francisco for two years and worked as a Test engineer and
                        IT Engineer. I love living and working in the city. My favorite thing to do is checking out
                        restaurants in North Beach with my friends.
                        </p>
                </div>

            </div>
            </section>
        </div>




    )




}

export default AboutPage;