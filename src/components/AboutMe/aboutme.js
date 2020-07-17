import React from "react";
import "./styles.css";
import Emily from "../assets/Emily.jpg";

function AboutMe({}) {
  return (
    <div className="container pure-g aboutmeBox aboutMe"  title= "aboutMe" id="aboutMe">
        <h1 className="pure-u-1" id="Title">
          About Me
          <hr />
        </h1>
        <div className="pure-u-lg-1-5 pure-u-md-1 pure-u-sm-1" />
        <img
          src={Emily}
          className="pure-u-lg-1-5 pure-u-md-1-3 pure-u-sm-1 pure-img imgAbout"
          alt="Avatar"
        />
        <div className="pure-u-lg-2-5 pure-u-md-1-3 pure-u-sm-1" id="maindiv">
          <p>
            <br/>
          Full-Stack web developer, experienced in
          Javascript, Java, C++, React.js and responsive web design. With each
          project, my aim is to create an intuitive user experience to create a
          clean and easy to use product. I am excited
          to utilize my skills as part of a quality driven team to continue
          learning how to improve user experiences on the web.
          </p>
      
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

  );
}

export default AboutMe;
