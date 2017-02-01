import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminFamilySelect from '../../../components/admin/family/AdminFamilySelect';
import { Creators } from './../../../actions/navigation';

class AdminFamilySelectPage extends Component {
  componentDidMount() {
    this.props.updateNavigation({
      back: '/admin/family/search',
      next: null
    });
  }

  render() {
    return (
      <AdminFamilySelect />
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

AdminFamilySelectPage.propTypes = {
  updateNavigation: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFamilySelectPage);
