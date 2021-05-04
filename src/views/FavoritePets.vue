<template>
  <div class="home">
    <div class="PetsTitle">
      <p>Favorite Furry Friends</p>
    </div>

    <!-- LIST OF PETS -->

    <div class="petList">
      <el-row class="pet" v-for="pet in petData" v-bind:key="pet">
        <el-col>{{ pet.name }}</el-col>
        <el-col>
          <img :src="pet.image" />
        </el-col>
        <el-col>
          <el-button type="primary" v-on:click="removeFavorite(pet.petID)">Delete</el-button>
          <el-button @click="grabEmail(pet.shelterID)">Email Shelter</el-button>
        </el-col>
      </el-row>
    </div>
    <div id="hidden">
      <form :action="'mailto:'+shelterEmail" method="GET" ref="email" type="hidden">
        <input name="subject" type="text" />
        <textarea name="body"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      petData: [],
      petIDs: [],
      shelterEmail: "",
    };
  },
  async created() {
    const snapshot = await this.$store.dispatch("getFavPetsByUID", {
      uid: this.$store.getters.getUID,
    });
    if (snapshot.empty) {
      console.log("No such user was found");
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
    async removeFavorite(petID) {
      const snapshot = await this.$store.dispatch("getUserDocByUID", {
        uid: this.$store.getters.getUID,
      });
      if (snapshot.empty) {
        console.log("No such user was found");
      } else {
        snapshot.update({
          favorites: firebase.firestore.FieldValue.arrayRemove(petID),
        });
        console.log(petID);
      }
    },
    async grabEmail(shelterID) {
      console.log(shelterID);
      const snapshot = await this.$store.dispatch("getShelter", {
        shelterID: shelterID,
      });
      if (snapshot.empty) {
        console.log("No such user was found");
      } else {
        console.log("EMAILING...");
        snapshot.forEach((doc) => {
          const data = doc.data();
          this.shelterEmail = data.email;
          console.log(data);
        });
        console.log(this.shelterEmail);
        this.$refs.email.submit();
      }
    },
  },
};
</script>

<style scoped>
.pet {
  justify-content: center;
  margin: 2rem;
  min-width: 25%;
  max-width: 25%;
}

.petList {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: solid black;
}

img {
  min-height: 300px;
  max-height: 300px;
  min-width: 300px;
  max-height: 300px;
}

#hidden {
  display: none;
}
.PetsTitle {
  display: flex;
  justify-content: center;
  color: solid black;
  font-size: 200%;
}
</style>