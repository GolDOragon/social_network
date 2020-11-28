import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import store from './redux/store.js';
import * as serviceWorker from './serviceWorker';

let renderDOM = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updatePostText={store.updatePostText.bind(store)}
        sendMessage={store.sendMessage.bind(store)}
        updateMessage={store.updateMessage.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

renderDOM(store.getState());

store.subscribe(renderDOM);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
