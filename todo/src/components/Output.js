import React, {Component} from 'react';

class Output extends Component {
  render() {
    return (
      <div className="wrap-output">
        <p>THIS IS OUTPUT</p>
        {this.props.children}
      </div>
    );
  }
}

export default Output;
