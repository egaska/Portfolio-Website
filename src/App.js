import React from 'react';
import NavBar from "./components/navbar/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/portfolio";

function App() {

  return (
    <div className="App">
     <NavBar />
     <AboutMe />
     <Portfolio/>
    </div>
  );
}

export default App;
