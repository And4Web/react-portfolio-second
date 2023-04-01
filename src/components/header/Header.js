import {Link} from 'react-router-dom';
import React from 'react'

import './header.css';
import siteLogoImage from '../../img/www.png'

import Hamburger from '../../utils/hamburger';

function Header() {
  return (
    <div>
      <nav className='navbar'>
        <img src={siteLogoImage} alt="site logo" className="site-logo" />
        <ul className="menu-list">
          <li className="list-item"><Link to="/services"><span>Services</span> </Link></li>
          <li className="list-item"><Link to="/skills"><span>Skills</span> </Link></li>
          <li className="list-item"><Link to="/projects"><span>Projects</span> </Link></li>
          <li className="list-item"><Link to="/contact"><span>Contact</span> </Link></li>
        </ul>
        <div className="hamburder">
          <Hamburger/>
        </div>
      </nav>
    </div>
  )
}

export default Header