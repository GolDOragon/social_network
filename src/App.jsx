import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogues from './components/Dialogues/Dialogues';
import Header from './components/Header/Header';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/SideBar';

const App = (props) => {
  const { dialoguesPage, profilePage, sidebar } = props.state;

  return (
    <div className="app-wrapper">
      <Header />
      <SideBar {...sidebar} />
      <main className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile {...profilePage} dispatch={props.dispatch} />}
        />
        <Route
          path="/dialogues"
          render={() => (
            <Dialogues {...dialoguesPage} dispatch={props.dispatch} />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </main>
    </div>
  );
};

export default App;
