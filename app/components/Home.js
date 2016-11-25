// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>Olive Baptist Church</h2>
          <Link to="/settings" className={styles.settings_link} title="Settings">
            <i className="fa fa-cogs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  }
}
