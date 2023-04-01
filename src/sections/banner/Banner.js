import React from "react";
import "./banner.css";

import banner from "../../img/main-banner.png";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={banner} alt="site banner" />
      </div>
      <div className="banner-intro">
        <h1 className="banner-title">
          <span>Full Stack</span> Developer
        </h1>
        <div className="line"></div>
        <div className="skillset">
          <h5>Javascript</h5>
          <h5>Node.js</h5>
          <h5>React.js</h5>
          <h5>MongoDB</h5>
          <h5>MySQL</h5>
        </div>
      </div>
    </div>
  );
}

export default Banner;
