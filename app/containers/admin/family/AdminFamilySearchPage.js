import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminSearchFamily from '../../../components/admin/family/AdminFamilySearch';
import { Creators } from './../../../actions/navigation';

class AdminFamilySearchPage extends Component {
  componentDidMount() {
    this.props.updateNavigation({
      back: null,
      next: '/admin/family/select'
    });
  }

  render() {
    return (
      <AdminSearchFamily />
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

AdminFamilySearchPage.propTypes = {
  updateNavigation: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminFamilySearchPage);
