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

    <div class="PetsTitle">
      <p>Favorite Furry Friends</p>
    </div>

    <!-- LIST OF PETS -->

    <div class="petList">
      <el-row class="pet" v-for="pet in petList" v-bind:key="pet">
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
      petList: [
        {
          name: "Pet 1",
        },
        {
          name: "Pet 2",
        },
      ],
    };
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