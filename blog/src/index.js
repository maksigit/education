import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import { rUsers, rPosts, rGalery } from './reducers/Reducers';

import App from './components/App';
import Galery from './components/Galery';
import Users from './components/Users';
import Links from './components/Links';

import './components/ListPosts.css';
import './components/Links.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const rootReducer = combineReducers({posts: rPosts, galery: rGalery, users: rUsers });

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(rootReducer, applyMiddleware(middleware));

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Links />
        <Route exact path="/" component={App}/>
        <Route path="/albums" component={Galery}/>
        <Route path="/users" component={Users}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

