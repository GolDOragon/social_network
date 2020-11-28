import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { addPost, sendMessage, updateMessage, updatePostText } from './redux/state.js';
import * as serviceWorker from './serviceWorker';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updatePostText={updatePostText}
        updateMessage={updateMessage}
        sendMessage={sendMessage}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
