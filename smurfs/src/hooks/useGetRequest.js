import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = new URL('http://localhost:3333/smurfs');

export const useGetRequest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      axios.get(baseURL).then(response => {
        setData(response.data);
      }).catch(error => {
        setError(error);
      });
    };
    getData();
  }, []);
  return { data, error };
};
