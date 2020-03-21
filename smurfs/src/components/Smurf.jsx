import React from 'react';
import SmurfState from '../services/SmurfState';

const Smurf = props => {
  const smurf = props.smurf;

  const handleEdit = () => {
    SmurfState.setEditSmurf(smurf);
  }

  const handleDelete = () => {
    SmurfState.deleteSmurf(smurf.id);
  }

  return (
    <div>
      <h3>{smurf.name}</h3>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Smurf;
