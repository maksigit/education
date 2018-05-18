import React, {Component} from 'react';

import Output from './Output';
import Item from "./Item";

let arrValue = [];
let item = [];
let i = 0;


class Input extends Component {

  state = {
    valueInput: '',
    items: [],
    arrValue: [],
    id: ''
  };

  render() {
    return (
      <div className="wrap-input">
        <input type="text" className="input-task" onChange={this.handleOnChange} placeholder="Начать новый список"/>
        <button className="add-task" onClick={this.handleClick}>Добавить таск</button>
        <Output>
          <Item data = {this.state.arrValue}/>
        </Output>
      </div>
    );
  }

  handleOnChange = event => {
    event.preventDefault();
    this.setState({
      valueInput: event.target.value
    });
  };

  handleClick = () => {
    item.push({id: this.generateId(), title: this.state.valueInput, completed: false});
    arrValue.push(this.state.valueInput);

    this.setState({
      arrValue: arrValue,
      items: item
    });

    console.log(this.state.items);

  };

  generateId = () => {
    i++;
    return i
  }

}

export default Input;
