import { createStore } from "vuex";
import authmutations from "./auth/mutations";
import authactions from "./auth/actions";
import authgetter from "./auth/getters";
import dbactions from "./db/actions";
import tinderactions from "./tinder/actions";

export default createStore({
	state: {
		loginUserState: false,
		profileName: "",
		email: "",
		uid: "",
		iscustomer: false,
		selectedShelter: 1, //shelterID
		ownedShelterID: 1,
		selectedPetID: 1,
		selectedEmail: "",
		page: "",
	},
	mutations: {
		...authmutations,
	},
	actions: {
		...authactions,
		...dbactions,
		...tinderactions,
	},
	getters: {
		...authgetter,
	},
	modules: {},
});
