<template>
  <div id="app">
    <!-- Components you want to show right now -->
    <div v-if="pageState === 'regularlogin'">
      <CustomerLoginRegister></CustomerLoginRegister>
    </div>
    <div v-else-if="pageState == 'petform'">
      <PetForm></PetForm>
    </div>
    <div v-else-if="pageState == 'petselected'">
      <PetSelected></PetSelected>
    </div>
    <div v-else-if="pageState == 'shelterregistration'">
      <ShelterRegistration></ShelterRegistration>
    </div>
    <div v-else-if="pageState == 'shelterhome'">
      <ShelterHome></ShelterHome>
    </div>
    <div v-else-if="pageState == 'shelterselection'">
      <ShelterSelection></ShelterSelection>
    </div>
    <div v-else-if="pageState == 'favoritePets'">
      <FavoritePets></FavoritePets>
    </div>
    <div v-else-if="pageState == 'petswipe'">
      <PetSwipe></PetSwipe>
    </div>
    <div v-else>
      <CustomerLoginRegister></CustomerLoginRegister>
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
import FavoritePets from "./views/FavoritePets";

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
    FavoritePets,
  },
  method: {},
  computed: {
    pageState() {
      return this.$store.getters.getCurrentPage;
    },
  },
};
</script>

<style scoped></style>
