<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1" @click="homeNavigation">Login</el-menu-item>
    <el-menu-item index="2" @click="favoriteNavigation">Register your Shelter</el-menu-item>
  </el-menu>
  <div class="home"></div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {},
  methods: {
    homeNavigation() {
      this.$store.commit("navigatePage", { page: "regularlogin" });
      this.active = 1;
    },
    favoriteNavigation() {
      this.$store.commit("navigatePage", { page: "shelterregistration" });
      this.active = 2;
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  background: url("./../assets/landingPage.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>