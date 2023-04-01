import React from 'react'

import './hamburger.css'

function Hamburger({isActive, clickHandler}) { 

  return (
    <div className='icon' onClick={clickHandler}>
      {
        !isActive?(<i className="fa-sharp fa-solid fa-bars fa-2xl"></i>):(<i className="fa-solid fa-xmark fa-2xl"></i>)
      }        
    </div>
  )
}

export default Hamburger