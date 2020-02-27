import React from "react";

import { ReactComponent as Travel } from "./svg/Travel.svg";
import { ReactComponent as Food } from "./svg/Food.svg";
import { ReactComponent as Cooking } from "./svg/Cooking.svg";
import { ReactComponent as Music } from "./svg/Music.svg";
import { ReactComponent as Pets } from "./svg/Pets.svg";
import { ReactComponent as Gaming } from "./svg/Gaming.svg";

export default function Interest() {
  return (
    <div className="interest">
      <div className="text">Some Things I Enjoy</div>
      <div className="seperator"></div>

      <div className="hobbies">
        <div>
          <Travel />
          Traveling
        </div>
        <div>
          <Food />
          Food
        </div>
        <div>
          <Cooking />
          Cooking
        </div>
        <div>
          <Music />
          Music
        </div>
        <div>
          <Pets />
          Pets
        </div>
        <div>
          <Gaming />
          Gaming
        </div>
      </div>
    </div>
  );
}
