<template>
  <div id="app">
    <!-- Components you want to show right now -->
    <div v-if="!loginState">
      <PetForm></PetForm>
      <PetSelected></PetSelected>
      <ShelterSelected></ShelterSelected>
    </div>
    <!-- Components to Hide -->
    <div v-else>
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
import PetSwipe from "./views/PetSwipeDemo";
import ShelterSelection from "./views/ShelterSelection";
import ShelterRegistration from "./views/ShelterRegistration";
import PetSelected from "./views/PetSelected";
import ShelterSelected from "./views/ShelterSelected";

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
    ShelterSelected,
  },
  computed: {
    loginState() {
      return this.$store.getters.loggedInState;
    },
  },
};
</script>

<style scoped></style>
