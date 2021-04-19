<template>
  <div class="home">
    <!-- NAVIGATION BAR-->
    <div class="navBar center">
      <el-button type="primary">Page 1</el-button>
      <el-button type="primary">Page 2</el-button>
      <el-button type="primary">Page 3</el-button>
      <el-button type="primary">Page 4</el-button>
      <el-button type="success">Current Page</el-button>
      <el-button type="primary">Page 6</el-button>
    </div>

    <!-- SHELTER INFO -->
    <el-row class="shelterTools">
      <div>
        <p>Shelter Name</p>
        {{ shelterData[name] }}
      </div>
      <div>
        <p>Shelter Image</p>
    
      </div>
      <div>
        <p>Shelter Description</p>
        {{ shelterData[description] }}
      </div>
      <div>
        <p>Shelter Like</p>
        {{ shelterData[likes] }}
      </div>
       <div>
        <p>Shelter Dislike</p>
        {{ shelterData[dislike] }}
      </div>
    </el-row>

    <!-- CHANGE DESCRIPTION -->
    <p>
      <input v-model="newDescription" placeholder="Change Shelter Description: ">
    </p>
    <el-button type="primary" v-on:click="changeDescription()">Change Description</el-button>

    <!-- REMOVE PET -->
    <p>
      <input v-model="removeThisPetID" placeholder="Enter Pet ID: ">
    </p>
    <el-button type="primary" v-on:click="removePet()">Remove Pet</el-button>

    <!-- ADD PET -->
    <el-button type="primary">Add Pet</el-button>   <!-- redirect to add pet form page -->

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
      shelterData: {
        name: "",
        description: "",
        likes: "",
        dislike: ""
      },
      shelterDescription: "",
      removeThisPetID: "",
    }
  },
  created() {
    try {
        const petDoc = await this.$store.dispatch("getPets", {
          shelterID: 1,                   //need persistence of pet shelter first. Code as 1 for now
        });
        const shelterDoc = await this.$store.dispatch("getShelter", {
          shelterID: 1,                   //need persistence of pet shelter first. Code as 1 for now
        });
        if (!petDoc.exists) {
          console.log('No such pet document!');
        } else {
          this.petData = petDoc.data();
        }
        if (!shelterDoc.exists) {
          console.log('No such shelter document!');
        } else {
          this.shelterData = shelterDoc.data();
        }
      } catch (err) {
        console.log(err);
      }
  },
  computed: {
    stateCheck() {
      return this.$store.state;
    },
  },
  methods: {
    async removePet() {
      await this.$store.dispatch("removePet", {
        petID: this.removeThisPetID
      });
    },

    async changeDescription() {
      await this.$store.dispatch("updateShelterDescription", {
        shelterID: 1,                   //need persistence of pet shelter first. Code as 1 for now
        description: newDescription
      });
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