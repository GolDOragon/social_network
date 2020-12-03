import React from 'react';
import { updateSearchTextAction } from '../../redux/sidebarReducer';
import SideBar from './SideBar';

const SideBarContainer = (props) => {
  const { pageList, companions, searchText } = props.store.getState().sidebar;

  const handleUpdateSearchText = (text) => {
    props.store.dispatch(updateSearchTextAction(text));
  };

  return (
    <SideBar
      navbarTitle="Shortcuts"
      friendSearchTitle="Friends"
      pageList={pageList}
      foundFriends={companions}
      searchText={searchText}
      updateSearchText={handleUpdateSearchText}
    />
  );
};

export default SideBarContainer;
