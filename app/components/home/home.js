// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/home.css';

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Git Stats</h2>
          <button>Set Repo</button>
        </div>
      </div>
    );
  }
}
