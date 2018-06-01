
export default function getUsers(dispatch) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      return response.json()
    })
    .then((values) => {
      // console.log('ggg', values);
      dispatch({type: 'ADD_USERS', payload: values})

    });
}
