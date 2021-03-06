import { auth, usersdb, storesdb, imgstore } from "../../firebase/config";
import store from "./../index";
import axios from "axios";
export default {
	async loginUser({ commit }, payload) {
		console.log(commit);
		let usercred = null;
		try {
			payload = {
				username: payload.username,
				password: payload.password,
			};
			usercred = await axios.post(
				"https://pythonseniordesign.herokuapp.com/login",
				{
					username: payload.username,
					password: payload.password,
				}
			);
			usercred = usercred["data"];
			if (usercred == false) {
				alert("invalid login");
				return;
			}
		} catch (err) {
			alert("invalid login");
			return;
		}
		const doc = await (await usersdb.doc(usercred.localId).get()).data();
		console.log(doc);
		let shelterID = "";
		if (doc.shelterID) {
			shelterID = doc.shelterID;
			commit("setShelterID", { shelterID: shelterID });
		}

		console.log(doc.customer);
		if (doc.customer) {
			commit("navigatePage", {
				page: "shelterselection",
			});
			commit("customerLogin", {
				name: doc.name,
				email: payload.username,
				uid: usercred.localId,
				customer: doc.customer,
			});
		} else {
			commit("navigatePage", {
				page: "shelterhome",
			});
			commit("shelterLogin", {
				name: doc.name,
				email: payload.username,
				uid: usercred.localId,
				customer: doc.customer,
				shelterID: doc.shelterID,
			});
		}
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
			favorites: [],
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
			favorites: [],
		});
		commit("navigatePage", {
			page: "shelterselection",
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
			email: payload.email,
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
			shelterID: shelterID,
		});
		commit("navigatePage", {
			page: "shelterhome",
		});
	},
};
