import { auth, usersdb } from "../../firebase/config";

export default {
    async loginUser({ commit }, payload) {
        console.log(commit);
        let usercred = null;
        try {
            usercred = await auth.signInWithEmailAndPassword(payload.username, payload.password);
        } catch (err) {
            alert('invalid login');
            return;
        }
        console.log(usercred.user.uid);
        const doc = await (await usersdb.doc(usercred.user.uid).get()).data();
        commit("loginMutation", {
            name: doc.name,
            email: payload.username,
            uid: usercred.user.uid
        });
    },

    async registerUser({ commit }, payload) {
        console.log(payload);
        let userCred = null;
        console.log(auth, usersdb);
        //Registering the User;
        try {
            userCred = await auth.createUserWithEmailAndPassword(
                payload.username,
                payload.password
            );
        } catch {
            (err) => {
                alert('problem registering pls try again');
                console.log(err);
                // alert("Error in registering: " + err.message);
                return;
            };
        }
        // storing user information in vuex state
        await usersdb.doc(userCred.user.uid).set({
            email: payload.username,
            name: payload.name
        });

        //updating firebase profile name for the user
        await userCred.user.updateProfile({
            displayName: payload.name
        });
        commit("loginMutation", {
            name: payload.name,
            email: payload.username,
            uid: userCred.user.uid
        });
    }
};
