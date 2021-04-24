<template>
  <div class="pageContainer">
    <div class="loginRegisterContainer">
      <div class="LRsubcontainer">
        <el-row type="flex" justify="center">
          <el-col>
            <h3>Register for PetMates Shelter</h3>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="Username" v-model="name"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="Email" v-model="email"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="Password" v-model="registerPassword"></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="Confirm password" v-model="registerPasswordConfirm"></el-input>
          </el-col>
        </el-row>

        <!-- Specific Information on Registration -->
        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="Street" v-model="street"></el-input>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="City" v-model="city"></el-input>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="State 2 Letter Code" v-model="state"></el-input>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="Zipcode" v-model="zipcode"></el-input>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <el-input placeholder="Name of Shelter" v-model="nameOfShelter"></el-input>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <p>Description</p>
            <el-input type="textarea" :rows="2" placeholder="Please input" v-model="description">></el-input>
          </el-col>
        </el-row>

        <el-row type="flex" justify="center">
          <el-col>
            <p>Shelter Image Upload</p>

            <input type="file" @change="onFileChanged" />
          </el-col>
        </el-row>
        <!-- END OF REGISTRATION FOR SHELTER -->
        <div class="center">
          <el-button type="primary" v-on:click="onSubmit()">Register{{ createUserText }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      name: "",
      email: "",
      registerPassword: "",
      registerPasswordConfirm: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      nameOfShelter: "",
      description: "",
      selectedFile: null,
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(this.selectedFile);
    },
    onSubmit() {
      //   if (!this.selectedFile) {
      //     alert("please submit an image");
      //     return;
      //   }
      if (this.registerPassword !== this.registerPasswordConfirm) {
        alert("Passwords do not match");
        return;
      }
      this.$store.dispatch("registerShelter", {
        email: this.email,
        name: this.name,
        password: this.registerPassword,
        street: this.street,
        city: this.city,
        state: this.state,
        zipcode: this.zipcode,
        nameOfShelter: this.nameOfShelter,
        description: this.description,
        file: this.selectedFile,
      });
    },
  },
};
</script>
<style scoped>
.loginRegisterContainer {
  display: flex;
  justify-content: center;
}
.LRsubcontainer {
  border: 1px black solid;
  margin: 2rem;
  min-width: 55%;
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