import React from 'react';
import FriendSearch from './FriendSearch/FriendSearch';
import NavBar from './NavBar/NavBar';
import s from './SideBar.module.css';

const SideBar = (props) => {
  const {
    navbarTitle,
    friendSearchTitle,
    pageList,
    foundFriends,
    searchText,
    updateSearchText,
  } = props;

  return (
    <aside className={s.sidebar}>
      <NavBar pageList={pageList} navbarTitle={navbarTitle} />
      <FriendSearch
        friendSearchTitle={friendSearchTitle}
        foundFriends={foundFriends}
        searchText={searchText}
        updateSearchText={updateSearchText}
      />
    </aside>
  );
};

export default SideBar;
