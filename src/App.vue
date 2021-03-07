<template>
  <div id="app">
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

export default {
  name: "App",
  components: { ShelterHome, LoginRegister },
  computed: {
    loginState() {
      return this.$store.getters.loggedInState;
    },
  },
};
</script>

<style scoped>
</style>
