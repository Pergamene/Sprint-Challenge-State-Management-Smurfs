import { useEffect, useState } from 'react';
import axios from 'axios';

const baseURL = new URL('http://localhost:3333/smurfs');

export const usePostRequest = smurf => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postData = async () => {
      axios.post(baseURL, smurf).then(response => {
        setResponse(response.data);
      }).catch(error => {
        setError(error);
      });
    };
    if (smurf) {
      postData();
    }
  }, [smurf]);
  return { response, error };
};
