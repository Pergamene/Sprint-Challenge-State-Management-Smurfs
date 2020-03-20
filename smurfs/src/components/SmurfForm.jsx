import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { usePostRequest } from '../hooks/usePostRequest';
import { setVillage } from '../redux/actions';

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [smurf, setSmurf] = useState(null);

  const { response } = usePostRequest(smurf);

  useEffect(() => {
    if(smurf) {
      dispatch(setVillage(response));
    }
  }, [smurf, response, dispatch]);

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
    setSmurf({
      name: name,
      age: age,
      height: height,
    });
    setName('');
    setAge('');
    setHeight('');
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
