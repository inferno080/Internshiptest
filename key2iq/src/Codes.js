
import React from 'react';
import "./Codes.css"
import RE from "./images/3RE.png"
import RE3 from "./images/3RE3.png"
import RE2 from "./images/3RE2.png"
import api from "./images/api.png"
import ReactDOM from 'react-dom';
import { Button, Jumbotron, Card, CardHeader,CardBody } from 'reactstrap';

function Codes() {
  return (
    <div>
        <br></br><br></br>

        <div className ="Row">
            <div className="col-12" style={{marginLeft:"25%", width:"50%",}}>
            <h3>API Examples</h3>
            </div>
        </div>
        <div className="Row" style={{justifyContent:'center'}}>
            <div className="col-12"  style={{justifyContent:'center', display:"flex"}} >
            <div style={{background:"#FFCC33", width:"250px", height:"5px"}}>
            </div>
        </div>
        </div>
        <br></br>
        <div className = "Row">
            <div className = "col col-6">
                <pre><code style={{height:"fit-content", width:"fit-content"}}>
                <div style={{display:"flex"}}>
                POST /v1/signup/basic HTTP/1.1
                Host: localhost:3000
                x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj
                Content-Type: application/json
                </div>
                </code></pre>
            </div>
        
        </div>
    </div>
  );
}

export default Codes;
