import React from "react";

import image1 from "./image1.png";

export default function Home() {
  return (
    <div className="home">
      <div className="text">
        <div className="line1">Hey there,</div>
        <div className="line2">
          I'm <span>Linda Thai</span>
        </div>
        <div className="line3">welcome to my portfolio</div>
      </div>

      <div className="images">
        <img src={image1} className="images content"></img>
      </div>
    </div>
  );
}
