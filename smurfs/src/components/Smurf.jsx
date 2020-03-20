import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useDeleteRequest } from '../hooks/useDeleteRequest';
import { setVillage } from '../redux/actions';

const Smurf = props => {
  const dispatch = useDispatch();
  const { name, age, height, id } = props.data;
  const [deleteSmurf, setDeleteSmurf] = useState(false);

  const { response } = useDeleteRequest(id, deleteSmurf);

  useEffect(() => {
    if (deleteSmurf) {
      dispatch(setVillage(response));
    }
  }, [deleteSmurf, response, dispatch]);

  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{height}</p>
      <button>Edit</button>
      <button onClick={(() => setDeleteSmurf(true))}>Delete</button>
    </div>
  );
};

export default Smurf;
