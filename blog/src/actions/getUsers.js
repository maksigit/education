import load from './ui'

export default function getUsers(dispatch) {
  load('https://jsonplaceholder.typicode.com/users')
    .then((values) => {
      dispatch({type: 'ADD_USERS', payload: values})
    });
}
