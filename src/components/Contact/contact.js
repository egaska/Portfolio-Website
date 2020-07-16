import React from "react";
import "./styles.css";

function Contact() {
  return (
    <main>
      <div className="container pure-g aboutmeBox">
        <h1 className="pure-u-1" id="Title">
          Contact
        </h1>
        <div className="pure-u-lg-1-5 pure-u-md-1 pure-u-sm-1" />
        <div className="pure-u-lg-3-5 pure-u-md-1-3 pure-u-sm-1" id="maindiv">
          Email: EmilyGaska@gmail.com
          <br />
          <br/>
          <a href="https://www.linkedin.com/in/emily-gaska-660611b4/">
            LinkedIn
          </a> | 
          <a href="https://github.com/egaska">
            GitHub
          </a>
        </div>
        <div className="pure-u-lg-1-5 pure-u-md-1 pure-u-sm-1" />
      </div>
    </main>
  );
}

export default Contact;
