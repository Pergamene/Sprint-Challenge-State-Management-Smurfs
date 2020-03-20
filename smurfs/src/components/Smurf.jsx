import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDeleteRequest } from '../hooks/useDeleteRequest';
import { setVillage, setSmurf, setEditSmurf } from '../redux/actions';

const Smurf = props => {
  const dispatch = useDispatch();
  const { name, age, height, id } = props.data;
  const { editSmurf } = useSelector(state => state);
  const [deleteSmurf, setDeleteSmurf] = useState(false);

  const { response } = useDeleteRequest(id, deleteSmurf);

  const dispatchEditSmurf = () => {
    dispatch(setEditSmurf({ smurf: { name, age, height, id } , status: true}));
  }

  useEffect(() => {
    if (deleteSmurf) {
      dispatch(setVillage(response));
    }
  }, [deleteSmurf, response, dispatch]);

  // useEffect(() => {
  //   if (editSmurf) {
  //     setSmurf({
  //       name: name,
  //       age: age,
  //       height: height,
  //       id: id,
  //     })
  //   }
  // }, [editSmurf, name, age, height, id]);

  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{height}</p>
      <button onClick={dispatchEditSmurf}>Edit</button>
      <button onClick={() => setDeleteSmurf(true)}>Delete</button>
    </div>
  );
};

export default Smurf;
