import { petsdb, storesdb, imgstore } from "../../firebase/config";
export default {
	async addPets(
		ctx,
		{
			day,
			description,
			name,
			gender,
			month,
			neutered,
			notes,
			shelterID,
			specialNeeds,
			year,
			image,
		}
	) {
		const res = await petsdb.add({
			day: day, //Int
			description: description, //string
			gender: gender, //string
			image: null, //array of url images?
			month: month, //int
			neutered: neutered, //boolean
			notes: notes, //string
			shelterID: shelterID, //it
			specialNeeds: specialNeeds, //string
			year: year, //int
			name: name,
			petID: Math.floor(Math.random() * 1000000000),
		});
		let filePath = "pets/" + res.id;
		let imgRef = imgstore.ref().child(filePath);
		await imgRef.put(image);
		let downloadUrl = await imgRef.getDownloadURL();
		await petsdb.doc(res.id).update({ image: downloadUrl });
		return;
	},

	async addStores(
		ctx,
		{
			shelterID,
			name,
			description,
			state,
			city,
			street,
			zipcode,
			likes,
			dislike,
		}
	) {
		return await storesdb.add({
			shelterID: shelterID, //number
			name: name, //string
			description: description, //string
			state: state, //string
			city: city, //string
			street: street, //string
			zipcode: zipcode, //number
			likes: likes, //number
			dislike: dislike, //number
			image: "", // a string url
		});
	},
	async getPetByPetID(ctx, { petID }) {
		return await petsdb.where("petID", "==", petID).get();
	},

	async getPetsInShelter(ctx, { shelterID }) {
		return await petsdb.where("shelterID", "==", shelterID).get();
	},

	async getShelter(ctx, { shelterID }) {
		return await storesdb.where("shelterID", "==", shelterID).get();
	},

	async getShelters() {
		return await storesdb.get();
	},
};
