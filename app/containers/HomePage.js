// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from '../components/Home';

class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}

function mapStateToProps(state) {
  if (!state.settings.baseApiUrl) {
    push('/settings');
    console.log('Redirecting to settings...');
  }
  return {
    settings: state.settings
  };
}

export default connect(mapStateToProps)(HomePage);

