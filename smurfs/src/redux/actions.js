export const SET_VILLAGE = 'SET_VILLAGE';
export const SET_SMURF = 'SET_SMURF';
export const SET_EDIT_SMURF = 'SET_EDIT_SMURF';

export const setVillage = data => {
  return { type: SET_VILLAGE, payload: data };
};

export const setSmurf = data => {
  return { type: SET_SMURF, payload: data };
};

export const setEditSmurf = data => {
  return { type: SET_EDIT_SMURF, payload: data };
}
