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
      <p>
        <input v-model="petAgeDay" number placeholder="Pet Birthday Day: " />
      </p>
      <p>
        <input v-model="petAgeMonth" number placeholder="Pet Birthday Month: " />
      </p>
      <p>
        <input v-model="petAgeYear" number placeholder="Pet Birthday Year: " />
      </p>
      <!-- Pet Breed -->
      <div>
        <input v-model="petBreed" placeholder="Pet Breed: " />
      </div>
      <!-- Pet Gender -->
      <div>
        <input v-model="petGender" placeholder="Pet Gender: " />
      </div>
      <!-- Pet Description -->
      <p>
        <input v-model="petDescription" placeholder="Pet Description: " />
      </p>
      <!-- Pet Neutered -->
      <p>
        <input type="radio" v-model="petNeutered" v-bind:value="true" />
        <input type="radio" v-model="petNeutered" v-bind:value="false" />
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
        <button @click="onUpload">Submit</button>
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
        await this.$store.dispatch("addPets", {
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
</style>