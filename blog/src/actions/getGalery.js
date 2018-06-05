import load from './ui'

export default function getGalery(dispatch) {
  load('https://jsonplaceholder.typicode.com/albums')
    .then((values) => {
      dispatch({type: 'ADD_GALERY', payload: values})
    });
}
