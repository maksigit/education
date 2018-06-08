import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddCity from '../actions/AddCity'

const arrCity = [];

class InputCity extends Component {

  componentDidMount () {
    let fromLocal = localStorage.getItem('city');
    let fromLocalParce = JSON.parse(fromLocal);

    this.props.setDataCity(fromLocalParce);
  };

  toLS = (city) => {
   arrCity.push(city);
    localStorage.setItem('city', JSON.stringify(arrCity))
  };


  render() {
    return (
      <div className="App">
        <input type="text" ref={(input) => {this.trackInput = input}}/>
        {/*value={this.state.value}*/}
        {/*onChange={() => console.log('track', this.trackInput.value)}*/}
        <button onClick={this.getDataCity}>Search</button>
      </div>
    );
  }
}

export default connect(
  state => {
    console.log('state Input city', state);
    return ({
      testStore: state
    })
  },
  dispatch => {
    return ({
      setDataCity: (city) => {
        city.map((item)=> {
          return AddCity(dispatch, item)
        });

      },
    })
  }
)(InputCity);