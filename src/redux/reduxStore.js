import { combineReducers, createStore } from 'redux';
import dialoguesReducer from './dialoguesReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialoguesPage: dialoguesReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
