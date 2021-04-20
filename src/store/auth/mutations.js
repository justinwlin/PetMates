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
		console.log(state);
	},
};
