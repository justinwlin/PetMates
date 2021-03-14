<template>
  <div class="pageContainer">
    <div class="loginRegisterContainer">
      <div class="LRsubcontainer">
        <el-row type="flex" justify="center">
          <el-col :span="50">
            <h3>Log into PetMates</h3>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="50">
            <el-input placeholder="Username" v-model="loginUsername"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="50">
            <el-input
              type="password"
              placeholder="Password"
              v-model="loginPassword"
            ></el-input>
          </el-col>
        </el-row>
        <div class="center">
          <el-button type="primary" v-on:click="login()"
            >Login{{ createUserText }}</el-button
          >
        </div>
      </div>
      <div class="LRsubcontainer">
        <el-row type="flex" justify="center">
          <el-col :span="50">
            <h3>Register for PetMates</h3>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="50">
            <el-input
              placeholder="Username"
              v-model="registerUsername"
            ></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="50">
            <el-input
              type="password"
              placeholder="Password"
              v-model="registerPassword"
            ></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="50">
            <el-input
              type="password"
              placeholder="Confirm password"
              v-model="registerPasswordConfirm"
            ></el-input>
          </el-col>
        </el-row>
        <div class="center">
          <el-button type="primary" v-on:click="register()"
            >Register{{ createUserText }}</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      loginUsername: "",
      loginPassword: "",
      registerUsername: "",
      registerPassword: "",
      registerPasswordConfirm: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("loginMutation");
    },
    register() {},
  },
};
</script>
<style scoped>
.loginRegisterContainer {
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
}
.LRsubcontainer {
  border: 1px black solid;
  margin: 2rem;
  min-width: 25%;
}
.center {
  display: flex;
  justify-content: center;
  margin: 1rem;
}
.el-row {
  margin: 1rem;
}
</style>