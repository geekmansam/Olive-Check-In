// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StepFamily from '../components/StepFamily';
import { Creators } from './../actions/navigation';

class StepFamilyPage extends Component {
  componentDidMount() {
    this.props.updateNavigation({
      back: '/',
      next: '/step/cell'
    });
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Creators, dispatch);
}

StepFamilyPage.propTypes = {
  updateNavigation: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFamilyPage);

