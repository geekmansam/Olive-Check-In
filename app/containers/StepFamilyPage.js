// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepFamily from '../components/StepFamily';

class StepFamilyPage extends Component {
  render() {
    return (
      <StepFamily />
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

export default connect(mapStateToProps)(StepFamilyPage);

