export default {
    loginMutation(state, payload) {
        state.loginUserState = true;
        state.profileName = payload.name;
        state.email = payload.email;
        console.log(state);
    }
}