import React from "react";

import { ReactComponent as Travel } from "./Travel.svg";
import { ReactComponent as Food } from "./Food.svg";
import { ReactComponent as Cooking } from "./Cooking.svg";
import { ReactComponent as Music } from "./Music.svg";
import { ReactComponent as Pets } from "./Pets.svg";
import { ReactComponent as Gaming } from "./Gaming.svg";

export default function Interest() {
  return (
    <div className="interest">
      <div className="text">
        Some Things I <span>Enjoy</span>
      </div>
      <div className="seperator interest"></div>

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
