<template>
  <div id="container">
    <!-- Pet Image -->
    <div>
      <img id="image" :src="petImage" />
    </div>
    <h1>{{petData.name}}</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Month</th>
        <th>Day</th>
        <th>Year</th>
        <th>Neutered</th>
        <th>Notes</th>
        <th>Special Needs</th>
      </tr>
      <tr>
        <td>{{petData.name}}</td>
        <td>{{petData.gender}}</td>
        <td>{{petData.month}}</td>
        <td>{{petData.day}}</td>
        <td>{{petData.year}}</td>
        <td>{{petData.neutered}}</td>
        <td>{{petData.notes}}</td>
        <td>{{petData.specialneeds}}</td>
      </tr>
      <!-- {{petData}} -->
    </table>
    <!-- Pet Description -->
    <p>{{ petDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      petImage: "",
      petDescription: "",
      shelterState: "",
      shelterStreet: "",
      shelterCity: "",
      shelterZipcode: "",
      petShelterID: "",
      petData: "",
    };
  },
  async created() {
    console.log(this.$store.getters.getSelectedPet);
    const snapshot = await this.$store.dispatch("getPetByPetID", {
      petID: this.$store.getters.getSelectedPet,
    });
    if (snapshot.empty) {
      console.log("No matching pets with that ID found.");
    } else {
      snapshot.forEach((doc) => {
        const data = doc.data();
        this.petData = data;
        this.petImage = data.image;
        this.petDescription = data.description;
        this.petShelterID = data.shelterID;
      });
    }

    const shelterSnapshot = await this.$store.dispatch("getShelter", {
      shelterID: this.$store.getters.getSelectedShelter,
    });
    if (shelterSnapshot.empty) {
      console.log("No such shelter document!");
    } else {
      shelterSnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        this.shelterState = data.state;
        this.shelterStreet = data.street;
        this.shelterCity = data.city;
        this.shelterZipcode = data.zipcode;
      });
    }
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
.shelterTools {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
.petList {
  outline: 2px solid black;
}

#image {
  width: 50%;
  height: auto;
}

#container {
  width: 50%;
  text-align: center;
  margin: auto;
  border: 5px dashed pink;
}
</style>