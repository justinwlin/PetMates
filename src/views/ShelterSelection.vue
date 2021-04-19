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

    <div class="shelterTitle">
        <p>Available Shelters</p>
    </div>

    <!-- LIST OF PETS -->

    <div class="shelterList">
      <div class="shelter">Shelter 1</div>
      <div class="shelter">Shelter 2</div>
      <div class="shelter">Shelter 3</div>
      <div class="shelter">Shelter 4</div>
      <div class="shelter">Shelter 4</div>
      <div class="shelter">Shelter 4</div>
      <div class="shelter">Shelter 4</div>
      <div class="shelter">Shelter 4</div>
      <div class="shelter">Shelter 4</div>
      
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

.shelter {
  justify-content: center;
  margin: 2rem;
  min-width: 25%;
}

.shelterList {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: aliceblue;
  
}

.shelterTitle {
  display: flex;
  justify-content: center;
  color: aliceblue;
}

</style>