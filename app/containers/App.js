// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';
import styles from './../styles/App.css';

export default class App extends Component {
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
          <Button bsStyle="warning" bsSize="large">
            <Link to="/family" title="Family">
              Back
            </Link>
          </Button>
          <Button bsStyle="success" bsSize="large">
            <Link to="/step/family" title="Family">
              Next
            </Link>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
