<template>
	<div id="app">
    <!-- Components you want to show right now -->
		<div v-if="!loginState">
      <PetSelected></PetSelected>
		</div>
    <!-- Components to Hide -->
		<div v-else>
      <LoginRegister></LoginRegister>
			<PetForm></PetForm>
			<PetSelected></PetSelected>
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
import PetSelected from './views/PetSelected';

export default {
	name: "App",
	components: { LoginRegister, PetForm, ShelterHome, PetSwipe, ShelterSelection, PetSelected },
	computed: {
		loginState() {
			return this.$store.getters.loggedInState;
		},
	},
};
</script>

<style scoped></style>
