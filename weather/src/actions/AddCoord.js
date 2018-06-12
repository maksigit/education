export default function AddCoord (dispatch, lat, lng) {

  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=19645c0082215d24540dff22a0607971`)
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      } else {
        // throw(alert(response.statusText + ' city ' + `"${city}"`))
        throw response.statusText + ' city ' + `"${lat}"`
      }
    })
    .then((values) => {
      console.log('second then',values);
      dispatch({type: 'ADD_COORD', payload: values});
      // toLs(city)
    })
    .catch((e) => {
      alert(e)
    });
};

function toLs(city) {
  let fromLocal = localStorage.getItem('city');
  let fromLocalParce = fromLocal ? JSON.parse(fromLocal) : [];
  // let arrCity = fromLocalParce ? fromLocalParce : ggg(fromLocalParce, city);

  if (fromLocalParce) {
    let boolCity = fromLocalParce.find(item => {
      return item === city
    });

    if (!boolCity) {
      fromLocalParce.push(city);
      localStorage.setItem('city', JSON.stringify(fromLocalParce));
    }
  } else {
    fromLocalParce.push(city);
    localStorage.setItem('city', JSON.stringify(fromLocalParce));
  }
}
