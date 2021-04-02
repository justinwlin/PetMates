import { petsdb, storesdb } from "../../firebase/config";
export default {
    async addPets(ctx, { day, description, gender, month, neutered, notes, petID, shelterID, specialNeeds, year }) {
        await petsdb.add({
            day: day,//Int
            description: description,//string
            gender: gender,//string
            images: null,//array of url images?
            month: month,//int
            neutered: neutered,//boolean
            notes: notes,//string
            petID: petID,//int
            shelterID: shelterID,//it
            specialNeeds: specialNeeds,//string
            year: year//int
        });
        return;
    },

    async addStores(ctx, { shelterID, name, description, state, city, street, zipcode, likes, dislike, images, haveDogs, haveCats }) {
        console.log('test');
        await storesdb.add({
            shelterID: shelterID,//number
            name: name,//string
            description: description,//string
            state: state,//string
            city: city,//string
            street: street,//string
            zipcode: zipcode,//number
            likes: likes,//number
            dislike: dislike,//number
            images: images,//array of strings
            haveCats: haveCats,//boolean
            haveDogs: haveDogs//boolean
        });
        return;
        // EX way to write to the store
        // this.$store.dispatch("addStores", {
        //   shelterID: 3,
        //   name: "sheltera",
        //   description: "description",
        //   state: "california",
        //   city: "san diego",
        //   street: "rainbow road",
        //   zipcode: 92620,
        //   likes: 10,
        //   dislike: 10,
        //   images: [],
        //   haveCats: true,
        //   haveDogs: false,
        // });
    }
};