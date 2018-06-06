import React, {Component} from 'react';
import {connect} from 'react-redux';

import getPhoto from '../actions/getPhoto'
import Button from './Button'

class ListAlbum extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageId: 1
    }
  }

  componentDidMount() {
    this.props.onAddPhoto(this.props.id);
  }

  onBtnClick = idx => {
    this.setState({
      pageId: idx
    })
  };

  renderBtns = btnsLenght => {
    const btns = [];
    for (let i = 0; i < btnsLenght; i++) {
      btns.push(
        <Button handleBtnClick={this.onBtnClick} btnIdx={i}/>
      )
    }
    return btns;
  };

  renderItems = () => {
    let partItem = this.props.testStore;
    const {pageId} = this.state;
    partItem = partItem.slice(pageId * 10, pageId * 10 + 10);
    return partItem.map((item, index) =>
      <li className='post-width-img' key={index}>
        <img src={item.thumbnailUrl} alt={item.id} />
      </li>
    )
  };

  render() {
    let album = this.props.testStore;
    const btnsLenght = album.length / 10;
    return (
      <div>
        <h1>This is LIST GALERY</h1>
        <ul className='wrap-posts'>
          {
            this.renderItems()
          }
        </ul>
        {this.renderBtns(btnsLenght)}
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
