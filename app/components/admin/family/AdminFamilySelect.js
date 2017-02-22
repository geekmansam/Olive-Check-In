// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Family from './../../Family/Family';


export default class AdminFamilySearch extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <div>
                <h3>Family</h3>
                <Family
                  id="1"
                  lastname="Caldwell"
                  members={['JackCaldwell', 'Judy Cldwell', 'Jason Caldwell', 'Jacky Caldwell']}
                  phone="888092873"
                  editable
                />
              </div>
              <div>
                <Button bsStyle="danger" bsSize="large" style={{ float: 'left' }}>
                  <Link to="/admin/family/create" title="Create new family">
                    Create New family
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
