export default function AddCity (dispatch, city) { // TODO: Обработка ошибок

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=19645c0082215d24540dff22a0607971`)
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      } else {
        // throw(alert(response.statusText + ' city ' + `"${city}"`))
        throw response.statusText + ' city ' + `"${city}"`
      }
    })
    .then((values) => {
      console.log('second then',values);
      dispatch({type: 'ADD_CITY', payload: values});
      toLs(city)
    })
    .catch((e) => {
      alert(e)
    });
};

// const arrCity = []; // TODO:  винести в toLs

function toLs(city) { // TODO: дадати перевірку, що в LS  вже є дане місто
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
