import { SET_VILLAGE } from './actions';

const initialState = {
  village: [],
  smurf: {
    name: '',
    age: '',
    height: '',
  },
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
