import store from '../redux/store';
import { setVillage, setEditSmurf, setSmurf } from '../redux/actions';

import SmurfService from './SmurfService';
// Controller
class SmurfState {
  async fetchVillage() {
    const village = await SmurfService.fetchVillage();
    store.dispatch(setVillage(village));
  }

  async setEditSmurf(smurf) {
    store.dispatch(setEditSmurf(true));
    store.dispatch(setSmurf(smurf));
  }

  async deleteSmurf(id) {
    const village = await SmurfService.deleteSmurf(id);
    store.dispatch(setVillage(village));
  }

  async cancelEditSmurf() {
    store.dispatch(setEditSmurf(false));
    store.dispatch(setSmurf({}));
  }

  async addSmurf(name, age, height) {
    const village = await SmurfService.createSmurf(name, age, height);
    store.dispatch(setVillage(village));
    store.dispatch(setSmurf({}));
  }

  async editSmurf(name, age, height) {
    const state = store.getState();
    const village = await SmurfService.setSmurf(name, age, height, state.smurf.id);
    store.dispatch(setVillage(village));
    store.dispatch(setEditSmurf(false));
    store.dispatch(setSmurf({}));
  }
}

export default new SmurfState();
