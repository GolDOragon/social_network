import React from 'react';
import Title from '../atoms/Title/Title';
import FriendSearch from './FriendSearch/FriendSearch';
import NavBar from './NavBar/NavBar';
import s from './SideBar.module.css';

const SideBar = (props) => {
  const { companions, pageList } = props;

  return (
    <aside className={s.sidebar}>
      <Title text="Shortcuts" />
      <NavBar pageList={pageList} />
      <FriendSearch companions={companions} />
    </aside>
  );
};

export default SideBar;
