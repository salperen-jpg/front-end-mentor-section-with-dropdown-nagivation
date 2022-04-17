import React from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-menu.svg';
import data from './data';
import '../styles/navbar.scss';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <img className='nav-logo' src={logo} alt='' />
        <button className='btn'>
          <img className='btn hamburger-btn' src={hamburger} alt='' />
        </button>
        <ul className='nav-links'>
          {data.map((link) => {
            return (
              <li className='nav-link' key={link.page}>
                {link.page}
              </li>
            );
          })}
        </ul>
        <div className='nav-right-buttons'>
          <button className='btn right-btn'>login</button>
          <button className='btn right-btn register-btn'>register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
