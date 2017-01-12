// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
HelpBlock, ControlLabel, Button } from 'react-bootstrap';
import DialPad from './DialPad';


export default class StepTags extends Component {
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
                  <ControlLabel>How many Pick-Up Tags Do You Need</ControlLabel>
                  <HelpBlock>Every Adult Must Have A Pick-Up Tag To Enter Secured Hallways</HelpBlock>
                  <div>
                    <Button bsStyle="default" bsSize="large">One Pick-Up Tag</Button>
                    <Button bsStyle="default" bsSize="large">Two Pick-Up Tag</Button>
                  </div>
                  <HelpBlock>
                    Each child will be printed two tags,
                    One to be placed on the child's back,
                    One to be given to their leader when you arrive at the classroom
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
