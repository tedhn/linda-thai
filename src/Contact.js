import React from "react";

import { ReactComponent as Email } from "./svg/Email.svg";
import { ReactComponent as LinkedIn } from "./svg/Linkedin.svg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="text">Want to know more? Contact Me</div>
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
