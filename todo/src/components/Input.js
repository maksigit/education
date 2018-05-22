import React, {Component} from 'react';

import Item from "./Item";
import ButtonRemAll from "./ButtonRemAll";

let i = -1;

class Input extends Component {
  state = {
    valueInput: '',
    items: [],
  };

  render() {
    return (
      <div className="wrap-input">
        <input type="text" value={this.state.valueInput} className="input-task" onChange={this.handleOnChange}
               placeholder="Начать новый список"/>
        <button className="add-task" onClick={this.handleClick}>Добавить таск</button>
        <Item data={this.state.items} fn={this.removeItemState} fnCheck={this.checkInput}/>
        {this.renderToDoButton()}
      </div>
    );
  }

  renderToDoButton = () => {
    const isAnyCompleted = this.state.items.find(element => element.completed);
    return isAnyCompleted ? <ButtonRemAll /> : null;
  };

  checkInput = (id) => {
    let tempItems = [...this.state.items];
    tempItems = tempItems.map((element, index) => {
      if (element.id === +id) {
          element.completed = !element.completed;
      }
      return element
    });
    this.setState({
      items: tempItems
    });
  };

  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({
      valueInput: event.target.value
    });
  };

  removeItemState = (id) => {
    console.log(id);
    this.state.items.map((element, index) => {
      if (element.id === +id) {
        this.state.items.splice(element.id - 1, 1);
      }
      return this.state.items;
    });
    this.setState({
      items: this.state.items
    });
    console.log(this.state.items);
  };

  handleClick = () => {
    this.state.items.push({id: this.generateId(), title: this.state.valueInput, completed: false});
    this.setState({
      items: this.state.items
    });
    console.log(this.state.items);
  };

  generateId = () => {
    i++;

    return i

  }
}

export default Input;
