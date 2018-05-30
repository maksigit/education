import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';

let i = 0;

function removeItem(temp, id) {
  return temp.filter(item => id !== item.id);
}

function removeItemMark(temp) {
  let otFilter;
  otFilter = temp.filter(function (item) {
    return !item.completed
  });
  return otFilter
}

function markItem(temp, id) {
  const temp2 = temp.map(function (item)  {
    if (item.id === id) {
      item.completed = !item.completed
    }
    return item;
  });
  console.log(temp2);
  return temp2
}

function toLoad(temp, obj=[]) {
  console.log(temp);
  console.log(obj);
  return [...obj];
}

function todoList(state = [], action) {
  const item = {id: i++, title: action.payload, completed: false};
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      item,
    ];
  } else if (action.type === 'REMOVE_ITEM') {
     return removeItem(state, action.payload)
  } else if (action.type === 'CHECK_ITEM') {
     return markItem(state, action.payload);
  } else if (action.type === 'REMOVE_ITEM_MARK') {
    return removeItemMark(state);
  }  else if (action.type === 'TO_LOAD') {
    return toLoad(state, action.payload);
  }

  return state
}

const store = createStore(todoList);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// import { createStore } from 'redux';
//
// function todoList (state = [], action) {
//   if (action.type === 'ADD_TASK') {
//     return [
//       ...state,
//       action.payload
//     ];
//   }
// }
//
// const store = createStore(todoList);
//
// console.log(store);
// console.log(store.getState());
//
//
// store.subscribe(() => {
//   console.log('subscribe', store.getState())
// });
//
//
//
// store.dispatch({ type: 'ADD_TASK', payload: 'do sometings'});
// store.dispatch({ type: 'ADD_TASK', payload: 'do sometings-2'});