import React from 'react';
import { NavLink } from 'react-router-dom';
import Title from '../../atoms/Title/Title';
import s from './NavBar.module.css';

const NavBar = (props) => {
  const { pageList, navbarTitle } = props;

  return (
    <div className={s.navbarContainer}>
      <Title text={navbarTitle} />
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
    </div>
  );
};

export default NavBar;
