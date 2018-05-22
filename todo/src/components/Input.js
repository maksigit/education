import React, {Component} from 'react';

// import Output from './Output';
import Item from "./Item";
// import ButtonRemAll from "./ButtonRemAll";

let i = 0;
let checkParent;
let checkParentAttr;
let checkItem;

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
        {/*{this.renderToDoButton}*/}
      </div>
    );
  }

  // renderToDoButton = () => {
  //   this.state.items.find((element, inex) => {
  //     if(element.completed) {
  //       return <ButtonRemAll />
  //     }
  //   });
  //   return "ggg"
  // };

  checkInput = (eve) => {
    checkParent = eve.nativeEvent.target.parentNode;
    checkParentAttr = checkParent.getAttribute('id');
    checkItem = this.state.items.map((element, index) => {
      if (element.id === +checkParentAttr) {
        this.state.items[checkParentAttr - 1].completed = true
      }
      return checkItem
    });

    console.log(this.state.items)
  };

  handleOnChange = event => {
    console.log(event.target.value);
    this.setState({
      valueInput: event.target.value
    });
  };

  removeItemState = (id) => {
    this.state.items.map((element, index) => {
      if (element.id === +id) {
        delete this.state.items[element.id - 1];
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
