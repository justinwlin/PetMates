<template>
  <div class="home">
    <div class="shelterTitle">
      <p>Available Shelters</p>
    </div>

    <!-- LIST OF SHELTERS -->

    <div class="shelterList">
      <el-row class="shelter" v-for="shelter in shelterList" v-bind:key="shelter">
        <div>
          <p>Shelter Name</p>
          {{ shelter.name }}
        </div>
        <div>
          <p>Shelter Image</p>
        </div>
        <div>
          <p>Shelter Like</p>
          {{ shelter.like }}
        </div>
        <div>
          <p>Shelter Dislike</p>
          {{ shelter.dislike }}
        </div>
        <el-button type="primary" v-on:click="seeShelterDetails()">See More</el-button>
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
      shelterList: [
        {
          name: "Shelter 1",
          like: 23,
          dislike: 5,
        },
        {
          name: "Shelter 2",
          like: 100,
          dislike: 15,
        },
        {
          name: "Shelter 3",
          like: 100,
          dislike: 15,
        },
        {
          name: "Shelter 4",
          like: 100,
          dislike: 15,
        },
        {
          name: "Shelter 5",
          like: 100,
          dislike: 15,
        },
        {
          name: "Shelter 6",
          like: 100,
          dislike: 15,
        },
        {
          name: "Shelter 7",
          like: 100,
          dislike: 15,
        },
        {
          name: "Shelter 8",
          like: 100,
          dislike: 15,
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
    async seeShelterDetails() {
      // need to do routing here according to the selected ShelterID
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin: 1rem;
}

.shelter {
  justify-content: center;
  margin: 2rem;
  min-width: 25%;
}

.shelterList {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: solid black;
}

.shelterTitle {
  display: flex;
  justify-content: center;
  color: solid black;
}
</style>