const defaultState = {
  user: null
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}