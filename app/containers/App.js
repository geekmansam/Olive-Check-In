// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './../styles/App.css';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <h2>Olive Baptist Church</h2>
        <Link to="/settings" className={styles.settings_link} title="Settings">
          <i className="fa fa-cogs" aria-hidden="true" />
        </Link>
        <div className="main-window">
          {this.props.children}
        </div>
      </div>
    );
  }
}
