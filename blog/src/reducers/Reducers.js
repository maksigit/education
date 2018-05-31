
export default function Posts(state = [], action) {
  // const item = {id: i++, title: action.payload, completed: false};
  if (action.type === 'ADD_POST') {
    return [
      ...action.payload
    ];

  } else {
    return state
  }
}
