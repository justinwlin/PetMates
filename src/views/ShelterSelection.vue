<template>
  <div class="home">
    <div class="shelterTitle">
      <p>Available Shelters</p>
    </div>

    <!-- LIST OF SHELTERS -->

    <div class="shelterList">
      <el-row
        class="shelter"
        v-for="shelter in shelterData"
        v-bind:key="shelter"
      >
        <el-col>
          {{ shelter.name }}
        </el-col>
        <el-col>
            <img :src="shelter.image"  />
        </el-col>
          <el-col >
              Likes:
              {{ shelter.likes }}        
              
              Disikes:
              {{ shelter.dislike }}
          </el-col>
        <el-col>
          <el-button
            type="primary"
            v-on:click="seeShelterDetails(shelter.shelterID)"
            >See More
          </el-button>
        </el-col>
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
      shelterData: [],
    };
  },
  created() {
    (async () => {
      const snapshot = await this.$store.dispatch("getShelters");
      if (snapshot.empty) {
        console.log("No such shelter!");
      } else {
        snapshot.forEach((doc) => {
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
    async seeShelterDetails(shelterID) {
      this.$store.commit("setSelectedShelter", { shelterID: shelterID });
      this.$store.commit("navigatePage", { page: "shelterSelected" });
    },
  },
};
</script>

<style scoped>
.shelter {
  justify-content: center;
  margin: 2rem;
  min-width: 25%;
  max-width: 25%;
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
  font-size: 200%;
}

img {
  min-height: 300px;
  max-height: 300px;
  min-width: 300px;
  max-height: 300px;
}
</style>