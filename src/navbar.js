import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Home } from "./svg/home.svg";
import { ReactComponent as Me } from "./svg/About.svg";
import { ReactComponent as Heart } from "./svg/Hobbies.svg";
import { ReactComponent as Phone } from "./svg/Interest.svg";

export default function Navbar() {
  let [expand, setExpand] = useState(false);

  const toggleNavbar = () => {
    setExpand(!expand);
  };

  if (expand) {
    return (
      <div className="navbar expand">
        <ul className="list">
          <li className="item logo">
            <span exact onClick={toggleNavbar}>
              <svg
                className={"image flipped"}
                width="100%"
                height="100%"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M96.3125 103.688L67.6875 75L96.3125 46.3125L87.5 37.5L50 75L87.5 112.5L96.3125 103.688Z"
                  fill="white"
                />
              </svg>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/"}
              >
                <Home />
                <div>Home</div>
              </NavLink>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/About"}
              >
                <Me /> <div>About Me</div>
              </NavLink>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/Interest"}
              >
                <Heart /> <div>Hobbies</div>
              </NavLink>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/Contact"}
              >
                <Phone /> <div>Contact</div>
              </NavLink>
            </span>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <ul className="list">
          <li className="item logo">
            <span exact onClick={toggleNavbar}>
              <svg
                className={"image"}
                width="100%"
                height="100%"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M96.3125 103.688L67.6875 75L96.3125 46.3125L87.5 37.5L50 75L87.5 112.5L96.3125 103.688Z"
                  fill="white"
                />
              </svg>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/"}
              >
                <Home />
                <div className="text"></div>
              </NavLink>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/About"}
              >
                <Me /> <div className="text"></div>
              </NavLink>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/Interest"}
              >
                <Heart />
                <div className="text"></div>
              </NavLink>
            </span>
          </li>
          <li className="item">
            <span>
              <NavLink
                className="content"
                exact
                to={process.env.PUBLIC_URL + "/Contact"}
              >
                <Phone /> <div className="text"></div>
              </NavLink>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
