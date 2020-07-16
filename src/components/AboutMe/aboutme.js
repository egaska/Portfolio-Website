import React from "react";
import "./styles.css";
import div from "../assets/div.png";


function AboutMe({element}) {
  return (
   
      <div className="container pure-g aboutmeBox">
        <div ref={element}>
          <h1 className="pure-u-1" id="Title">
            About Me
          <hr/>
           </h1>
          <div className="pure-u-lg-1-5 pure-u-md-1 pure-u-sm-1" />
          <img
            src="https://via.placeholder.com/250"
            className="pure-u-lg-1-5 pure-u-md-1-3 pure-u-sm-1 pure-img imgAbout"
            alt="Avatar"
          />
          <div className="pure-u-lg-2-5 pure-u-md-1-3 pure-u-sm-1" id="maindiv">
            HelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            HelloHelloHelloHelloHelloHelloHelloHelloHelloHello
            <br />
            <p id="Contact">
              Email&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="mailto:emilygaska@gmail.com">EmilyGaska@gmail.com</a>
              <br />
              <a href="https://www.linkedin.com/in/emily-gaska-660611b4/">
                LinkedIn&nbsp;&nbsp;
              </a>
              |<a href="https://github.com/egaska">&nbsp;&nbsp;GitHub</a>
            </p>
          </div>
          <div className="pure-u-lg-1-5 pure-u-md-1 pure-u-sm-1" />
        </div>
    
      </div>
 
  
  );
}

export default AboutMe;
