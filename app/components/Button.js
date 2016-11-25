import React, { Component } from 'react';

class PrintButton extends Component {
  static propTypes = {
    text: React.PropTypes.string,
    onClick: React.PropTypes.func
  };

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default PrintButton;
