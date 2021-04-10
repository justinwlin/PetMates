<template>
	<div id="app">
    <!-- Components you want to show right now -->
		<div v-if="!loginState">
      <PetSwipe></PetSwipe>
		</div>
    <!-- Components to Hide -->
		<div v-else>
      <LoginRegister></LoginRegister>
			<PetForm></PetForm>
			<ShelterHome></ShelterHome>
      <PetSwipe></PetSwipe>
		</div>
	</div>
</template>

<script>
import LoginRegister from "./views/LoginRegister";
import PetForm from "./views/PetForm";
import ShelterHome from "./views/ShelterHome";
import PetSwipe from './views/PetSwipeDemo'

export default {
	name: "App",
	components: { LoginRegister, PetForm, ShelterHome, PetSwipe },
	computed: {
		loginState() {
			return this.$store.getters.loggedInState;
		},
	},
};
</script>

<style scoped></style>
