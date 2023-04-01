import React from "react";
import "./banner.css";

import banner from "../../img/main-banner.png";
import js from '../../img/js.png';
import node from '../../img/node.png';
import react from "../../img/react.png";
import mongo from '../../img/mongo.png';
import next from '../../img/next.png';
import mysql from '../../img/mysql.png';

import CustomButton from "../../utils/button/CustomButton";

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
        <div className="skillset">
          <h5>Frontend Development</h5>
          <h5>Backend Development</h5>
          <h5>Hybrid/serverless Applications</h5>
          <h5>Database Management</h5>
          <h5>Cross Platform Mobile Apps</h5>
        </div>
        <div className="skillset-icons">
          <img src={js} alt="Javascript" className="skill-icon"/>
          <img src={node} alt="Node.js" className="skill-icon"/>
          <img src={react} alt="React.js" className="skill-icon"/>
          <img src={next} alt="Next.js" className="skill-icon"/>
          <img src={mongo} alt="MongoDB" className="skill-icon"/>
          <img src={mysql} alt="MySQL" className="skill-icon"/>
        </div>
      <div className="button-wrapper">
        <CustomButton title="Resume" />
        <CustomButton title="Contact" />
      </div>
      </div>
    </div>
  );
}

export default Banner;
