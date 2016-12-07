// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Settings from '../components/Settings';
import { Creators } from '../actions/settings';

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
