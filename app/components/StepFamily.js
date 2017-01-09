// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';


export default class StepFamily extends Component {
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
                  <ControlLabel>Select your family</ControlLabel>
                  <FormControl componentClass="select" placeholder="Family...">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                  <FormControl.Feedback />
                  <HelpBlock>Then press next</HelpBlock>
                </FormGroup>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
