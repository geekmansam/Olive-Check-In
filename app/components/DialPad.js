import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import styles from './../styles/DialPad.css';

class DialPad extends Component {
  render() {
    return (
      <div className={styles.dial_container}>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>1</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>2</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>3</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>4</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>5</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>6</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>7</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>8</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>9</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>Back</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button}>0</Button></Col>
      </div>
    );
  }
}

export default DialPad;
