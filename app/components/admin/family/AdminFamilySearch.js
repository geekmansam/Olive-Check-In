// @flow
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SelectFamily from './../../SelectFamily';


export default class AdminFamilySearch extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <SelectFamily
                label="Select your family"
                help="Staff attended check-in station"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
