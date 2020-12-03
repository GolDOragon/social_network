import React from 'react';
import { updateSearchTextAction } from '../../redux/sidebarReducer';
import StoreContext from '../../redux/StoreContext';
import SideBar from './SideBar';

const SideBarContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const { pageList, companions, searchText } = store.getState().sidebar;

        const handleUpdateSearchText = (text) => {
          store.dispatch(updateSearchTextAction(text));
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
      }}
    </StoreContext.Consumer>
  );
};

export default SideBarContainer;
