import { SET_VILLAGE, SET_SMURF, SET_EDIT_SMURF } from './actions';

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
    case SET_VILLAGE:
      if (action.payload === null ) {
        return state;
      }
      return {
        ...state,
        village: [
          ...action.payload,
        ],
      };
    case SET_SMURF:
      return {
        ...state,
        smurf: {
          ...state.smurf,
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height,
        }
      };
    case SET_EDIT_SMURF:
      const { smurf } = action.payload;
      return {
        ...state,
        smurf: {
          ...state.smurf,
          name: smurf.name,
          age: smurf.age,
          height: smurf.height,
        },
        editSmurf: action.payload.editSmurf,
      }
    default:
      return state;
  }
};
