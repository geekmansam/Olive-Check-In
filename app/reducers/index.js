// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { authReducer as auth } from 'redux-implicit-oauth2';
import settings from './settings';
import navigation from './navigation';

const rootReducer = combineReducers({
  settings,
  routing,
  navigation,
  auth
});

export default rootReducer;
