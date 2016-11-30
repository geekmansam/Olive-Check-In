// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import DialPad from './DialPad';


export default class Home extends Component {
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
                  <ControlLabel>Type your phone number</ControlLabel>
                  <FormControl
                    type="text"
                    value=""
                    placeholder=""
                    onChange={() => {}}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Then press next</HelpBlock>
                </FormGroup>
              </form>
            </Col>
            <Col xs={12} md={4}>
              <DialPad />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
