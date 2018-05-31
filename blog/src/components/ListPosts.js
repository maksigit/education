import React, {Component} from 'react';
import {connect} from 'react-redux';

import getPosts from '../actions/getPosts'

class ListPosts extends Component {

  componentDidMount() {
    this.props.onAddPost();
  }

  render() {
    let posts = this.props.testStore;
    console.log('posts =>', posts);
    console.log('posts - title =>', posts.title);

    return (
      <div>
        <h1>This is LIST POSTS</h1>
        <ul className='wrap-posts'>
          {
            posts.map((item, index) =>
              <li className='post' key={index}>
                <div className='post-title'>{item.title}</div>
                <div className='post-body'>{item.body}</div>
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
      testStore: state
    })
  },
  dispatch => {
    return ({
      onAddPost: () => {
        getPosts(dispatch)
        // dispatch({type: 'ADD_POST', payload: task})
      },
      // removeItem: (taskId) => {
      //   dispatch({type: 'REMOVE_ITEM', payload: taskId})
      // },
      // checkItem: (taskId) => {
      //   dispatch({type: 'CHECK_ITEM', payload: taskId})
      // },
      // removeItemMark: () => {
      //   dispatch({type: 'REMOVE_ITEM_MARK'})
      // },
      // toLoad: (values) => {
      //   dispatch({type: 'TO_LOAD', payload: values})
      // }
    })
  }
)(ListPosts);
