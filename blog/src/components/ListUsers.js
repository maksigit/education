import React, {Component} from 'react';
import {connect} from 'react-redux';

import getUsers from '../actions/getUsers'

class ListUsers extends Component {

  componentDidMount() {
    this.props.onAddUsers();
  }

  render() {
    let posts = this.props.testStore;
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
    return ({
      testStore: state.users
    })
  },
  dispatch => {
    return ({
      onAddUsers: () => {
        getUsers(dispatch)
      },
    })
  }
)(ListUsers);

