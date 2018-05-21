import React, {Component} from 'react';

class Item extends Component {

  render() {
    return (
      <div className="output">
        {this.props.data.map((value, index) => {
          return <div id={value.id} key={value.id}>
            <span id={value.id} className="delete-item" onClick={this.props.fn}>&#9746;</span>
            <input className="input-checkbox" type="checkbox"/>
            {value.title}
          </div>;
        })}
      </div>
    );
  }

}

export default Item;
