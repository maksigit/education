import load from './ui'

export default function getPhoto(dispatch, id) {
  load('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
    .then((values) => {
      dispatch({type: 'ADD_ALBUM', payload: values})
    });
}
