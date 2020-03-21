import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = new URL('http://localhost:3333/smurfs');

export const useDeleteRequest = (id, deleteSmurf) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const deleteData = async () => {
      axios.delete(`${baseURL}/${id}`).then(response => {
        setResponse(response.data);
      }).catch(error => {
        setError(error);
      });
    };
    if (deleteSmurf) {
      deleteData();
    }
  }, [deleteSmurf, id]);
  return { response, error };
};
