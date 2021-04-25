export default {
	customerLogin(state, payload) {
		state.loginUserState = true;
		state.profileName = payload.name;
		state.email = payload.email;
		state.uid = payload.uid;
		state.iscustomer = payload.customer;
		console.log(state);
	},
	shelterLogin(state, payload) {
		state.loginUserState = true;
		state.profileName = payload.name;
		state.email = payload.email;
		state.uid = payload.uid;
		state.iscustomer = payload.customer;
		state.ownedShelterID = payload.shelterID;
		console.log(state);
	},
	setShelterID(state, payload) {
		state.ownedShelterID = payload.shelterID;
	},
	navigatePage(state, { page }) {
		state.page = page;
	},

	setSelectedShelter(state, payload) {
		state.selectedShelter = payload.shelterID;
	}
};
