
import React from 'react';
import "./Header.css"
import RE from "./images/3RE.png"
import RE3 from "./images/3RE3.png"
import RE2 from "./images/3RE2.png"
import ReactDOM from 'react-dom';
import { Button, Jumbotron, Card, CardHeader,CardBody } from 'reactstrap';

function Main() {
  return (
    <div>
        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>About this Open Source Project</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{alignContent: "center", marginLeft: "20%", marginRight: "20%"}}>
                <p>This open-source project is for you(community). Our Team at <a href="https://afteracademy.com/" target="_blank" style={{style:"textDecoration: none", color:"#107896"}}>AfterAcademy</a> has taken this initiative to promote Backend Learning in the best possible way. We are determined to provide quality content for everyone. Let's do it together by learning from this project.</p>
            </div>
        </div>

        <br></br><br></br>
        
        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>We will learn and build the backend application for a blogging platform.</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
                <p>The main focus will be to create a maintainable and highly testable architecture.
                    Following are the features of this project:</p>
                <ul>
                    <li>This backend is written in Typescript: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. We have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.</li>
                    <li>Separation of concern principle is applied: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.</li>
                    <li>Feature encapsulation is adopted: The files or components that are related to a particular feature have been grouped unless those components are required in multiple features. This enhances the ability to share code across projects.</li>
                    <li>Centralised Error handling is done: We have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger.</li>
                    <li>Centralised Response handling is done: Similar to Error handling we have a response handling framework. This makes it very convenient to apply a common API response pattern.</li>
                    <li>Mongodb is used through Mongoose: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.</li>
                    <li>Async execution is adopted: We have used async/await for the promises and made sure to use the non-blocking version of all the functions with few exceptions.</li>
                    <li>Docker compose has been configured: We have created the Dockerfile to provide the easy deployability without any setup and configurations.</li>
                    <li>Unit test is favored: The tests have been written to test the functions and routes without the need of the database server. Integration tests has also been done but the unit test is favored.</li>
                    <li>A pure backend project: We have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.</li>
                </ul>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>We have also open source a complete blogging website working on this backend project : <a style={{color:"#107896"}} href="https://github.com/afteracademy/react-app-architecture" target = "_blank">Goto Repository</a></h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{alignContent: "center", marginLeft: "20%", marginRight: "20%"}}>
            In the above repository [React.js Isomorphic Web Application Architecture] we will learn and build a React web application for a blogging platform using this project as its API server.<a href="https://demo.react-app-architecture.afteracademy.com" rel="nofollow" target="_blank" style={{color:"#107896"}}>Visit demo website</a>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>3RE Architecture: Router, RouteHandler, ResponseHandler, ErrorHandler</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            <img style={{width: "100%", height: "auto"}} src = {RE}/>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>Project Outline: Blogging Platform</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            <img style={{width: "100%", height: "auto"}} src = {RE2}/>
            </div>
        </div>

        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>Request-Response Handling Schematic Diagram</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div>
            <div style={{marginLeft: "20%", marginRight: "20%"}}>
            <img style={{width: "100%", height: "auto"}} src = {RE3}/>
            </div>
        </div>


    </div>
  );
}

export default Main;
