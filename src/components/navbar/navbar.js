import React, { useEffect } from "react";
import "./styles.css";

function NavBar({Link}) {
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
              <Link
                className="pure-menu-link"
                to="aboutMe"
                smooth={true}
                offset={-70}
                duration={700}
              >
                About Me
              </Link>
            </li>
            <li className="pure-menu-item">|</li>
            <li className="pure-menu-item">
              <Link
                className="pure-menu-link"
                to="portfolio"
                smooth={true}
                offset={-150}
                duration={700}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
