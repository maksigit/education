import React, {Component} from 'react';

class ButtonRemAll extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fnDel}>Удалить выбранные</button>
      </div>
    );
  }
}

export default ButtonRemAll;
