import React, {Component} from 'react';
import {connect} from 'react-redux';

import getPosts from '../actions/getPosts'

class ListPosts extends Component {

  componentDidMount() {
    this.props.onAddPost();
  }

  render() {
    let posts = this.props.testStore;
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
    return ({
      testStore: state.posts
    })
  },
  dispatch => {
    return ({
      onAddPost: () => {
        getPosts(dispatch)
      },
    })
  }
)(ListPosts);
