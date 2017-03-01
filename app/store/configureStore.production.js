// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers';

const router = routerMiddleware(browserHistory);

const enhancer = applyMiddleware(thunk, router, autoRehydrate);

export default function configureStore(initialState: Object) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}
