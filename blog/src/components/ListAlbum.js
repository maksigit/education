import React, {Component} from 'react';
import {connect} from 'react-redux';

import getPhoto from '../actions/getPhoto'

class ListAlbum extends Component {

  componentDidMount() {
    this.props.onAddPhoto(this.props.id);
  }

  render() {
    let album = this.props.testStore;
    return (
      <div>
        <h1>This is LIST GALERY</h1>
        <ul className='wrap-posts'>
          {
            album.map((item, index) =>
              <li className='post' key={index}>
                <img src={item.thumbnailUrl} alt={item.id} />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    testStore: state.album
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    onAddPhoto: (id) => {
      getPhoto(dispatch, id)
    },
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbum);
