import React from "react";

import "./services.css";
import Card from "../../components/card/Card";

import frontend from "../../img/frontend.png";
import backend from '../../img/backend.png';
import database from '../../img/database.png';
import mobile from '../../img/mobile.png';

function Services() {
  return (
    <section className="services">
      <h1 className="section-title">Services</h1>
      <div className="line"></div>
      <div className="card-container" style={{ display: "flex" }}>
        <Card
          title="Frontend Development"
          desc="User friendly and mobile responsive modern frontend for your application, that is not only beautiful but super efficient, SEO friendly also."
          mainSkill="React.js"
          icon={frontend}
        />
        <Card  title="Backend Development"
          desc="User friendly and mobile responsive modern frontend for your application, that is not only beautiful but super efficient, SEO friendly also."
          mainSkill="Node.js" icon={backend}/>
        <Card  title="Database Management"
          desc="User friendly and mobile responsive modern frontend for your application, that is not only beautiful but super efficient, SEO friendly also."
          mainSkill="MongoDB" icon={database} />
        <Card  title="Cross Platform mobile Apps"
          desc="User friendly and mobile responsive modern frontend for your application, that is not only beautiful but super efficient, SEO friendly also."
          mainSkill="React Native" icon={mobile}/>
      </div>
    </section>
  );
}

export default Services;
