import React from 'react';
import { connect } from 'react-redux';
import { authentication } from '../../api/api';
import {
  setUserDataAction,
  toggleFetchingAction
} from '../../redux/authReducer';
import Header from './Header';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
const mapDispatchToProps = {
  setAuthUserData: setUserDataAction,
  toggleFetching: toggleFetchingAction,
};

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    authentication().then((data) => {
      if (data.resultCode === 0) {
        this.props.setAuthUserData({ ...data.data });
        this.props.toggleFetching(false);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
