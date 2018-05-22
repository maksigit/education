import React, {Component} from 'react';

class Item extends Component {

  render() {
    return (
      <div className="output">
        {this.props.data.map((value, index) => {
          return <div id={value.id} key={value.id}>
            <span id={value.id} className="delete-item" onClick={() => this.props.fn(value.id)}>&#9746;</span>
            <input className="input-checkbox" type="checkbox" onChange= {this.props.fnCheck}/>
            {value.title}
          </div>;
        })}
      </div>
    );
  }
}

export default Item;
