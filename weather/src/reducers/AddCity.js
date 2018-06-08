export default function addCity(state = [], action) {

  if (action.type === 'ADD_CITY') {
    return [
      ...state,
      action.payload,
    ];

  }

  return state
}