// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from './../actions/navigation';
import Home from '../components/Home';

class HomePage extends Component {
  componentDidMount() {
    this.props.updateNavigation({
      back: null,
      next: '/step/family'
    });
  }

  render() {
    return (
      <Home />
    );
  }
}

HomePage.propTypes = {
  updateNavigation: React.PropTypes.func
};

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Creators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

