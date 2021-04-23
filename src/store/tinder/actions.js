import store from "./../index";
import { usersdb } from "../../firebase/config";
export default {
	async getPets() {
		console.log("getting pets");
		let results = await store.dispatch("getPetsInShelter", {
			shelterID: store.getters.getSelectedShelter,
		});
		let array = [];
		results.forEach((doc) => {
			console.log(doc.id, " => ", doc.data().image);
			// array.push(doc.data().image);
			array.push({ image: doc.data().image, petID: doc.data().petID });
		});
		return array;
	},
	async getFavorites(ctx, payload) {
		const userRef = usersdb.doc(store.getters.getUID);
		const doc = await userRef.get();
		if (!doc.exists) {
			console.log("No such document!");
		} else {
			await userRef.update({
				favorites: [...new Set([...doc.data().favorites, payload.value])],
			});
		}
	},
};
