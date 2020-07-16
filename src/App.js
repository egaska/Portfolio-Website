import React from 'react';
import NavBar from "./components/navbar/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <AboutMe/>
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
