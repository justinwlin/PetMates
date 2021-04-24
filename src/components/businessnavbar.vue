<template>
  <div>
    <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="homeNavigation">Home</el-menu-item>
      <el-menu-item index="2" @click="addPet">Add Pet</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "businessnavbar",
  components: {},
  data() {
    return {
      active: 1,
    };
  },
  computed: {},

  methods: {
    homeNavigation() {
      this.$store.commit("navigatePage", { page: "shelterhome" });
      this.active = 1;
    },
    addPet() {
      this.$store.commit("navigatePage", { page: "petform" });
      this.active = 2;
    },
  },
};
</script>