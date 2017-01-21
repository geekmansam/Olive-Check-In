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
import AdminFamilySearchPage from './containers/admin/family/AdminFamilySearchPage';
import AdminFamilyCreatePage from './containers/admin/family/AdminFamilyCreatePage';
import AdminFamilyEditPage from './containers/admin/family/AdminFamilyEditPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/step/family" component={StepFamilyPage} />
    <Route path="/step/cell" component={StepCellPage} />
    <Route path="/step/tags" component={StepTagsPage} />
    <Route path="/admin/family/search" component={AdminFamilySearchPage} />
    <Route path="/admin/family/create" component={AdminFamilyCreatePage} />
    <Route path="/admin/family/edit" component={AdminFamilyEditPage} />
    <Route path="*" component={HomePage} />
  </Route>
);
