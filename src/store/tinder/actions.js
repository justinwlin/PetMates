import store from "./../index";
export default {
	async getPets() {
		console.log("getting pets");
		let results = await store.dispatch("getPetsInShelter", {
			shelterID: store.getters.getSelectedShelter,
		});
		let array = [];
		results.forEach((doc) => {
			console.log(doc.id, " => ", doc.data().image);
			array.push(doc.data().image);
		});
		console.log(array);
		return array;
	},
};
