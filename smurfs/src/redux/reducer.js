import { SET_VILLAGE, SET_SMURF, SET_EDIT_SMURF } from './actions';

const initialState = {
  village: [],
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
    default:
      return state;
  }
};
