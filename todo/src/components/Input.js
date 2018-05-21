import React, {Component} from 'react';

// import Output from './Output';
import Item from "./Item";

let item = [];
let i = 0;
let getId;
let test;

class Input extends Component {

  state = {
    valueInput: '',
    items: [],
  };

  render() {
    return (
      <div className="wrap-input">
        <input type="text" value={this.state.valueInput} className="input-task" onChange={this.handleOnChange} placeholder="Начать новый список"/>
        <button className="add-task" onClick={this.handleClick}>Добавить таск</button>
        <Item data = {this.state.items} fn = {this.removeItemState} />
      </div>
    );
  }

  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({
      valueInput: event.target.value
    });
  };

  removeItemState = (ev) => {
    getId = ev.nativeEvent.target.id;
    this.state.items.map((element, index) => {
      if (element.id === +getId) {
        delete this.state.items[element.id - 1];
      }
      test = this.state.items;
      return test
    });
    this.setState({
      items: test
    });
    console.log(test);
  };

  handleClick = () => {
    item.push({id: this.generateId(), title: this.state.valueInput, completed: false});
    this.setState({
      items: item,
      valueInput: ''
    });
  };

  generateId = () => {
    i++;
    return i
  }
}

export default Input;
