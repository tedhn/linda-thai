import React, { useState } from "react";

import Home from "./Home";
import About from "./About";
import Interest from "./Interest";
import Contact from "./Contact";

import jump from "jump.js";

export default function App() {
  const [toggleLink1, settoggleLink1] = useState(false);
  const [toggleLink2, settoggleLink2] = useState(false);
  const [toggleLink3, settoggleLink3] = useState(false);
  const [togglenav, settogglenav] = useState(false);

  const jumpAbout = () => {
    jump(".about", {
      duration: 1000
    });
  };

  const jumpHome = () => {
    jump(".home", {
      duration: 1000
    });
  };
  const jumpInterest = () => {
    jump(".interest", {
      duration: 1000
    });
  };
  const jumpContact = () => {
    jump(".contact", {
      duration: 1000
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      settogglenav(false);
    } else {
      settogglenav(true);
    }
  });

  window.addEventListener("touchmove", e => {
    settogglenav(true);
  });

  window.addEventListener("touchend", () => {
    settogglenav(false);
  });

  return (
    <div className="container">
      <nav className={togglenav ? "navbar scrolling" : "navbar"}>
        <span
          className={togglenav ? "logo scrolling" : "logo"}
          onClick={jumpHome}
        >
          LT
        </span>
        <div className={togglenav ? "navlink scrolling" : "navlink"}>
          <span
            onClick={jumpContact}
            className={
              toggleLink3 ? "links on" : togglenav ? "links scrolling" : "links"
            }
            onMouseEnter={() => {
              settoggleLink3(true);
            }}
            onMouseLeave={() => {
              settoggleLink3(false);
            }}
          >
            Contact
          </span>
          <span
            onClick={jumpInterest}
            className={toggleLink2 ? "links on" : "links"}
            onMouseEnter={() => {
              settoggleLink2(true);
            }}
            onMouseLeave={() => {
              settoggleLink2(false);
            }}
          >
            Interest
          </span>
          <span
            onClick={jumpAbout}
            className={toggleLink1 ? "links on" : "links"}
            onMouseEnter={() => {
              settoggleLink1(true);
            }}
            onMouseLeave={() => {
              settoggleLink1(false);
            }}
          >
            About
          </span>
        </div>
      </nav>

      <Home />
      <About />
      <Interest />
      <Contact />
    </div>
  );
}
