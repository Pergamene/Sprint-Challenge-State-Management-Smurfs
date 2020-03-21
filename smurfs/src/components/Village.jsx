import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useGetRequest } from '../hooks/useGetRequest';
import { setVillage } from '../redux/actions';

import SmurfForm from './SmurfForm';
import Smurf from './Smurf';

const Village = () => {
  const dispatch = useDispatch();
  const { village } = useSelector(state => state);
  const { data } = useGetRequest();

  useEffect(() => {
    dispatch(setVillage(data));
  }, [data, dispatch]);

  if(village.length > 0) {
    return (
      <div>
        <h2>Village</h2>
        <SmurfForm />
        {village.map(smurf => {
          return <Smurf data={smurf} key={smurf.id} />
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Village</h2>
        <SmurfForm />
      </div>
    );
  }
};

export default Village;
