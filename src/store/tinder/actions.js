import { petsdb } from "../../firebase/config";
import store from "./../index";
export default {
	async fetchPets({ commit }, payload) {
		console.log(commit, payload, petsdb);
		console.log(store.getters.getSelectedShelter);
	},
};
