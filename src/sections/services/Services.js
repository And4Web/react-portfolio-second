import React from 'react'

import './services.css'
import Card from '../../components/card/Card'

function Services() {
  return (
    <section className='services' >
      <h1>Services</h1>
      <div className="card-container" style={{display: "flex"}}>
      <Card title="Frontend Development" desc="User friendly and mobile responsive modern frontend for your application, that is not only beautiful but super efficient, SEO friendly also." mainSkill="React.js" icon="react"/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </section>
  )
}

export default Services