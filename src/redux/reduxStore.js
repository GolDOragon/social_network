import { combineReducers, createStore } from 'redux';
import dialoguesReducer from './dialoguesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  usersPage: usersReducer,
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
