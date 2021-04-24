<template>
  <div class="home">hi</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      shelterImage: "",
      shelterName: "",
      shelterDescription: "",
      shelterState: "",
      shelterStreet: "",
      shelterCity: "",
      shelterZipcode: "",
      likes: "",
      dislikes: "",
    };
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: url("https://i.ytimg.com/vi/0Zo3ES9kuDs/maxresdefault.jpg")
    no-repeat center center fixed;
}
</style>