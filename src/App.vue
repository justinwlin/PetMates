<template>
  <div id="app">
    <div v-if="!isLoggedin"></div>
    <div v-else-if="isCustomerAccount">
      <Customernavbar></Customernavbar>
    </div>
    <div v-else>
      <Businessnavbar></Businessnavbar>
    </div>
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
    <div v-else-if="pageState == 'shelterSelected'">
      <ShelterSelected></ShelterSelected>
    </div>
    <div v-else>
      <LandingPage></LandingPage>
      <!-- <CustomerLoginRegister></CustomerLoginRegister> -->
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
import Customernavbar from "./components/customernavbar";
import Businessnavbar from "./components/businessnavbar";
import ShelterSelected from "./views/ShelterSelected";
import LandingPage from "./views/landingPage";

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
    Customernavbar,
    Businessnavbar,
    ShelterSelected,
    LandingPage,
  },
  method: {},
  computed: {
    pageState() {
      return this.$store.getters.getCurrentPage;
    },
    isCustomerAccount() {
      return this.$store.getters.getisCustomer;
    },
    isLoggedin() {
      return this.$store.getters.loggedInState;
    },
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
