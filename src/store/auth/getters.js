export default {
	loggedInState(state) {
		return state.loginUserState;
	},
	getCurrentPage(state) {
		return state.page;
	},
	getisCustomer(state) {
		return state.iscustomer;
	},
	getSelectedShelter(state) {
		return state.selectedShelter;
	},
	getUID(state) {
		return state.uid;
	},
};
