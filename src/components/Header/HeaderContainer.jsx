import React from 'react';
import { connect } from 'react-redux';
import {
  authenticationThunk
} from '../../redux/authReducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = {
  authentication: authenticationThunk,
};

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authentication();
  }
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
