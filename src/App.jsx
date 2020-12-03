import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SideBarContainer from './components/SideBar/SideBarContainer';

const App = (props) => {

  return (
    <div className="app-wrapper">
      <Header />
      <SideBarContainer store={props.store} />
      <main className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile store={props.store} />} />
        <Route
          path="/dialogues"
          render={() => <DialoguesContainer store={props.store} />}
        />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </main>
    </div>
  );
};

export default App;
