<template>
  <div id="app">
    <!-- Components you want to show right now -->
    <div v-if="!loginState">
      <CustomerLoginRegister></CustomerLoginRegister>
    </div>
    <!-- Components to Hide -->
    <div v-else>
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

export default {
  name: "App",
  components: {
    CustomerLoginRegister,
    PetForm,
    ShelterHome,
    PetSwipe,
    ShelterSelection,
  },
  computed: {
    loginState() {
      return this.$store.getters.loggedInState;
    },
  },
};
</script>

<style scoped></style>
