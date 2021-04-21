<template>
  <div id="app">
    <!-- Components you want to show right now -->

    <div v-if="!loginState">
      <CustomerLoginRegister></CustomerLoginRegister>
    </div>
    <!-- Components to Hide -->
    <div v-else>
      <PetSwipe></PetSwipe>
      <PetForm></PetForm>
      <PetSelected></PetSelected>
      <ShelterRegistration></ShelterRegistration>
      <PetForm></PetForm>
      <PetSelected></PetSelected>
      <CustomerLoginRegister></CustomerLoginRegister>
      <PetForm></PetForm>
      <ShelterHome></ShelterHome>
      <ShelterSelection></ShelterSelection>
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
