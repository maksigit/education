import React, {Component} from 'react';

class Item extends Component {

  render() {
    const {data} = this.props;
    // console.log('data', data);
    return (
      <div className="output">
        {data.map((value, index) => {
          return <div id={value.id} key={value.id}>
            <span id={value.id} className="delete-item" onClick={() => this.props.fnDelItem(value.id)}>&#9746;</span>
            <input className="input-checkbox" type="checkbox" onChange={() => this.props.fnCheck(value.id)}/>
            {value.title}
          </div>;
        })}
      </div>
    );
  }
}

export default Item;
