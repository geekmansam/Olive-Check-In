import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import DialPad from './DialPad';


export default class StepCell extends Component {
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
            <Col xs={12} md={6}>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={() => {}}
                >
                  <ControlLabel><p>Type your cellphone number</p></ControlLabel>
                  <FormControl
                    type="text"
                    value=""
                    placeholder=""
                    onChange={() => {}}
                  />
                  <FormControl.Feedback />
                  <HelpBlock><p>Then press next</p></HelpBlock>
                  <HelpBlock className="more-info">
                    We use this number to text or call you in case
                     your child needs your attention. <br />
                    Please type a cellphone that you will have with you today
                  </HelpBlock>
                </FormGroup>
              </form>
            </Col>
            <Col xs={12} md={6}>
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
