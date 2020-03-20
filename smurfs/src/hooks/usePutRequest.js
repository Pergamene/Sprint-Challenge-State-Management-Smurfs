import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = new URL('http://localhost:3333/smurfs');

export const usePutRequest = (id, editSmurf) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const editData = async () => {
      axios.put(`${baseURL}/${id}`).then(response => {
        setResponse(response.data);
      }).catch(error => {
        setError(error);
      });
    };
    if (editSmurf) {
      editData();
    }
  }, [editSmurf, id]);
  return { response, error };
};
