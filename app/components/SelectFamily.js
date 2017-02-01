// @flow
import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';


export default class SelectFamily extends Component {
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={() => {}}
        >
          <ControlLabel><p>{this.props.label}</p></ControlLabel>
          <FormControl componentClass="select" placeholder="Family...">
            <option value="select">select</option>
            <option value="other">...</option>
          </FormControl>
          <FormControl.Feedback />
          <HelpBlock><p>{this.props.help}</p></HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

SelectFamily.propTypes = {
  label: React.PropTypes.string,
  help: React.PropTypes.string,
};
