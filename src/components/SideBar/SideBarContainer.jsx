import { connect } from 'react-redux';
import { updateSearchTextAction } from '../../redux/sidebarReducer';
import SideBar from './SideBar';

const mapStateToProps = (state) => {
  const { pageList, companions, searchText } = state.sidebar;

  return {
    navbarTitle: 'Shortcuts',
    friendSearchTitle: 'Friends',
    pageList: pageList,
    foundFriends: companions,
    searchText: searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchText: (text) => {
      dispatch(updateSearchTextAction(text));
    },
  };
};

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar);

export default SideBarContainer;
