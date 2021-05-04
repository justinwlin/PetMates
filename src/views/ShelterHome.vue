<template>
  <div class="home">
    <!-- SHELTER INFO -->
    <div class="center">
      <img id="banner" :src="shelterImage" />
      <h1>{{shelterInfo}}</h1>
      <p>{{shelterDescription}}</p>
      <div class="containerLikes">
        <h3>Likes: {{shelterLikes}} || &nbsp;</h3>
        <h3>Dislikes: {{shelterDislikes}}</h3>
      </div>
    </div>
    <div id="descriptionControl">
      <el-input input v-model="removeThisPetID" placeholder="Enter Pet ID: " />
      <el-button type="primary" v-on:click="removePet()">Remove Pet</el-button>
    </div>
    <div id="descriptionControl">
      <p>
        <el-table :data="petData" style="width: 100%">
          <el-table-column prop="petID" label="id" width="180"></el-table-column>
          <el-table-column prop="name" label="name" width="180"></el-table-column>
          <el-table-column prop="description" label="description" width="180"></el-table-column>
          <el-table-column label="Name" width="180">
            <template #default="scope">
              <el-popover effect="light" trigger="hover" placement="top">
                <template #reference>
                  <div class="name-wrapper">
                    <img id="preview" :src="scope.row.image" />
                  </div>
                </template>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </p>
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
        console.log("No such pet document!");
      } else {
        petSnapshot.forEach((doc) => {
          this.petData.push(doc.data());
        });
      }
      if (shelterSnapshot.empty) {
        console.log("No such shelter document!");
      } else {
        shelterSnapshot.forEach((doc) => {
          this.shelterData.push(doc.data());
        });
      }
    })();
  },
  computed: {
    stateCheck() {
      return this.$store.state;
    },
    shelterInfo() {
      return this.shelterData.length == 0 ? "" : this.shelterData[0].name;
    },
    shelterDescription() {
      return this.shelterData.length == 0
        ? ""
        : this.shelterData[0].description;
    },
    shelterLikes() {
      return this.shelterData.length == 0 ? "" : this.shelterData[0].likes;
    },
    shelterDislikes() {
      return this.shelterData.length == 0 ? "" : this.shelterData[0].dislike;
    },
    shelterImage() {
      return this.shelterData.length == 0 ? "" : this.shelterData[0].image;
    },
  },
  methods: {
    async removePet() {
      const snapshot = await this.$store.dispatch("getPetByPetID", {
        petID: parseInt(this.removeThisPetID),
      });
      if (snapshot.empty) {
        console.log("No matching pets with that ID to be removed.");
      } else {
        snapshot.forEach((doc) => {
          doc.ref.delete();
        });
        this.petData = this.petData.filter((el) => {
          if (el.petID != parseInt(this.removeThisPetID)) {
            return true;
          }
          return false;
        });
        this.removeThisPetID = "";
      }
      return;
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.containerLikes {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
}

#descriptionControl {
  width: 50%;
  text-align: center;
  margin: auto;
}
.petList {
  outline: 2px solid black;
}

#banner {
  height: 300px;
  width: auto;
}

#preview {
  max-height: 200px;
  max-width: 200px;
}
</style>