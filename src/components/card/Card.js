import React from 'react'
import './card.css'

function Card({title, desc, mainSkill, icon}) {
  return (
    <div className="card">
        <h2 className="card-title">{title}</h2>
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