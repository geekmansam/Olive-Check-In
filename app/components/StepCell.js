// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import DialPad from './DialPad';


export default class StepCell extends Component {
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
                  <ControlLabel>Type your cellphone number</ControlLabel>
                  <FormControl
                    type="text"
                    value=""
                    placeholder=""
                    onChange={() => {}}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Then press next</HelpBlock>
                  <HelpBlock className="more-info">
                    <p>We use this number to text or call you in case your child needs your attention. <br />
                    Please type a cellphone that you will have with you today</p>
                  </HelpBlock>
                </FormGroup>
              </form>
            </Col>
            <Col xs={12} md={6}>
              <DialPad onClick={() => {}} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
