import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SmurfState from '../services/SmurfState';

const SmurfForm = () => {
  const { smurf, editSmurf } = useSelector(state => state);
  const [name, setName] = useState(smurf.name);
  const [age, setAge] = useState(smurf.age);
  const [height, setHeight] = useState(smurf.height);

  useEffect(() => {
    setName(smurf.name);
    setAge(smurf.age);
    setHeight(smurf.height);
  }, [smurf]);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleAgeChange = event => {
    setAge(event.target.value);
  };

  const handleHeightChange = event => {
    setHeight(event.target.value);
  };

  const handleAddSmurf = event => {
    event.preventDefault();
    SmurfState.addSmurf(name, age, height);
  };

  const handleEditSmurf = () => {
    SmurfState.editSmurf(name, age, height);
  }

  const handleCancelEdit = () => {
    SmurfState.cancelEditSmurf();
  }

  return (
    <form onSubmit={handleAddSmurf}>
      <input placeholder="Name" value={name} onChange={handleNameChange} />
      <input placeholder="Age" value={age} onChange={handleAgeChange} />
      <input placeholder="Height" value={height} onChange={handleHeightChange} />
      {!!editSmurf &&
        <React.Fragment>
          <button onClick={handleEditSmurf}>Edit Smurf</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </React.Fragment>
      }
      {!editSmurf &&
        <button type="submit">Add Smurf</button>
      }
    </form>
  );
}

export default SmurfForm;
