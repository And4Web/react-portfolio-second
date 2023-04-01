import React from 'react'
import './dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  return (
    <div className='dropdown'>
      <ul className='dropdown-list'>
      <li className="list-item">
            <Link to="/services">
              <span>Services</span>{" "}
            </Link>
          </li>
          <li className="list-item">
            <Link to="/skills">
              <span>Skills</span>{" "}
            </Link>
          </li>
          <li className="list-item">
            <Link to="/projects">
              <span>Projects</span>{" "}
            </Link>
          </li>
          <li className="list-item">
            <Link to="/contact">
              <span>Contact</span>{" "}
            </Link>
          </li>
      </ul>
    </div>
  )
}

export default Dropdown