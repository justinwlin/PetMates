import { auth, usersdb, storesdb, imgstore } from "../../firebase/config";
import store from "./../index";
export default {
	async loginUser({ commit }, payload) {
		console.log(commit);
		let usercred = null;
		try {
			usercred = await auth.signInWithEmailAndPassword(
				payload.username,
				payload.password
			);
		} catch (err) {
			alert("invalid login");
			return;
		}
		console.log(usercred.user.uid);
		const doc = await (await usersdb.doc(usercred.user.uid).get()).data();
		commit("customerLogin", {
			name: doc.name,
			email: payload.username,
			uid: usercred.user.uid,
			customer: doc.customer,
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
				alert("problem registering pls try again");
				console.log(err);
				// alert("Error in registering: " + err.message);
				return;
			};
		}
		// storing user information in vuex state
		await usersdb.doc(userCred.user.uid).set({
			email: payload.username,
			name: payload.name,
			customer: true,
		});

		//updating firebase profile name for the user
		await userCred.user.updateProfile({
			displayName: payload.name,
		});
		commit("customerLogin", {
			name: payload.name,
			email: payload.username,
			uid: userCred.user.uid,
			customer: true,
		});
	},
	async registerShelter({ commit }, payload) {
		//     console.log(commit)
		//     console.log(payload)
		let userCred = null;
		let shelterID = Math.floor(Math.random() * 1000000);
		//    //Registering the User;
		try {
			userCred = await auth.createUserWithEmailAndPassword(
				payload.email,
				payload.password
			);
		} catch {
			(err) => {
				alert("problem registering pls try again");
				console.log(err);
				// alert("Error in registering: " + err.message);
				return;
			};
		}
		console.log(userCred, shelterID);
		if (userCred.user.uid == null) {
			alert("Something went wrong registering pls try again");
			return;
		}
		// storing user information in users table
		await usersdb.doc(userCred.user.uid).set({
			email: payload.email,
			name: payload.name,
			customer: false,
			shelterID: shelterID,
		});

		let res = await store.dispatch("addStores", {
			shelterID: shelterID, //number
			name: payload.nameOfShelter,
			description: payload.description,
			state: payload.state,
			city: payload.city,
			street: payload.street,
			zipcode: payload.zipcode,
			likes: 0,
			dislike: 0,
		});

		let filePath = "stores/" + res.id;
		let imgRef = imgstore.ref().child(filePath);
		await imgRef.put(payload.file);
		let downloadUrl = await imgRef.getDownloadURL();
		await storesdb.doc(res.id).update({ image: downloadUrl });

		commit("shelterLogin", {
			name: payload.name,
			email: payload.email,
			uid: userCred.user.uid,
			customer: false,
		});
	},
};
