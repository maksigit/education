import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import './index.css';
import InputCity from "./components/InputCity";
import OutPut from "./components/OutPut";

import ToStore from "./reducers/ToStore";
import Map from "./components/Map";

const store = createStore(ToStore);

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

