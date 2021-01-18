import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import appReducer from './appReducer';
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
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare)),
);

export default store;
