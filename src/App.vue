<template>
  <div id="app">
    <!-- Components you want to show right now -->

    <div v-if="!loginState">
      <button @click="getPets">CLICK</button>
    </div>
    <!-- Components to Hide -->
    <div v-else>
      <PetForm></PetForm>
      <PetSelected></PetSelected>
      <ShelterRegistration></ShelterRegistration>
      <ShelterSelection></ShelterSelection>
      <CustomerLoginRegister></CustomerLoginRegister>
      <PetForm></PetForm>
      <ShelterHome></ShelterHome>
      <ShelterSelection></ShelterSelection>
      <PetSwipe></PetSwipe>
    </div>
  </div>
</template>

<script>
import CustomerLoginRegister from "./views/CustomerLoginRegister";
import PetForm from "./views/PetForm";
import ShelterHome from "./views/ShelterHome";
import PetSwipe from "./views/PetSwipe";
import ShelterSelection from "./views/ShelterSelection";
import ShelterRegistration from "./views/ShelterRegistration";
import PetSelected from "./views/PetSelected";

export default {
  name: "App",
  components: {
    CustomerLoginRegister,
    PetSelected,
    PetForm,
    ShelterHome,
    PetSwipe,
    ShelterSelection,
    ShelterRegistration,
  },
  methods: {
    async getPets() {
      console.log("getting pets");
      let results = await this.$store.dispatch("getPetsInShelter", {
        shelterID: this.$store.getters.getSelectedShelter,
      });
      console.log(results);
      results.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().image);
      });
      return "hi";
    },
    async onUpload() {
      console.log("hi");
    },
  },
  computed: {
    loginState() {
      return this.$store.getters.loggedInState;
    },
  },
};
</script>

<style scoped></style>
