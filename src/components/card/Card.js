import React from 'react'
import './card.css'

function Card({title, desc, mainSkill, icon}) {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
        <h2 className="card-title">{title}</h2>
        <hr/>
        <div className="card-desc">
            <p>{desc}</p>
         </div>   
         <div className="skills">
         <span>{mainSkill}</span>    
         </div>     
      </div>
  )
}

export default Card