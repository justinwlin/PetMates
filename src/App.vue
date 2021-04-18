<template>
	<div id="app">
    <!-- Components you want to show right now -->
		<div v-if="!loginState">
      <ShelterSelection></ShelterSelection>
		</div>
    <!-- Components to Hide -->
		<div v-else>
      <LoginRegister></LoginRegister>
			<PetForm></PetForm>
			<ShelterHome></ShelterHome>
			<ShelterSelection></ShelterSelection>
      <PetSwipe></PetSwipe>
		</div>
	</div>
</template>

<script>
import LoginRegister from "./views/LoginRegister";
import PetForm from "./views/PetForm";
import ShelterHome from "./views/ShelterHome";
import PetSwipe from './views/PetSwipeDemo';
import ShelterSelection from './views/ShelterSelection';

export default {
	name: "App",
	components: { LoginRegister, PetForm, ShelterHome, PetSwipe, ShelterSelection },
	computed: {
		loginState() {
			return this.$store.getters.loggedInState;
		},
	},
};
</script>

<style scoped></style>
