<template>
  <div id="app">
    <PetForm></PetForm>
    <div v-if="!loginState">
      <LoginRegister></LoginRegister>
    </div>
    <div v-else>
      <ShelterHome></ShelterHome>
    </div>
  </div>
</template>

<script>
import ShelterHome from "./views/ShelterHome";
import LoginRegister from "./views/LoginRegister";
import PetForm from "./views/PetForm";

export default {
  name: "App",
  components: { PetForm, ShelterHome, LoginRegister },
  computed: {
    loginState() {
      return this.$store.getters.loggedInState;
    },
  },
};
</script>

<style scoped>
</style>
