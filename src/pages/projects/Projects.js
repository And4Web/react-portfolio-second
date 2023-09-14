import React, {useState} from 'react'
import projectsData from '../../data/projects';

function Projects() {
   const [projects, setProjects] = useState(projectsData);
  // console.log({projects});
  return (
    <div>
     
      <h1 style={{textAlign: "center", textDecoration: "underline"}}>Projects</h1>
      <article>
        <h2>{projects[0].category}</h2>
        {projects[0].projects.map((project, index)=>{
          const {id, title, description, techUsed} = project;
          return(
            <div>
              <h3>{title}</h3>
              {techUsed.map(tech=>{
                return(
                  <div style={{display: "flex"}}>
                    <p>{tech}</p>
                  </div>
                )
              })}
              <h3>Description:</h3>
              {description.map(des=>{
                return (
                  <div>
                    <p>{des}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </article>
      {JSON.stringify(projects)}
    </div>
    
    )
  }
 

export default Projects