
export default function getGalery(dispatch) {
  fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then((response) => {
      return response.json()
    })
    .then((values) => {
      // console.log('ggg', values);
      dispatch({type: 'ADD_GALERY', payload: values})

    });
}
