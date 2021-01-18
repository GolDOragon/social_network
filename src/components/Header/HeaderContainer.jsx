import React from 'react';
import { connect } from 'react-redux';
import { logoutThunk } from '../../redux/authReducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    loginName: state.auth.login,
  };
};
const mapDispatchToProps = {
  logout: logoutThunk,
};

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
