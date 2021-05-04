<template>
  <div class="home">
    <div class="flex-container">
      <div class="cover">
        <img v-bind:src="shelterImage" />
      </div>
      <div class="text">
        <h1>
          {{ shelterName }}
          <a
            class="btn"
            v-bind:href="'mailto:'+shelterEmail+'?subject=I want to adopt a pet'"
          >Email Shelter</a>
        </h1>
        <div class="like">
          <p>LIKES : {{ likes }} DISLIKES: {{ dislikes }}</p>
          <el-button type="primary" :disabled="likestate" v-on:click="increaseLike()">Like</el-button>
          <el-button type="primary" :disabled="dislikesstate" v-on:click="increaseDislike()">Dislike</el-button>
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
          <el-button type="primary" v-on:click="checkOutPets()">CHECK OUT THE PETS</el-button>
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
      shelterID: "",
      shelterImage: "",
      shelterName: "",
      shelterDescription: "",
      shelterState: "",
      shelterStreet: "",
      shelterCity: "",
      shelterZipcode: "",
      shelterEmail: "",
      likes: "",
      likestate: false,
      dislikes: "",
      dislikesstate: false,
    };
  },
  async created() {
    const shelterSnapshot = await this.$store.dispatch("getShelter", {
      shelterID: this.$store.getters.getSelectedShelter,
    });
    console.log(shelterSnapshot);
    shelterSnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
      this.shelterID = data.shelterID;
      this.shelterName = data.name;
      this.shelterState = data.state;
      this.shelterStreet = data.street;
      this.shelterCity = data.city;
      this.shelterZipcode = data.zipcode;
      this.likes = data.likes;
      this.dislikes = data.dislike;
      this.shelterImage = data.image;
      if (doc.get("email") === undefined) {
        console.log("Shelter has no email!");
        this.shelterEmail = "exampleemail@gmail.com";
      } else {
        this.shelterEmail = data.email;
      }
    });
  },
  methods: {
    async checkOutPets() {
      this.$store.commit("navigatePage", { page: "petswipe" });
    },
    async increaseLike() {
      this.likes += 1;
      this.likestate = true;
      const shelterSnapshot = await this.$store.dispatch("getShelter", {
        shelterID: this.$store.getters.getSelectedShelter,
      });
      if (shelterSnapshot.empty) {
        console.log("No such shelter document!");
      } else {
        shelterSnapshot.forEach((doc) => {
          const data = doc.data();
          doc.ref.update({ likes: data.likes + 1 });
        });
      }
    },
    async increaseDislike() {
      this.dislikes += 1;
      this.dislikesstate = true;
      const shelterSnapshot = await this.$store.dispatch("getShelter", {
        shelterID: this.$store.getters.getSelectedShelter,
      });
      if (shelterSnapshot.empty) {
        console.log("No such shelter document!");
      } else {
        shelterSnapshot.forEach((doc) => {
          const data = doc.data();
          doc.ref.update({ dislike: data.dislike + 1 });
        });
      }
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
.btn {
  background: #2d2b55;
  border-radius: 6px;
  box-sizing: border-box;
  color: #fad000;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1px;
  margin: 10px 0;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
}
</style>