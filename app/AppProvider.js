// @flow
import { persistStore } from 'redux-persist';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { asyncLocalStorage } from 'redux-persist/storages';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default class AppProvider extends React.Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }
  state = {};

  componentWillMount() {
    const persistOptions = {
      storage: asyncLocalStorage,
      whitelist: ['settings', 'navigation'],
    };
    persistStore(store, persistOptions, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return <div>Loading...</div>;
    }
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
