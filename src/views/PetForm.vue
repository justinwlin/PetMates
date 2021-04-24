<template>
  <div class="home">
    <!-- NAVIGATION BAR-->
    <!-- Pet Form -->
    <form id="petForm">
      <!-- Pet Image Upload -->
      <p>Pet Image Upload</p>
      <div>
        <input type="file" @change="onFileChanged" />
      </div>
      <div>
        <img :src="imagebase64" height="150" />
      </div>
      <!-- Pet Age -->
      <p>
        <el-input v-model="petAgeDay" number placeholder="Pet Birthday Day: " />
      </p>
      <p>
        <el-input v-model="petAgeMonth" number placeholder="Pet Birthday Month: " />
      </p>
      <p>
        <el-input v-model="petAgeYear" number placeholder="Pet Birthday Year: " />
      </p>
      <!-- Pet Breed -->
      <div>
        <el-input v-model="petBreed" placeholder="Pet Breed: " />
      </div>
      <!-- Pet Gender -->
      <div>
        <el-input v-model="petGender" placeholder="Pet Gender: " />
      </div>
      <!-- Pet Description -->
      <p>
        <el-input v-model="petDescription" placeholder="Pet Description: " />
      </p>
      <!-- Pet Neutered -->
      <p>
        <el-radio v-model="petNeutered" :label="true">Neutered</el-radio>
        <el-radio v-model="petNeutered" :label="false">Not Neutered</el-radio>
      </p>
      <!-- Pet Special Needs -->
      <div>
        <el-input v-model="petNeeds" placeholder="Pet Special Needs: " />
      </div>
      <!-- Pet Notes -->
      <div>
        <el-input v-model="petNotes" placeholder="Pet Notes: " />
      </div>
      <div>
        <el-button @click="onUpload">Submit</el-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      petGender: "",
      petAgeDay: "",
      petAgeMonth: "",
      petAgeYear: "",
      petBreed: "",
      petDescription: "",
      petNeutered: true,
      petNeeds: "",
      petNotes: "",
      selectedFile: null,
      imagebase64: "",
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imagebase64 = fileReader.result;
      });
      fileReader.readAsDataURL(this.selectedFile);
    },
    async onUpload() {
      if (!this.selectedFile) {
        alert("please submit an image");
        return;
      }
      try {
        console.log({
          day: parseInt(this.petAgeDay),
          description: this.petDescription,
          gender: this.petGender,
          image: this.selectedFile,
          month: parseInt(this.petAgeMonth),
          neutered: this.petNeutered,
          notes: this.petNotes,
          shelterID: 1, //need persistence of pet shelter first. Code as 1 for now
          specialNeeds: this.petNeeds,
          year: parseInt(this.petAgeYear),
          name: "randomName",
        });
        return;
        // await this.$store.dispatch("addPets", {
        //   day: parseInt(this.petAgeDay),
        //   description: this.petDescription,
        //   gender: this.petGender,
        //   image: this.selectedFile,
        //   month: parseInt(this.petAgeMonth),
        //   neutered: this.petNeutered,
        //   notes: this.petNotes,
        //   shelterID: 1, //need persistence of pet shelter first. Code as 1 for now
        //   specialNeeds: this.petNeeds,
        //   year: parseInt(this.petAgeYear),
        //   name: "randomName",
        // });
      } catch (err) {
        console.log(err);
      }
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

#petForm {
  width: 50%;
  text-align: center;
  margin: auto;
}
</style>