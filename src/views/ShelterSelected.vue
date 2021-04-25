<template>
  <div class="home">
    <div class = "flex-container">
      <div class = "cover">
        <img v-bind:src="shelterImage" />
      </div>
      <div class="text">
        <h1>
          {{ shelterName }}
          <el-button>Email Shelter</el-button>
        </h1>
        <div class="like">
          <p>LIKES : {{ likes }} DISLIKES: {{ dislikes }}</p>
        </div>
        <p>
          {{ shelterDescription }}
          <br />
          {{ shelterState }}
          <br />
          {{ shelterStreet }}
          <br />
          {{ shelterCity }}
          <br />
          {{ shelterZipcode }}
          <br />
        </p>
        <div class="pet">
          <el-button type="primary"
          v-on:click="checkOutPets()"
          >CHECK OUT THE PETS</el-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      shelterID:"",
      shelterImage: "",
      shelterName: "",
      shelterDescription: "",
      shelterState: "",
      shelterStreet: "",
      shelterCity: "",
      shelterZipcode: "",
      likes: "",
      dislikes: "",
    };
  },
  async created() {
    const shelterSnapshot = await this.$store.dispatch("getShelter", {
      shelterID: this.$store.getters.getSelectedShelter,
    });
    if (shelterSnapshot.empty) {
      console.log("No such shelter document!");
    } else {
      shelterSnapshot.forEach((doc) => {
        const data = doc.data();
        this.shelterID = data.shelterID
        this.shelterName = data.name;
        this.shelterState = data.state;
        this.shelterStreet = data.street;
        this.shelterCity = data.city;
        this.shelterZipcode = data.zipcode;
        this.likes = data.likes;
        this.dislikes = data.dislike;
        this.shelterImage = data.image;
      });
    }
  },
  methods : {
    async checkOutPets() {
      this.$store.commit("navigatePage",{ page: "petswipe" });
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  object-fit: cover;
}

.pet {
  text-align: left;
}
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>