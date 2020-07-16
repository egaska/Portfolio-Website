import React from "react";
import "./styles.css";

function NavBar() {
  return (
    <div className="container pure-g">
      <div className="pure-menu pure-menu-horizontal">
        <div className="pure-menu pure-u-3-4" id="brandname">
          <div id="Indent">Emily Gaska</div>
        </div>
        <ul className="pure-menu-list pure-u-1-4" id="navlinks">
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              About
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Portfolio
            </a>
          </li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
