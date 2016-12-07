import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, ControlLabel, ButtonToolbar, Button } from 'react-bootstrap';

class Settings extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <h1>Settings</h1>
                <form>
                  <FormGroup
                    controlId="formBasicText"
                    validationState={() => {}}
                  >
                    <h2>Ministry Platform Connection</h2>
                    <ControlLabel>Base API URL</ControlLabel>
                    <FormControl
                      type="text"
                      value=""
                      placeholder=""
                      onChange={() => {}}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Client Username</ControlLabel>
                    <FormControl
                      type="text"
                      value=""
                      placeholder=""
                      onChange={() => {}}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Client Password</ControlLabel>
                    <FormControl
                      type="password"
                      value=""
                      placeholder=""
                      onChange={() => {}}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      type="text"
                      value=""
                      placeholder=""
                      onChange={() => {}}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      value=""
                      placeholder=""
                      onChange={() => {}}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup>
                    <h2>Settings Screen Password</h2>
                    <FormControl
                      type="password"
                      value=""
                      placeholder=""
                      onChange={() => {}}
                    />
                  </FormGroup>
                  <FormGroup>
                    <h2>Event Congregation</h2>
                    <FormControl componentClass="select">
                      <option value="select">select</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>
                  <FormGroup>
                    <h2>Event Ministries</h2>
                    <FormControl componentClass="select">
                      <option value="select">select</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>
                  <ButtonToolbar>
                    <Button bsStyle="success" onClick={() => { this.props.updateSettings(this.props.settings); }}>Save</Button>
                  </ButtonToolbar>
                </form>
                <h1>Starting Mode</h1>
                <ButtonToolbar>
                  <Button bsStyle="warning">Staff Mode</Button>
                  <Button bsStyle="primary">Unattended</Button>
                </ButtonToolbar>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: React.PropTypes.shape({
    baseApiUrl: React.PropTypes.string,
  }),
  updateSettings: React.PropTypes.func,
};

export default Settings;
