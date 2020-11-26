import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const NavBar = (props) => {
  const { pageList } = props;

  return (
    <nav className={s.navbar}>
      {pageList.map((page, idx) => (
        <NavLink
          to={`/${page}`}
          className={s.navbar__link}
          activeClassName={`${s.navbar__link} ${s.navbar__link_active}`}
          key={page + idx}
        >
          {page}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
