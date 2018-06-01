import React, {Component} from 'react';
import {connect} from 'react-redux';

import getUsers from '../actions/getUsers'

class ListUsers extends Component {

  componentDidMount() {
    this.props.onAddPost();
  }

  render() {
    let posts = this.props.testStore;
    console.log('posts =>', posts);
    console.log('posts - title =>', posts.title);

    return (
      <div>
        <h1>This is LIST USERS</h1>
        <ul className='wrap-posts'>
          {
            posts.map((item, index) =>
              <li className='post' key={index}>
                <div className='post-title'>{item.username}</div>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default connect(
  state => {
    console.log('store ', state);
    return ({
      testStore: state.users
    })
  },
  dispatch => {
    return ({
      onAddPost: () => {
        getUsers(dispatch)
        // dispatch({type: 'ADD_POST', payload: task})
      },
    })
  }
)(ListUsers);

