import React from "react";
import "./mover.css";

function Mover({data, styles, type}) {
  return (
    <>
    {type === "text" ? (<div className={styles}>
      {data.map((skill) => {
        return <h5>{skill}</h5>;
      })}
    </div>):(<div className={styles}>
        {data.map(icon=>{
          return(
            <img src={icon} alt={icon} className="skill-icon"/>
          )
        })}         
        </div>)}
    </>
    
  );
}

export default Mover;


