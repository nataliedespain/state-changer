const nameChanger = (state = {name: 'Natalie'}, action) => {

  let nextState = {name: state.name}

  switch (action.type) {
    case 'CHANGE_NAME':
      nextState.name = action.newName;
      return nextState;
    default:
      return state;
  }
}

export default nameChanger
