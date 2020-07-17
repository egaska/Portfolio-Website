import React from "react";
import "./styles.css";
import CatLady from "../assets/catlady.JPG";
import SuperRec from "../assets/superrec.JPG";
import EmployeeDir from "../assets/employeedir.JPG";
import EmployeeTracker from "../assets/employeetracker.JPG";
import WorkDay from "../assets/workdayscheduler.JPG";
import WeatherDash from "../assets/weatherdash.JPG";
import BudgetTracker from "../assets/budgettracker.JPG";
import Notetaker from "../assets/notetaker.JPG";

function Portfolio() {
  return (
    <main title= "portfolio" id="portfolio">
      <div className="container pure-g aboutmeBox">
        <h1 className="pure-u-1" id="Title">
          Portfolio
          <hr />
        </h1>

        <figure class="imghvr-fade pure-u-1-4">
          <img
            src={CatLady}
            alt="Avatar"
            class="portfolioImage pure-u-1 fill"
          />
          <figcaption>
            <h3>Catlady</h3>
            Stuff Stuff stuff
          </figcaption>
          <a href="https://github.com/Jack-Aaron/catlady"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={SuperRec}
            alt="SuperRecipe"
            className="portfolioImage pure-u-1"
          />
          <figcaption>
            <h3>Super Recipe</h3>
            Stuff Stuff stuff
          </figcaption>
          <a href="https://github.com/egaska/Super-Recipe"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={EmployeeDir}
            alt="Employee Directory"
            className="portfolioImage pure-u-1"
          />
          <figcaption>
            <h3>React Employee Directory</h3>
            Stuff Stuff stuff
          </figcaption>
          <a href="https://github.com/egaska/React-Employee-Directory"></a>
        </figure>
        <figure class="imghvr-fade pure-u-1-4">
          <img
            src={EmployeeTracker}
            alt="Employee Tracker"
            class="portfolioImage pure-u-1"
          />
          
          <figcaption>
            <h3>Employee Tracker</h3>
            // Hover Content
          </figcaption>
          <a href="https://github.com/egaska/Employee-Summary-Generator"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={WorkDay}
            alt="Work Day Scheduler"
            className="portfolioImage pure-u-1"
          />
          <figcaption>
          <h3>Work Day Scheduler</h3>
          // Hover Content</figcaption>
          <a href="https://github.com/egaska/Work-Day-Schedule"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={WeatherDash}
            alt="Weather Dashboard"
            className="portfolioImage pure-u-1"
          />
          <figcaption><h3>Weather Dashboard</h3>
          // Hover Content</figcaption>
          <a href="https://github.com/egaska/Weather-Display"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={Notetaker}
            alt="Notetaker"
            className="portfolioImage pure-u-1"
          />
          <figcaption><h3>Note Taker</h3>
          // Hover Content</figcaption>
          <a href="https://github.com/egaska/Note-Taker"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={BudgetTracker}
            alt="Budget Tracker"
            className="portfolioImage pure-u-1"
          />
          <figcaption>
            <h3>Budget Tracker</h3>
            // Hover Content</figcaption>
          <a href="https://github.com/egaska/Budget-Tracker"></a>
        </figure>
      </div>
    </main>
  );
}

export default Portfolio;
