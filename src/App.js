import React, { useState } from "react";

import Home from "./Home";
import About from "./About";
import Interest from "./Interest";
import Contact from "./Contact";

import { ReactComponent as Loading } from "./svg/loading.svg";
import { ReactComponent as Arrow } from "./svg/arrow.svg";

import { NavLink, Route, Switch, __RouterContext } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [remove, setRemove] = useState("preloader loaded");

  window.addEventListener("load", () => {
    setLoading(false);

    setTimeout(() => {
      setRemove("preloader loaded removed");
    }, 4000);
  });

  //finish nav for mobile //

  return (
    <div className="container">
      <div className={loading ? "preloader" : remove}>
        <Loading />
      </div>

      <nav className="navbar">
        <span>
          <NavLink className={"logo"} exact to={process.env.PUBLIC_URL + "/"}>
            Lindah Thai
          </NavLink>
        </span>
        <div className={"navlink"}>
          <span>
            <NavLink
              className="links"
              activeClassName="links active"
              exact
              to={process.env.PUBLIC_URL + "/Contact"}
            >
              Contact
            </NavLink>
          </span>
          <span>
            <NavLink
              className="links"
              activeClassName="links active"
              exact
              to={process.env.PUBLIC_URL + "/Interest"}
            >
              Interest
            </NavLink>
          </span>
          <span>
            <NavLink
              className="links"
              activeClassName="links active"
              exact
              to={process.env.PUBLIC_URL + "/About"}
            >
              About
            </NavLink>
          </span>
        </div>
      </nav>

      <div className="mobile">
        <Arrow />
      </div>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/About"}>
          <About />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Interest"}>
          <Interest />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Contact"}>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
