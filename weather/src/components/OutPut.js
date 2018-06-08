import React, {Component} from 'react';
import {connect} from "react-redux";

class OutPut extends Component {
  // constructor(props) {
  //   super(props);
  //   this.searchWithDelay = this.doWithDelay(this.search, 1000);
  // }
  //
  // doWithDelay(func, delay) {
  //   let timer = null;
  //   return (...args) => {
  //     const onComplete = () => {
  //       timer = null;
  //       func(args);
  //     };
  //
  //     if (timer) {
  //       clearTimeout(timer);
  //       timer = setTimeout(onComplete, delay)
  //     } else {
  //       timer = setTimeout(onComplete, delay)
  //     }
  //   };
  // }
  //
  // search() {
  //   console.log('1')
  // }

  render() {
    // console.log(this.props.testStore)

    return (

      <div className="App" onClick={this.searchWithDelay}>
        <h1>This is OUTPUT</h1>
        {this.props.testStore.map((item) => {
          let sunriseSec = item.sys.sunrise;
          let sunsetSec = item.sys.sunset;

          let newSunrise = new Date(sunriseSec);
          let sunrise = newSunrise.getUTCHours() + ":" + newSunrise.getUTCMinutes();

          let newSunset = new Date(sunsetSec);
          let sunset = newSunset.getUTCHours() + ":" + newSunset.getUTCMinutes();

          return <ul className='wrap-item-weather'>
            <h2 className='title-item-weather'>{item.name}</h2>
            <li>
              <h2 className='title-item-weather'>Coord</h2>
              <span className='item-weather'>Lon: {item.coord.lon}</span>
              <span className='item-weather'>Lat: {item.coord.lat}</span>
            </li>

            <li>
              <h2 className='title-item-weather'>Weather</h2>
              <span className='item-weather'>Id: {item.weather[0].id}</span>
              <span className='item-weather'>Main: {item.weather[0].main}</span>
              <span className='item-weather'>Description: {item.weather[0].description}</span>
              <span className='item-weather'>Icon: {item.weather[0].icon}</span>
            </li>

            <li>
              <h2 className='title-item-weather'>Base</h2>
              <span className='item-weather'>Base: {item.base}</span>
            </li>

            <li>
              <h2 className='title-item-weather'>Main</h2>
              <span className='item-weather'>Temp: {Math.ceil((item.main.temp -273.15))} </span>
              <span className='item-weather'>Pressure: {item.main.pressure}</span>
              <span className='item-weather'>Humidity: {item.main.humidity}</span>
              <span className='item-weather'>Temp_min: {Math.ceil((item.main.temp_min -273.15))}</span>
              <span className='item-weather'>Temp_max: {Math.ceil((item.main.temp_max -273.15))}</span>
            </li>

            <li>
              <h2 className='title-item-weather'>Visibility</h2>
              <span className='item-weather'>Temp: {item.visibility.temp}</span>
            </li>
            <li>
              <h2 className='title-item-weather'>Wind</h2>
              <span className='item-weather'>Temp: {item.wind.speed}</span>
              <span className='item-weather'>Deg: {item.wind.deg}</span>
            </li>
            <li>
              <h2 className='title-item-weather'>Clouds</h2>
              <span className='item-weather'>All: {item.clouds.all}</span>
            </li>
            <li>
              <h2 className='title-item-weather'>Dt</h2>
              <span className='item-weather'>Dt: {item.dt}</span>
            </li>
            <li>
              <h2 className='title-item-weather'>Sys</h2>
              <span className='item-weather'>Type: {item.sys.type}</span>
              <span className='item-weather'>Id: {item.sys.id}</span>
              <span className='item-weather'>Message: {item.sys.message}</span>
              <span className='item-weather'>Sunrise: {sunrise + ':00'}</span>
              <span className='item-weather'>Sunset: {sunset + ':00'}</span>
            </li>

            <li>
              <h2 className='title-item-weather'>Id</h2>
              <span className='item-weather'>Id: {item.id}</span>
            </li>
            <li>
              <h2 className='title-item-weather'>Cod</h2>
              <span className='item-weather'>Cod: {item.cod}</span>
            </li>

          </ul>
        })}
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
  // dispatch => {
  //   return ({
  //     onAddValue: data => {
  //       console.log(data)
  //       dispatch({type: 'ADD_TASK', payload: data})
  //     },
  //   })
  // }
)(OutPut);
