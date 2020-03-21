import * as Actions from './actions';

const initialState = {
  village: [],
  smurf: {
    name: '',
    age: '',
    height: '',
    id: '',
  },
  editSmurf: false,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case Actions.SET_VILLAGE:
      return {
        ...state,
        village: [...action.village],
      };
    case Actions.SET_SMURF:
      return {
        ...state,
        smurf: {
          ...state.smurf,
          name: action.smurf.name || '',
          age: action.smurf.age || '',
          height: action.smurf.height || '',
          id: action.smurf.id || '',
        },
      };
    case Actions.SET_EDIT_SMURF:
      return {
        ...state,
        editSmurf: action.editSmurf,
      };
    default:
      return state;
  }
};
