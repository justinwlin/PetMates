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

    <!-- Pet Form -->
    <form id="petForm">
      <!-- Pet Image Upload -->
      <div>
        Pet Image Upload
        <input type="file" @change="onFileChanged" />
      </div>
      <div>
        <img :src="imagebase64" height="150" />
      </div>
      <!-- Pet Age -->
      <div>
        <input v-model="petAge" number placeholder="Pet age: " />
      </div>
      <!-- Pet Breed -->
      <div>
        <input v-model="petBreed" placeholder="Pet Breed: " />
      </div>
      <!-- Pet Gender -->
      <div>
        <select v-model="petGender">
          <option disabled value="">Please select one</option>
          <option>male</option>
          <option>female</option>
        </select>
      </div>
      <!-- Pet Description -->
      <p>
        <input v-model="petDescription" placeholder="Pet Description: " />
      </p>
      <!-- Pet Neutered -->
      <p>
        <select v-model="petNeutered">
          <option disabled value="">Please select one</option>
          <option>neutered</option>
          <option>not neutered</option>
        </select>
      </p>
      <!-- Pet Special Needs -->
      <div>
        <input v-model="petNeeds" placeholder="Pet Special Needs: " />
      </div>
      <!-- Pet Notes -->
      <div>
        <input v-model="petNotes" placeholder="Pet Notes: " />
      </div>
      <div>
        <button type="submit" @click="onUpload">Submit</button>
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
      petAge: "",
      petBreed: "",
      petDescription: "",
      petNeutered: "neutered",
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
    onUpload() {
      if (!this.selectedFile) {
        alert("please submit an image");
        return;
      }
      this.$store.dispatch("addPets", {
        day: 1, //Int
        description: this.petDescription, //string
        gender: this.petGender, //string
        image: this.selectedFile, //array of url images?
        month: 1, //int
        neutered: this.petNeutered, //boolean
        notes: this.petNotes, //string
        petID: Math.floor(Math.random() * 1000), //int
        shelterID: 1, //it
        specialNeeds: "", //string
        year: 2000, //int
        name: "randomName",
      });
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