import React, {Component} from 'react';
import {connect} from 'react-redux';

import getGalery from '../actions/getGalery'

class ListGalery extends Component {

  componentDidMount() {
    this.props.onAddGalery();
  }

  render() {
    let posts = this.props.testStore;

    return (
      <div>
        <h1>This is LIST GALERY</h1>
        <ul className='wrap-posts'>
          {
            posts.map((item, index) =>
              <li className='post' key={index}>
                <div onClick={() => this.props.history.push({
                  pathname: '/albums/' + item.id

                })} className='post-title'>{item.title}</div>
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
      testStore: state.galery
    })
  },
  dispatch => {
    return ({
      onAddGalery: () => {
        getGalery(dispatch)
      },
    })
  }
)(ListGalery);
