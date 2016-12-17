// @flow
import React from 'react';
import { render } from 'react-dom';
import './app.global.css';
import AppProvider from './AppProvider';

render(
  <AppProvider />,
  document.getElementById('root')
);
