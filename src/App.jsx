import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/atoms/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import withSuspense from './components/HOC/withSuspense';
import LoginContainer from './components/Login/LoginContainer';
import MusicContainer from './components/Music/MusicContainer';
import NewsContainer from './components/News/NewsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeAppThunk } from './redux/appReducer';

const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer'),
);
const DialoguesContainer = React.lazy(() =>
  import('./components/Dialogues/DialoguesContainer'),
);
const SettingsContainer = React.lazy(() =>
  import('./components/Settings/SettingsContainer'),
);

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.initialized) return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SideBarContainer />
        <main className="app-wrapper-content">
          {/* <Route path="/profile" render={() => <Profile />} /> */}
          <Route path="/login" component={LoginContainer} />
          <Route path="/news" component={NewsContainer} />
          <Route path="/music" component={MusicContainer} />
          <Route path="/find-users" component={UsersContainer} />
          <Route path="/settings" component={withSuspense(SettingsContainer)} />
          <Route
            path="/profile/:userId?"
            component={withSuspense(ProfileContainer)}
          />
          <Route
            path="/dialogues"
            component={withSuspense(DialoguesContainer)}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize: initializeAppThunk }),
)(App);
