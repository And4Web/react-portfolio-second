import React from "react";
import "./banner.css";

import banner from "../../img/main-banner.png";

import Mover from "../../components/mover/Mover";
import CustomButton from "../../utils/button/CustomButton";

import { skillset, skillIcons } from "../../utils/Data/moverData";


function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={banner} alt="site banner" />
      </div>
      <div className="banner-intro">
        <h1 className="banner-title">
          <span>Full Stack</span> Development
        </h1>
        <div className="line"></div>
        <Mover data={skillset} styles="skillset" type="text"/>
        <Mover data={skillIcons} styles="skillset-icons" type="icons"/>
      {/* <div className="button-wrapper">
        <CustomButton title="Resume" />
        <CustomButton title="Contact" />
      </div> */}
      </div>
    </div>
  );
}

export default Banner;
