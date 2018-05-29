import React, {Component} from 'react';
import {connect} from 'react-redux';



class App extends Component {


  addTask = () => {
    // this.props.dispatch()
    this.props.onAddTask(this.trackInput.value);
    this.trackInput.value = '';
  };

    render() {
      let test = false;
      this.props.testStore.find(function (item) {
        if(item.completed) {
          test = item.completed;
        }
        console.log(test);
        return test

      });
    console.log(this.props.testStore);
    return (
      <div>
        <input type="text" ref={(input) => {this.trackInput = input}}/>
        <button onClick={this.addTask}>Add TASK</button>
        <ul>
          {
            this.props.testStore.map((item, index) =>
              <li key={index}>
                <span onClick={() => this.props.removeItem(item.id)}>&#9746;</span>
                <input onChange={() => this.props.checkItem(item.id)} type="checkbox" checked={item.completed}/>
                {item.title}
              </li>
            )
          }
        </ul>
        {test ? <button onClick={() => this.props.removeItemMark()}>Удалить выбранные</button> : null}
      </div>
    );
  }
}

export default connect(
  state => {
    console.log('store ', state);
    return ({
      testStore: state
    })
  },
  dispatch => ({
    onAddTask: (task) => {
      dispatch({type: 'ADD_TASK', payload: task})
    },
    removeItem: (taskId) => {
      dispatch({type: 'REMOVE_ITEM', payload: taskId})
    },
    checkItem: (taskId) => {
      dispatch({type: 'CHECK_ITEM', payload: taskId})
    },
    removeItemMark: () => {
      dispatch({type: 'REMOVE_ITEM_MARK'})
    }
  })
)(App);



