import React from 'react';
import { NavLink } from 'react-router-dom';
import DialoguesList from '../Dialogues/DialoguesList/DialoguesList';
import Title from '../Dialogues/Title/Title';
import s from './Navbar.module.css';

const Navbar = (props) => {
  const { companions, pageList } = props;

  return (
    <aside className={s.navbar}>
      {/* <div className={s.navbar}> */}

      <Title text=" Shortcuts" />
      <nav className={s.navbar__nav}>
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

      <div className="navbar__friends">
        <Title text="Friends" />
        <input className="navbar__search" type="text" placeholder="Search..." />
        <div>
          <DialoguesList companions={companions} />
        </div>
      </div>
      {/* </div> */}
    </aside>
  );
};

export default Navbar;
