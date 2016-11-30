import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import styles from './../styles/DialPad.css';

class DialPad extends Component {

  render() {
    return (
      <div className={styles.dial_container}>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={1} onClick={(e) => { this.props.onClick(e); }}>1</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={2} onClick={(e) => { this.props.onClick(e); }}>2</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={3} onClick={(e) => { this.props.onClick(e); }}>3</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={4} onClick={(e) => { this.props.onClick(e); }}>4</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={5} onClick={(e) => { this.props.onClick(e); }}>5</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={6} onClick={(e) => { this.props.onClick(e); }}>6</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={7} onClick={(e) => { this.props.onClick(e); }}>7</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={8} onClick={(e) => { this.props.onClick(e); }}>8</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={9} onClick={(e) => { this.props.onClick(e); }}>9</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} onClick={(e) => { this.props.onBackClick(e); }}>Back</Button></Col>
        <Col xs={4} md={4}><Button bsSize="large" className={styles.dial_button} value={0} onClick={(e) => { this.props.onClick(e); }}>0</Button></Col>
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
