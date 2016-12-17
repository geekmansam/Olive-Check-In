// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Pager } from 'react-bootstrap';
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
        <Pager>
          <Pager.Item previous href="#">&larr; Back</Pager.Item>
          <Pager.Item next href="#">Next &rarr;</Pager.Item>
        </Pager>
      </div>
    );
  }
}
