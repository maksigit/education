
export default function getPosts(dispatch) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      return response.json()
    })
    .then((values) => {
      // console.log('ggg', values);
      dispatch({type: 'ADD_POST', payload: values})

    });
}