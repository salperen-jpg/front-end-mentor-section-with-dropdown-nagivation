import React from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-menu.svg';
import data from './data';
import '../styles/navbar.scss';
import { useGlobalContext } from '../context/context';
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right + tempBtn.left) / 2;
    const bottom = tempBtn.bottom + 1;
    openSubmenu(page, { center, bottom });
  };

  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      closeSubmenu();
    }
  };
  return (
    <nav onMouseOver={handleCloseSubmenu}>
      <div className='nav-center'>
        <img className='nav-logo' src={logo} alt='' />
        <button className='btn' onClick={openSidebar}>
          <img className='btn hamburger-btn' src={hamburger} alt='' />
        </button>
        <ul className='nav-links'>
          {data.map((link) => {
            return (
              <li
                className='nav-link'
                key={link.page}
                onMouseOver={displaySubmenu}
              >
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
