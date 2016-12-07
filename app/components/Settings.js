import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, ControlLabel, ButtonToolbar, Button } from 'react-bootstrap';

class Settings extends Component {

  state = {
    baseApiUrl: '',
    clientUsername: '',
    clientPassword: '',
    username: '',
    password: '',
    settingsScreenPassword: '',
  }

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
                      placeholder="http://..."
                      onChange={(e) => { this.state.baseApiUrl = e.target.value; }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Client Username</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder=""
                      onChange={(e) => { this.state.clientUsername = e.target.value; }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Client Password</ControlLabel>
                    <FormControl
                      type="password"
                      placeholder=""
                      onChange={(e) => { this.state.clientPassword = e.target.value; }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder=""
                      onChange={(e) => { this.state.username = e.target.value; }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      placeholder=""
                      onChange={(e) => { this.state.password = e.target.value; }}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup>
                    <h2>Settings Screen Password</h2>
                    <FormControl
                      type="password"
                      placeholder=""
                      onChange={(e) => { this.state.settingsScreenPassword = e.target.value; }}
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
                    <Button bsStyle="success" onClick={() => { this.props.updateSettings(this.state); }}>Save</Button>
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
  updateSettings: React.PropTypes.func,
};

export default Settings;
