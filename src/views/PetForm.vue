<template>
  <div class="home">
    <!-- NAVIGATION BAR-->
    <!-- Pet Form -->
    <form id="petForm" class="center">
      <p class="center">Add Pet Form</p>

      <!-- Pet Image Upload -->
      <p>Pet Image Upload</p>
      <div>
        <input type="file" @change="onFileChanged" />
      </div>
      <div>
        <img :src="imagebase64" height="150" />
      </div>
      <!-- NAME -->
      <div>
        <el-input v-model="petname" placeholder="Name of Pet" />
      </div>
      <!-- Pet Age -->
      <p>
        <el-input type="number" v-model="petAgeDay" number placeholder="Pet Birthday Day: " />
      </p>
      <p>
        <el-input type="number" v-model="petAgeMonth" number placeholder="Pet Birthday Month: " />
      </p>
      <p>
        <el-input type="number" v-model="petAgeYear" number placeholder="Pet Birthday Year: " />
      </p>
      <!-- Pet Breed -->
      <div>
        <el-input v-model="petBreed" placeholder="Pet Breed: " />
      </div>
      <!-- Pet Gender -->
      <p>
        <el-radio v-model="petGender" :label="true">Male</el-radio>
        <el-radio v-model="petGender" :label="false">Female</el-radio>
      </p>
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
      petGender: true,
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
      petname: "",
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
          gender: this.petGender ? "male" : "female",
          image: this.selectedFile,
          month: parseInt(this.petAgeMonth),
          neutered: this.petNeutered,
          notes: this.petNotes,
          shelterID: this.$store.getters.getSelectedShelter, //need persistence of pet shelter first. Code as 1 for now
          specialNeeds: this.petNeeds,
          year: parseInt(this.petAgeYear),
          name: this.petname,
        });
        await this.$store.dispatch("addPets", {
          day: parseInt(this.petAgeDay),
          description: this.petDescription,
          gender: this.petGender ? "male" : "female",
          image: this.selectedFile,
          month: parseInt(this.petAgeMonth),
          neutered: this.petNeutered,
          notes: this.petNotes,
          shelterID: this.$store.getters.getSelectedShelter, //need persistence of pet shelter first. Code as 1 for now
          specialNeeds: this.petNeeds,
          year: parseInt(this.petAgeYear),
          name: this.petname,
        });
        Object.assign(this.$data, this.clearForm());
      } catch (err) {
        console.log(err);
      }
    },
    clearForm() {
      return {
        petGender: true,
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
        petname: "",
      };
    },
  },
  computed: {
    isMale() {
      if (this.petGender === "male") {
        return true;
      }
      return false;
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