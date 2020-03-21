import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import SmurfState from '../services/SmurfState';

import SmurfForm from './SmurfForm';
import Smurf from './Smurf';

const Village = () => {
  const { village } = useSelector(state => state);

  useEffect(() => {
    SmurfState.fetchVillage();
  }, []);

  return (
    <div>
      <h2>Village</h2>
      <SmurfForm />
      {!!village.length && village.map(smurf => {
        return <Smurf smurf={smurf} key={smurf.id} />
      })}
    </div>
  );
};

export default Village;
