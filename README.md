# Mern Stack Portfolio

### Deployed Link:https://updateportfolio.herokuapp.com/


## Summary 

The MERN stack portfolio is similar to the react portfolio here https://jules-boogie.github.io/react-portfolio/#/ except that in addition to a React framewrok, I have incorporated a server side by adding Mongodb, ExpressJS, and Nodejs. 
The application has a Home page, About Page, Portfolio and Contact Page. The homepage is made up an intro section and the skills section. The About page gives you an idea of who I am professionally and personally. it also has a button that opens up a modal that shows my resume. The portfolio page shows some of my recent work including projects and small exercises. The Contact page renders a form and links to my social media account. 



### Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [React](https://reactjs.org/)                |   A declarative, component based Javascript library for building interactive user interface                 |
| [MongoDB](https://www.mongodb.com/)                |   NoSql database that stores data in JSON-like documents.                |
| [Mongoose](https://mongoosejs.com/)                |  Mongoose lets us model the data for mongodb.                |

## Code Highlights
 The code below is a functional React component that is used to render the projects and exercises to the portfolio page. it is a stateless component as the data/state is managed in the portofolio page component. It passes a prop projects, to the parent. The props, projects is an array and that is why the map method is used to return the current element being processed in the array and passing it onto the card. So each element in the array will be dynamically rendered to the page on a card. 
```
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
```

### Installation Procedure
$ npx create-react-app <myappname>
$ npm axios
$ npm mongoose
$ npm express
  
## Future Development
 To further develop my application, I will save data sent from the contact me form to the database.

## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/updatedportfolio.git ``` with terminal in the directory of your choice. 



## Contact Information
*** Juliet George   
https://www.linkedin.com/in/juliet-george-864950b8/
https://github.com/Jules-Boogie 

  

