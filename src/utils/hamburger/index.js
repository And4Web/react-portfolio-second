import React, {useState} from 'react'

import './hamburger.css'

function Hamburger() {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {    
      setActive(!active)    
  }

  return (
    <div className='icon' onClick={handleOnClick}>
      {
        active?(<i className="fa-sharp fa-solid fa-bars fa-2xl"></i>):(<i className="fa-solid fa-xmark-large fa-2xl"></i>)
      }
      
    </div>
  )
}

export default Hamburger