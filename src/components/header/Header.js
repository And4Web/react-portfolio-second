import { Link } from "react-router-dom";
import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';

import "./header.css";
import siteLogoImage from "../../img/site-logo.png";

import Hamburger from "../../utils/hamburger";
import Dropdown from '../../components/dropdown/Dropdown'

function Header() {
  const dispatch = useDispatch();
  const dropdownIsActive = useSelector(store=>store.dropdownIsActive);

  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive(!active);
    dispatch({type: "TOGGLE-BUTTON", isActive: active})
  };

  return (
    <div>
      <nav className="navbar">
        <div className="site-logo-container">
          <Link to="/">
            <img src={siteLogoImage} alt="site logo" className="site-logo"/>
          </Link>
          <p className="site-logo-text">And4Web</p>
        </div>
        <ul className="menu-list">
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
        <div className="hamburder">
          <Hamburger clickHandler={handleOnClick} isActive={active} />
        </div>
        {dropdownIsActive && <Dropdown/>}
      </nav>
    </div>
  );
}

export default Header;
