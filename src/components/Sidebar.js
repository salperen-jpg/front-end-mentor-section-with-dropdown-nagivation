import React from 'react';
import { useGlobalContext } from '../context/context';
import '../styles/sidebar.scss';
import { AiOutlineClose } from 'react-icons/ai';
import data from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <article className={`${isSidebarOpen ? 'sidebar open' : 'sidebar'}`}>
      <div className='sidebar-wrapper'>
        <div className='btn-container'>
          <button className='btn close-btn' onClick={closeSidebar}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className='sidebar-links'>
          {data.map((link) => {
            return (
              <li key={link.page} className='sidebar-link'>
                {link.page}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};

export default Sidebar;
