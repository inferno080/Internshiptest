
import React from 'react';
import "./Codes.css"
import RE from "./images/3RE.png"
import RE3 from "./images/3RE3.png"
import RE2 from "./images/3RE2.png"
import api from "./images/api.png"
import ReactDOM from 'react-dom';
import { Button, Jumbotron, Card, CardHeader,CardBody } from 'reactstrap';

function Footer() {
  return (
    <div>
        <br></br><br></br>
        <footer class="footer"  style={{background:"#FFCC33", marginBottom: "-10%", paddingBottom: "2%", paddingTop: "2%"}}>
        <div class="container">
        <span style={{color:"black"}}>
        <p>Copyright (C) 2020 MINDORKS NEXTGEN PRIVATE LIMITED</p>

        <p style={{fontSize: "0.85em"}}>Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at</p>

        <a href = "http://www.apache.org/licenses/LICENSE-2.0"></a>



        </span>
        </div>
        </footer>
    </div>
  )
}

export default Footer;
