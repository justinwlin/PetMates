<template>
  <div class="home">
    <!-- NAVIGATION BAR-->
    <div class="navBar center">
      <el-button type="primary">Page 1</el-button>
      <el-button type="primary">Page 2</el-button>
      <el-button type="primary">Page 3</el-button>
      <el-button type="primary">Page 4</el-button>
      <el-button type="success">Current Page</el-button>
      <el-button type="primary">Page 6</el-button>
    </div>
    <!-- SHELTER INFO -->
    <el-row class="shelterTools">
      <el-col :span="6">
        <p>Shelter Image</p>
      </el-col>
      <el-col :span="6">
        <p>Shelter Description</p>
      </el-col>
    </el-row>

    <!-- SHELTER TOOLS -->
    <el-row class="shelterTools">
      <el-col :span="8">
        <el-input
          placeholder="Edit Shelter Description"
          v-model="input"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="info">Change/Loading</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="4">
        <el-button type="info">Add Pet</el-button>
      </el-col>
    </el-row>

    <!-- LIST OF PETS -->
    <div class="petList">
      <el-row class="shelterTools">
        <el-col :span="4"> <p>Pet Profile Photo</p> </el-col>
        <el-col :span="4"> <p>Pet Name</p> </el-col>
        <el-col :span="4">
          <el-button type="info">Remove Pet</el-button>
        </el-col>
      </el-row>
      <el-row class="shelterTools">
        <el-col :span="4"> <p>Pet Profile Photo</p> </el-col>
        <el-col :span="4"> <p>Pet Name</p> </el-col>
        <el-col :span="4">
          <el-button type="info">Remove Pet</el-button>
        </el-col>
      </el-row>
      <el-row class="shelterTools">
        <el-col :span="4"> <p>Pet Profile Photo</p> </el-col>
        <el-col :span="4"> <p>Pet Name</p> </el-col>
        <el-col :span="4">
          <el-button type="info">Remove Pet</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    stateCheck() {
      return this.$store.state;
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
.shelterTools {
  display: flex;
  justify-content: center;
  margin: 2rem;
}
.petList {
  outline: 2px solid black;
}
</style>