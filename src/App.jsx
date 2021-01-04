import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import MusicContainer from './components/Music/MusicContainer';
import NewsContainer from './components/News/NewsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SettingsContainer from './components/Settings/SettingsContainer';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SideBarContainer />
      <main className="app-wrapper-content">
        {/* <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogues" render={() => <DialoguesContainer />} /> */}
        <Route path="/login" component={Login} />
        <Route path="/profile/:userId?" component={ProfileContainer} />
        <Route path="/dialogues" component={DialoguesContainer} />
        <Route path="/news" component={NewsContainer} />
        <Route path="/music" component={MusicContainer} />
        <Route path="/find-users" component={UsersContainer} />
        <Route path="/settings" component={SettingsContainer} />
      </main>
    </div>
  );
};

export default App;
