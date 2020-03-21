import axios from 'axios';

const baseURL = new URL('http://localhost:3333/smurfs');
// Model
class SmurfService {
  async fetchVillage() {
    const response = await axios.get(baseURL);
    return response.data;
  }

  async deleteSmurf(id) {
    const response = await axios.delete(baseURL + '/' + id);
    return response.data;
  }

  async setSmurf(name, age, height, id) {
    const response = await axios.put(baseURL + '/' + id, { name, age, height });
    return response.data;
  }

  async createSmurf(name, age, height) {
    const response = await axios.post(baseURL, { name, age, height });
    return response.data;
  }
}

export default new SmurfService();
