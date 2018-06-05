
export function rPosts(state = [], action) {
  // const item = {id: i++, title: action.payload, completed: false};
  if (action.type === 'ADD_POST') {
    return [
      ...action.payload
    ];

  } else {
    return state
  }
}
export function rGalery(state = [], action) {
  // const item = {id: i++, title: action.payload, completed: false};
  if (action.type === 'ADD_GALERY') {
    return [
      ...action.payload
    ];

  } else {
    return state
  }
}

export function rUsers(state = [], action) {
  // const item = {id: i++, title: action.payload, completed: false};
  if (action.type === 'ADD_USERS') {
    return [
      ...action.payload
    ];

  } else {
    return state
  }
}
export function rAlbum(state = [], action) {
  // const item = {id: i++, title: action.payload, completed: false};
  if (action.type === 'ADD_ALBUM') {
    return [
      ...action.payload
    ];

  } else {
    return state
  }
}

