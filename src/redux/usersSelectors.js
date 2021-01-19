
const getTitle = (state) => state.usersPage.pageTitle;
const getPageSize = (state) => state.usersPage.pageSize;
const getCurrentPage = (state) => state.usersPage.currentPage;
const getSearchedUser = (state) => state.usersPage.searchedUser;
const getUserList = (state) => state.usersPage.userList;
const getUsersTotalCount = (state) => state.usersPage.usersTotalCount;
const getIsFetching = (state) => state.usersPage.isFetching;
const getSubscriptions = (state) => state.usersPage.subscriptions;

export default {
  getTitle,
  getPageSize,
  getCurrentPage,
  getSearchedUser,
  getUserList,
  getUsersTotalCount,
  getIsFetching,
  getSubscriptions
};
