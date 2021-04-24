<template>
  <div>
    <!-- NAVIGATION BAR-->
    <div class="navBar center">
      <el-button type="primary">Page 1</el-button>
      <el-button type="primary">Page 2</el-button>
      <el-button type="primary">Page 3</el-button>
      <el-button type="primary">Page 4</el-button>
      <el-button type="success">Current Page</el-button>
      <el-button type="primary">Page 6</el-button>
    </div>

    <div>
      <!-- Pet Image -->
      <div>
        <p>Pet Image</p>
        {{ petImage }}
      </div>
      <!-- Pet Description -->
      <div>
        <p>Pet Description</p>
        {{ petDescription }}
      </div>
      <!-- Shelter Location -->
      <div>
        <p> Shelter Location </p>
        {{ shelterState }} 
        {{ shelterStreet }} 
        {{ shelterCity }} 
        {{ shelterZipcode }}
      </div>
      <!-- Social Media, contact, and schedule not here -->
    </div>
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
    };
  },
  created() {
    (async () => {   
      const snapshot = await this.$store.dispatch("getPetByPetID", {
        petID: this.$store.getters.getSelectedPet            
      });
      if (snapshot.empty) {
        console.log('No matching pets with that ID found.');
      } else {
        snapshot.forEach(doc => {
          const data = doc.data();
          this.petImage = data.image;
          this.petDescription = data.description;
          this.petShelterID = data.shelterID;
        });
      }

      const shelterSnapshot = await this.$store.dispatch("getShelter", {
        shelterID: this.$store.getters.getSelectedShelter
      });
      if (shelterSnapshot.empty) {
        console.log('No such shelter document!');
      } else {
        shelterSnapshot.forEach(doc => {
          const data = doc.data();
          this.shelterState = data.state;
          this.shelterStreet = data.street;
          this.shelterCity = data.city;
          this.shelterZipcode = data.zipcode;
        });
      }
    })();
  }
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
</style>