import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
HelpBlock, ControlLabel, Button, ButtonToolbar } from 'react-bootstrap';

export default class StepTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  selectTagsNumber(n) {
    this.setState({ selected: n });
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={() => {}}
                >
                  <ControlLabel><p>How many Pick-Up Tags Do You Need</p></ControlLabel>
                  <HelpBlock><p>Every Adult Must Have A Pick-Up Tag To Enter Secured Hallways</p></HelpBlock>
                  <div>
                    <ButtonToolbar>
                      <Button bsStyle="default" bsSize="large" onClick={() => this.setState({selected: 1})} active={this.state.selected == 1}>One Pick-Up Tag</Button>
                      <Button bsStyle="default" bsSize="large" onClick={() => this.setState({selected: 2})} active={this.state.selected == 2}>Two Pick-Up Tag</Button>
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
          </Row>
        </Grid>
      </div>
    );
  }
}
