import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usePostRequest } from '../hooks/usePostRequest';
import { usePutRequest } from '../hooks/usePutRequest';
import { setVillage, setSmurf } from '../redux/actions';

const SmurfForm = () => {
  const dispatch = useDispatch();
  const { smurf, editSmurf } = useSelector(state => state);
  const [name, setName] = useState(smurf.name);
  const [age, setAge] = useState(smurf.age);
  const [height, setHeight] = useState(smurf.height);
  const [newSmurf, setNewSmurf] = useState(null);

  const postResponse = usePostRequest(newSmurf, editSmurf).response;
  const putResponse = usePutRequest(newSmurf, editSmurf).response;
  

  useEffect(() => {
    if(newSmurf) {
      dispatch(setVillage(postResponse));
    }
  }, [newSmurf, postResponse, dispatch]);

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

  const handleSubmit = event => {
    event.preventDefault();
    const smurfData = {
      name: name,
      age: age,
      height: height,
    };
    setNewSmurf(smurfData);
    setName(smurf.name);
    setAge(smurf.age);
    setHeight(smurf.height);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={handleNameChange} />
      <input placeholder="Age" value={age} onChange={handleAgeChange} />
      <input placeholder="Height" value={height} onChange={handleHeightChange} />
      <button type="submit">Add Smurf</button>
    </form>
  );
}

export default SmurfForm;
