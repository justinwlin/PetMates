import { petsdb  } from "../../firebase/config";

export default {
    async fetchPets({ commit }, payload) {
        console.log(commit);
        console.log(petsdb)
    }
};
