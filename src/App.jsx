import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SideBarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <SideBarContainer />
      <main className="app-wrapper-content">
        {/* <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogues" render={() => <DialoguesContainer />} /> */}
        <Route path="/profile" component={Profile} />
        <Route path="/dialogues" component={DialoguesContainer} />
        <Route path="/news" component={News} />
        <Route path="/find-users" component={UsersContainer} />
        <Route path="/settings" component={Settings} />
      </main>
    </div>
  );
};

export default App;
