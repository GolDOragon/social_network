import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import dialoguesReducer from './dialoguesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
});

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhacers(applyMiddleware(thunk)));

export default store;
