import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import DialPad from './DialPad';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ''
    };
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={() => {}}
                >
                  <ControlLabel><p>Type your phone number</p></ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.number}
                    placeholder=""
                    onChange={() => {}}
                  />
                  <FormControl.Feedback />
                  <HelpBlock><p>Then press next</p></HelpBlock>
                </FormGroup>
              </form>
            </Col>
            <Col xs={12} md={4}>
              <DialPad
                onClick={(e) => { this.setState({ number: this.state.number + e.toString() }); }}
                onBackClick={() => { this.setState({ number: this.state.number.slice(0, -1) }); }}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
