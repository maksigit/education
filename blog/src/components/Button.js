import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { btnIdx, handleBtnClick } = this.props;
    return(
      <button onClick={() => handleBtnClick(btnIdx)}>{btnIdx+1}</button>
    )
  }
}

export default Button