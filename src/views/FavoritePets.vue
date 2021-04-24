<template>
  <div class="home">
    <div class="PetsTitle">
      <p>Favorite Furry Friends</p>
    </div>

    <!-- LIST OF PETS -->

    <div class="petList">
      <el-row class="pet" v-for="pet in petData" v-bind:key="pet">
        <div>
          <p>Pet Name</p>
          {{ pet.name }}
        </div>
        <div>
          <p>Pet Image</p>
        </div>
        <el-button type="primary" v-on:click="removeFavorite()"
          >Delete</el-button
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      petData: [],
      petIDs: [],
    };
  },
  async created() {
      const snapshot = await this.$store.dispatch("getFavPetsByUID", {
        uid: this.$store.getters.getUID,
      });
      if (snapshot.empty) {
        console.log('No such user was found');
      } else {
        this.petIDs = snapshot.data().favorites;
       
        for (let i = 0; i < this.petIDs.length; i++) {
          const petSnapshot = await this.$store.dispatch("getPetByPetID", {
            petID: this.petIDs[i], 
          });
          if (petSnapshot.empty) {
            console.log("No matching pets with that ID found.");
          } else {
            petSnapshot.forEach((doc) => {
              const data = doc.data();
              this.petData.push(data);
            });
          }
        }
      }
  },
  computed: {
    stateCheck() {
      return this.$store.state;
    },
  },

  methods: {
    async removeFavorite() {
      // need to do routing here according to the selected ShelterID
    },
  },
};
</script>