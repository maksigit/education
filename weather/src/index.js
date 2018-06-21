import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import './index.css';
import InputCity from "./components/InputCity";
import OutPut from "./components/OutPut";

import ToStore from "./reducers/ToStore";
import Map from "./components/Map";

let ping = function ping(store) {
  return function (next) {
    return function (action) {
      action.payload.testpole = 'proverka raz - dva';
      console.log(`Тип события: ${action.type}, дополнительные данные события: ${action.payload.base}`)
      return next(action);
    };
  };
};

const store = createStore(ToStore, applyMiddleware(ping));

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <InputCity/>
      <Map  />
      <OutPut/>
    </div>
  </Provider>,
  document.getElementById('root')
);

