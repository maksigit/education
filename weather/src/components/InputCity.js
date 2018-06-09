import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddCity from '../actions/AddCity'

class InputCity extends Component {

  componentDidMount () {
    let fromLocal = localStorage.getItem('city');
    console.log(fromLocal);
    if (fromLocal) {
      let fromLocalParce = JSON.parse(fromLocal);
      this.props.setCityFromLS(fromLocalParce);
    }
  };

  toLS = (city) => {
    const arrCity = JSON.parse(localStorage.getItem('city'));
    arrCity.push(city);
    localStorage.setItem('city', JSON.stringify(arrCity))
  };


  render() {
    return (
      <div className="App">
        <input type="text" ref={(input) => {this.trackInput = input}}/>
        {/*value={this.state.value}*/}
        {/*onChange={() => console.log('track', this.trackInput.value)}*/}
        <button onClick={() => {
          // this.toLS(this.trackInput.value);
          return this.props.getDataCity(this.trackInput.value)
        }}>Search</button>
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
      getDataCity: (value) => {

          return AddCity(dispatch, value)
      },
      setCityFromLS: (city) => {

      city.map((item)=> {
        return AddCity(dispatch, item)
      });
    }
    })
  }
)(InputCity);