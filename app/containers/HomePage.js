// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

export default connect(mapStateToProps)(HomePage);

