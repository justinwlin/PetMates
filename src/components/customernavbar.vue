<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="homeNavigation">Home</el-menu-item>
      <el-menu-item index="2" @click="favoriteNavigation">Favorites</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "customernavbar",
  components: {},
  data() {
    return {
      active: 1,
    };
  },
  computed: {},

  methods: {
    homeNavigation() {
      this.$store.commit("navigatePage", { page: "shelterselection" });
      this.active = 1;
    },
    favoriteNavigation() {
      this.$store.commit("navigatePage", { page: "favoritePets" });
      this.active = 2;
    },
  },
};
</script>