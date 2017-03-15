import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import styles from './../styles/DialPad.css';

class DialPad extends Component {

  render() {
    return (
      <div className={styles.dial_container}>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={1} onClick={() => { this.props.onClick(1); }}>1</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={2} onClick={() => { this.props.onClick(2); }}>2</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={3} onClick={() => { this.props.onClick(3); }}>3</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={4} onClick={() => { this.props.onClick(4); }}>4</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={5} onClick={() => { this.props.onClick(5); }}>5</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={6} onClick={() => { this.props.onClick(6); }}>6</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={7} onClick={() => { this.props.onClick(7); }}>7</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={8} onClick={() => { this.props.onClick(8); }}>8</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={9} onClick={() => { this.props.onClick(9); }}>9</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} onClick={() => { this.props.onBackClick(); }}>Back</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={0} onClick={() => { this.props.onClick(0); }}>0</Button></Col>
      </div>
    );
  }
}

DialPad.propTypes = {
  onClick: React.PropTypes.func,
  onBackClick: React.PropTypes.func
};

DialPad.defaultProps = {
  onClick: () => {},
  onBackClick: () => {}
};

export default DialPad;
