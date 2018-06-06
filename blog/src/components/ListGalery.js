import React, {Component} from 'react';
import {connect} from 'react-redux';

import getGalery from '../actions/getGalery'
import Button from './Button'

class ListGalery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.testStore,
      pageId: 1
    }
  }

  componentDidMount() {
    this.props.onAddGalery();
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
      <li className='post' key={index}>
        <div onClick={() => this.props.history.push({
          pathname: '/albums/' + item.id
        })} className='post-title'>{item.title}</div>
      </li>
    )
  };

  render() {
    let posts = this.props.testStore;
    let postsLenght = posts.length;
    const btnLenght = postsLenght / 10;

    return (
      <div>
        <h1>This is LIST GALERY</h1>
        <ul className='wrap-posts'>
          {
            this.renderItems()
          }
        </ul>
        <div>
          {this.renderBtns(btnLenght)}
        </div>
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
