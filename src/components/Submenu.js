import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';
import '../styles/submenu.scss';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      {links?.map((link, index) => {
        return (
          <p key={index} className='submenu-link'>
            <span style={{ color: `${link.color}` }}>{link.icon}</span>
            <span>{link.label}</span>
          </p>
        );
      })}
    </aside>
  );
};

export default Submenu;
