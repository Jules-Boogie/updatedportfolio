import React from 'react'
import { Card,   Container, Button, CardDeck } from 'react-bootstrap'
import {Link} from "react-dom"

function projectCard(props) {

    return (

        <Container>
            
            {props.projects.map(project => {
                return(
                    <div>
                <h5  className="display-5 text-center text-white "> {project.Title} </h5>
            <Card >
            
                <Card.Img variant="top" src={project.Image} />
                <Card.Body>
                    <Card.Text>
                        {project.Desccription}
                    </Card.Text>
                   
                </Card.Body>
                <Card.Footer>
                    <Card.Link className="btn btn-info"href={project.Gitlink}> Github Repo</Card.Link>
                    <Card.Link className="btn btn-info" href={project.deployedLink}> Deployed Link</Card.Link>
                </Card.Footer>
            </Card>
            </div>
                )
})}

</Container>
    )
}

export default projectCard;