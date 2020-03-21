export const SET_VILLAGE = 'SET_VILLAGE';
export const SET_SMURF = 'SET_SMURF';
export const SET_EDIT_SMURF = 'SET_EDIT_SMURF';

export const setVillage = village => {
  return { type: SET_VILLAGE, village };
};

export const setSmurf = smurf => {
  return { type: SET_SMURF, smurf };
};

export const setEditSmurf = editSmurf => {
  return { type: SET_EDIT_SMURF, editSmurf };
};
