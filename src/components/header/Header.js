import {Link} from 'react-router-dom';
import React from 'react'

function Header() {
  return (
    <div>
      <nav className='navbar'>
        <img src="" alt="site logo" className="site-logo" />
        <ul className="menu-list">
          <li className="list-item"><Link to="/services">Services</Link></li>
          <li className="list-item"><Link to="/skills">Skills</Link></li>
          <li className="list-item"><Link to="/projects">Projects</Link></li>
          <li className="list-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header