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
    <main title="portfolio" id="portfolio">
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
            <h3>Catlady</h3>A React application created with the MERN stack,
            catlady helps pet owners manage and track the caloric intake of
            their pets' diets and other nutritional details.
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
            This is a recipe database powered by the Spoonacular API. You are
            able to search their database for recipes then the information
            provided is run through Edamam to calculate nutritional information
            based on the ingredients.
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
            <h3>React Employee Directory</h3>A cleanly styled, searchable
            employee directory created with React. Includes areas for an image,
            name, phone number, email and date of birth for each employee. You
            can search by any category listed. Users are also to filter by
            alphabetical order for convenience.
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
            <h3>Employee Tracker</h3>A simple Content Managment System to store
            data on employees using SQL. Allows you to store, edit employee
            information, update roles in the company and departments.
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
            <h3>Work Day Scheduler</h3>A simple calendar application that allows
            the user to save events for each hour of the day in their local
            storage. Divides past hours, current hour, and future hours by
            color.
          </figcaption>
          <a href="https://github.com/egaska/Work-Day-Schedule"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={WeatherDash}
            alt="Weather Dashboard"
            className="portfolioImage pure-u-1"
          />
          <figcaption>
            <h3>Weather Dashboard</h3>
            With this application you are able to search a city and view a 5-Day
            forcast for that location. Previously searched cities are able to be
            clicked and searched again. Uses the OpenWeatherMap API.
          </figcaption>
          <a href="https://github.com/egaska/Weather-Display"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={Notetaker}
            alt="Notetaker"
            className="portfolioImage pure-u-1"
          />
          <figcaption>
            <h3>Note Taker</h3>
            An application using Express to let the user take notes and store
            them from a JSON file.
          </figcaption>
          <a href="https://github.com/egaska/Note-Taker"></a>
        </figure>
        <figure className="imghvr-fade pure-u-1-4">
          <img
            src={BudgetTracker}
            alt="Budget Tracker"
            className="portfolioImage pure-u-1"
          />
          <figcaption>
            <h3>Budget Tracker</h3>A budget tracker that reacts as you add your
            transactions. You are able to add labeled transactions to keep track
            of your incoming and outgoing money. The input is displayed in a
            table and a graph that updates as you add to it. Entries are stored
            in the MongoDB/NoSQL database to be accessed again at any time.
          </figcaption>
          <a href="https://github.com/egaska/Budget-Tracker"></a>
        </figure>
      </div>
    </main>
  );
}

export default Portfolio;
