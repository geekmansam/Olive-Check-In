import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup,
FormControl, ControlLabel, ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';

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
                      value={this.props.settings.baseApiUrl}
                      placeholder="http://..."
                      onChange={(e) => { this.props.updateSettings({ baseApiUrl: e.target.value }); }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Client Username</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.props.settings.clientUsername}
                      placeholder=""
                      onChange={(e) => { this.props.updateSettings({ clientUsername: e.target.value }); }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Client Password</ControlLabel>
                    <FormControl
                      type="password"
                      value={this.props.settings.clientPassword}
                      placeholder=""
                      onChange={(e) => { this.props.updateSettings({ clientPassword: e.target.value }); }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      type="text"
                      value={this.props.settings.username}
                      placeholder=""
                      onChange={(e) => { this.props.updateSettings({ username: e.target.value }); }}
                    />
                    <FormControl.Feedback />
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      value={this.props.settings.password}
                      placeholder=""
                      onChange={(e) => { this.props.updateSettings({ password: e.target.value }); }}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup>
                    <h2>Settings Screen Password</h2>
                    <FormControl
                      type="password"
                      value={this.props.settings.settingsScreenPassword}
                      placeholder=""
                      onChange={(e) => { this.props.updateSettings({ settingsScreenPassword: e.target.value }); }}
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
                </form>
                <h1>Starting Mode</h1>
                <ButtonToolbar>
                  <Button bsStyle="warning">
                    <Link to="/admin/family/search">Staff Mode</Link>
                  </Button>
                  <Button bsStyle="primary">
                    <Link to="/" title="Unattended">
                      Unattended
                    </Link>
                  </Button>
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
  settings: React.PropTypes.shape({
    baseApiUrl: React.PropTypes.string,
    clientUsername: React.PropTypes.string,
    clientPassword: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string,
    settingsScreenPassword: React.PropTypes.string,
  }),
};

export default Settings;
