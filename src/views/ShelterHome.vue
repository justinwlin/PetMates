<template>
  <div class="home">
    <!-- SHELTER INFO -->
    <el-row class="shelterTools" v-for="shelter in shelterData" v-bind:key="shelter">
      >
      <div>
        <p>Shelter Name</p>
        {{ shelter.name }}
      </div>
      <div>
        <p>Shelter Image</p>
      </div>
      <div>
        <p>Shelter Description</p>
        {{ shelter.description }}
      </div>
      <div>
        <p>Shelter Like</p>
        {{ shelter.likes }}
      </div>
      <div>
        <p>Shelter Dislike</p>
        {{ shelter.dislike }}
      </div>
    </el-row>

    <!-- CHANGE DESCRIPTION -->
    <p>
      <input v-model="newDescription" placeholder="Change Shelter Description: " />
    </p>
    <el-button type="primary" v-on:click="changeDescription()">Change Description</el-button>

    <!-- REMOVE PET -->
    <p>
      <input v-model="removeThisPetID" placeholder="Enter Pet ID: " />
    </p>
    <el-button type="primary" v-on:click="removePet()">Remove Pet</el-button>

    <!-- ADD PET -->
    <el-button type="primary">Add Pet</el-button>
    <!-- redirect to add pet form page -->

    <!-- LIST OF PETS -->
    <div class="petList">
      <ul id="array-rendering">
        <li v-for="pet in petData" v-bind:key="pet">
          {{ pet.name }}
          {{ pet.description}}
        </li>
      </ul>
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
      shelterData: [],
      newDescription: "",
      removeThisPetID: "",
    };
  },
  created() {
    (async () => {
      const petSnapshot = await this.$store.dispatch("getPetsInShelter", {
        shelterID: this.$store.getters.getSelectedShelter,                  
      });
      const shelterSnapshot = await this.$store.dispatch("getShelter", {
        shelterID: this.$store.getters.getSelectedShelter,
      });

      if (petSnapshot.empty) {
        console.log('No such pet document!');
      } else {
        petSnapshot.forEach(doc => {
          this.petData.push(doc.data());
        });
      }
      if (shelterSnapshot.empty) {
        console.log('No such shelter document!');
      } else {
        shelterSnapshot.forEach(doc => {
          this.shelterData.push(doc.data());
        });
      }
    })();
  },
  computed: {
    stateCheck() {
      return this.$store.state;
    },
  },
  methods: {
    async removePet() {
      const snapshot = await this.$store.dispatch("getPetByPetID", {
        petID: parseInt(this.removeThisPetID)
      });
      if (snapshot.empty) {
        console.log('No matching pets with that ID to be removed.');
      } else {
        snapshot.forEach(doc => {
          doc.ref.delete();
        });
      }
      return;
    },

    async changeDescription() {
      const snapshot = await this.$store.dispatch("getShelter", {
        shelterID: this.$store.getters.getSelectedShelter,
      });
      if (snapshot.empty) {
        console.log('No matching shelter with that ID to find.');
      } else {
        snapshot.forEach(doc => {
          doc.ref.update({description: this.newDescription});
        });
      }
      return;
    },
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