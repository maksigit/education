import React from "react"
import AddCity from "../actions/AddCity";
import {connect} from "react-redux";

import AddCoord from "../actions/AddCoord";

const {compose, withProps} = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  FusionTablesLayer,
} = require("react-google-maps");

const MapWithAFusionTablesLayer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAoBOLr9rMuocICrT1L8gurqiak2Rpx9-s&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: `400px`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)(props =>


  <GoogleMap
    defaultZoom={11}
    defaultCenter={{lat: 49.440563935076376, lng: 32.0641728985338}}
    // onClick={(data) => console.log(data.latLng.lat() + ' ' + data.latLng.lng())}
    onClick={props.setCoordinate}
  >
    <FusionTablesLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{
        query: {
          select: `Geocodable address`,
          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
        }
      }}
    />
  </GoogleMap>
);

export default connect(
  state => {
    console.log('state Input city', state);
    return ({
      testStore: state
    })
  },
  dispatch => {
    return ({
      setCoordinate: (value) => {
        console.log(value);
        let lat = value.latLng.lat();
        let lng = value.latLng.lng();
        return AddCoord(dispatch, lat, lng)
        // dispatch({type: 'ADD_COORD', payload: latLng})
      },
      setCityFromLS: (city) => {

        city.map((item) => {
          return AddCity(dispatch, item)
        });
      }
    })
  }
)(MapWithAFusionTablesLayer);