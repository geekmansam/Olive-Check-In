// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { ButtonToolbar, Button } from 'react-bootstrap';
import styles from './../styles/App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <h1>Olive Baptist Church</h1>
        <Link to="/settings" className={`${styles.settings_link}`} title="Settings">
          <i className="fa fa-cogs fa-2x" aria-hidden="true" />
        </Link>
        <div className={`main-window ${styles.vertical_center}`}>
          {this.props.children}
        </div>
        <ButtonToolbar>
          <Button bsStyle="warning" bsSize="large" disabled={this.props.navigation.back == null}>
            <Link to={this.props.navigation.back} title="Back">
              Back
            </Link>
          </Button>
          <Button bsStyle="success" bsSize="large" style={{ float: 'right' }} disabled={this.props.navigation.next == null}>
            <Link to={this.props.navigation.next} title="Next">
              Next
            </Link>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  };
}

App.propTypes = {
  navigation: React.PropTypes.shape({
    next: React.PropTypes.string,
    back: React.PropTypes.string
  })
};

export default connect(mapStateToProps)(App);
