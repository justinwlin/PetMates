<template>
	<div id="app">
    <!-- Components you want to show right now -->
		<div v-if="!loginState">
			<LoginRegister></LoginRegister>
		</div>
    <!-- Components to Hide -->
		<div v-else>
			<PetForm></PetForm>
			<ShelterHome></ShelterHome>
		</div>
	</div>
</template>

<script>
import LoginRegister from "./views/LoginRegister";
import PetForm from "./views/PetForm";
import ShelterHome from "./views/ShelterHome";

export default {
	name: "App",
	components: { LoginRegister, PetForm, ShelterHome },
	computed: {
		loginState() {
			return this.$store.getters.loggedInState;
		},
	},
};
</script>

<style scoped></style>
