// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import SettingsPage from './containers/SettingsPage';
import StepFamilyPage from './containers/StepFamilyPage';
import StepCellPage from './containers/StepCellPage';
import StepTagsPage from './containers/StepTagsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/step/family" component={StepFamilyPage} />
    <Route path="/step/cell" component={StepCellPage} />
    <Route path="/step/tags" component={StepTagsPage} />
    <Route path="*" component={HomePage} />
  </Route>
);
