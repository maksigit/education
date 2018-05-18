import React, {Component} from 'react';

class Item extends Component {

  render() {
    return (
      <div  className="output">
        {this.props.data.map((value, index) => {
          return <div key={index}>
            <span className="delete-item" onClick={this.testI}>&#9746;</span>
            <input className="input-checkbox" type="checkbox"/>
            {value}
          </div>;
        })}
      </div>
    );
  }

  remove = () => {

  };

  testI = (event) => {
    console.log('cick');
    event.target.parentNode.remove()
  }
}

export default Item;
