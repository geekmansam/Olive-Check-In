// @flow
import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
HelpBlock, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';
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
                  <ControlLabel><p>How many Pick-Up Tags Do You Need</p></ControlLabel>
                  <HelpBlock><p>Every Adult Must Have A Pick-Up Tag To Enter Secured Hallways</p></HelpBlock>
                  <div>
                    <ButtonToolbar>
                      <Button bsStyle="default" bsSize="large">One Pick-Up Tag</Button>
                      <Button bsStyle="default" bsSize="large">Two Pick-Up Tag</Button>
                    </ButtonToolbar>
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
