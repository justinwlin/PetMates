<template>
  <div id="app">
    <div v-if="!loginState">
      <LoginRegister></LoginRegister>
    </div>
    <div v-else>
      <PetForm></PetForm>
    </div>
  </div>
</template>

<script>
//import ShelterHome from "./views/ShelterHome";
import LoginRegister from "./views/LoginRegister";
import PetForm from "./views/PetForm";

export default {
  name: "App",
  components: { LoginRegister, PetForm },
  computed: {
    loginState() {
      return this.$store.getters.loggedInState;
    },
  },
};
</script>

<style scoped>
</style>
