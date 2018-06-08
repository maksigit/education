export default function AddCity (dispatch, city) {
  // this.toLS(this.trackInput.value);

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=19645c0082215d24540dff22a0607971`)
    .then((response) => {
      console.log(response);
      return response.json()
    })
    .then((values) => {
      console.log(values);
      dispatch({type: 'ADD_CITY', payload: values})
      console.log(values)
      // this.props.setDataCity(values)
    });
};