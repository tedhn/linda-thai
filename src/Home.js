import React from "react";

import image1 from "./svg/image1.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="text">
        <div className="line1">Hey there,</div>
        <div className="line2">I'm Linda Thai</div>
        <div className="line3">welcome to my portfolio</div>
      </div>

      <div className="images">
        <img src={image1} className="images content"></img>
      </div>
    </div>
  );
}
