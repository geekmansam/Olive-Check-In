// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import settings from './settings';
import navigation from './navigation';
// import family from './family';

const rootReducer = combineReducers({
  settings,
  routing,
  navigation,
  // family
});

export default rootReducer;
