import load from './ui'

export default function getPosts(dispatch) {
  load('https://jsonplaceholder.typicode.com/posts')
    .then((values) => {
      dispatch({type: 'ADD_POST', payload: values})
    });
}
