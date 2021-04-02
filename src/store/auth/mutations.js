export default {
    loginMutation(state, payload) {
        state.loginUserState = true;
        state.profileName = payload.name;
        state.email = payload.email;
        state.uid = payload.uid;
        console.log(state);
    }
}