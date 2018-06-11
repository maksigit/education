export default function ToStore(state = [], action) {

  if (action.type === 'ADD_CITY') {
    return [
      ...state,
      action.payload,
    ];

  }

  return state
}