// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StepCell from '../components/StepCell';
import { Creators } from './../actions/navigation';

class StepCellPage extends Component {
  componentDidMount() {
    this.props.updateNavigation({
      back: '/step/cell',
      next: '/step/tags'
    });
  }

  render() {
    return (
      <StepCell />
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

StepCellPage.propTypes = {
  updateNavigation: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(StepCellPage);

