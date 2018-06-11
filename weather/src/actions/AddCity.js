export default function AddCity (dispatch, city) { // TODO: Обработка ошибок
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
      toLs(city)
      // this.props.setDataCity(values)
    });
};

const arrCity = []; // TODO:  винести в toLs

function toLs(city) { // TODO: дадати перевірку, що в LS  вже є дане місто
  // const arrCity = JSON.parse(localStorage.getItem('city'));
  arrCity.push(city);
  localStorage.setItem('city', JSON.stringify(arrCity))
}
