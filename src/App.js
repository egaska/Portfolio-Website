import React from 'react';
import NavBar from "./components/navbar/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/footer/footer";
import { Link, animateScroll as scroll } from "react-scroll";

function App() {

  return (
    <div className="App">
     <NavBar Link = {Link}/>
     <AboutMe />
     <Portfolio />
     <Footer/>
    </div>
  );
}

export default App;
