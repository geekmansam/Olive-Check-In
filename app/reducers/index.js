// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import settings from './settings';
import navigation from './navigation';

const rootReducer = combineReducers({
  settings,
  routing,
  navigation
});

export default rootReducer;
