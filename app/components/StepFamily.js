// @flow
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SelectFamily from './SelectFamily';


export default class StepFamily extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <SelectFamily
                label="Select your family"
                help="Then press next"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
