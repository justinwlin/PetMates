<template>
  <div class="login">
    <el-row type="flex" justify="center">
      <el-col :span="50">
        <h1>PetMates</h1>
        <h3>Log into PetMates</h3>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="50">
        <el-input placeholder="Username" v-model="username"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="50">
        <el-input
          type="password"
          placeholder="Password"
          v-model="password"
        ></el-input>
      </el-col>
    </el-row>
    <div class="center">
      <el-button type="primary" v-on:click="login()"
        >Login{{ createUserText }}</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$store.commit("loginMutation");
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
.el-row {
  margin: 1rem;
}
</style>