// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StepTags from '../components/StepTags';
import { Creators } from './../actions/navigation';

class StepTagsPage extends Component {
  componentDidMount() {
    this.props.updateNavigation({
      back: '/step/cell',
      next: '/print'
    });
  }

  render() {
    return (
      <StepTags />
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

StepTagsPage.propTypes = {
  updateNavigation: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTagsPage);

