import React from "react";

import image2 from "./svg/image2.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="text">
        <div className="line1">A Little More About Me</div>

        <div className="seperator"></div>
        <div className="line2">
          I'm originally from San Jose, California but have spent the most of my
          life here in Seattle. This is my last year at the University of
          Washington so I hope to make the most out of it. When I'm not being
          studious at PACCAR hall, you're most likely to find me eating my way
          through sEATtle and many other cities within Washington!
        </div>
      </div>

      <div className="images">
        <img
          src={image2}
          alt="404 image not found"
          className="images content"
        ></img>
      </div>
    </div>
  );
}
