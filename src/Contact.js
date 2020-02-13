import React from "react";

import { ReactComponent as Email } from "./Email.svg";
import { ReactComponent as Phone } from "./Phone.svg";
import { ReactComponent as LinkedIn } from "./Linkedin.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="text">
        Want to know more? <span>Contact</span> Me
      </div>
      <div className="seperator contact"></div>
      <div className="info">
        <div>
          <Email />
          asdf@gmail.com
        </div>

        <div>
          <LinkedIn /> linda-thai
        </div>
      </div>
    </div>
  );
}
