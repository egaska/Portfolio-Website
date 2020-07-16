import React, { useEffect } from "react";
import "./styles.css";

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <header className={navbarClasses.join(" ")}>
    <div className="container pure-g">
      <div className="pure-menu pure-menu-horizontal">
        <div
          className="pure-menu pure-u-lg-3-4 pure-u-md-1-2 pure-u-sm-1"
          id="brandname"
        >
          <div id="Indent">Emily Gaska</div>
        </div>
        <ul
          className="pure-menu-list pure-u-lg-1-4 pure-u-md-1-2 pure-u-sm-1"
          id="navlinks"
        >
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              About
            </a>
          </li>
          <li className="pure-menu-item">|</li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Portfolio
            </a>
          </li>
          <li className="pure-menu-item">|</li>
          <li className="pure-menu-item">
            <a href="#" className="pure-menu-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
    </header>
  );
}

export default NavBar;
