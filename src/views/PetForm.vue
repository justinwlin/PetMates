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
      <p>
        Pet Image Upload
        <input type="file" @change="onFileChanged">
      </p>
      <!-- Pet Age -->
      <p>
        <input v-model="petAge" number placeholder="Pet age: ">
      </p>
      <!-- Pet Breed -->
      <p>
        <input v-model="petBreed" placeholder="Pet Breed: ">
      </p>
      <!-- Pet Gender -->
      <p>
        <select v-model="petGender">
          <option disabled value="">Please select one</option>
          <option>male</option>
          <option>female</option>
        </select>
      </p>
      <!-- Pet Description -->
      <p>
        <input v-model="petDescription" placeholder="Pet Description: ">
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
      <p>
        <input v-model="petNeeds" placeholder="Pet Special Needs: ">
      </p>
      <!-- Pet Notes -->
      <p>
        <input v-model="petNotes" placeholder="Pet Notes: ">
      </p>
      <p>
        <button type="submit" @click="onUpload">Submit</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      petGender      : '',
      petAge         : '',
      petBreed       : '',
      petDescription : '',
      petNeutered    : 'neutered',
      petNeeds       : '',
      petNotes       : '',
      selectedFile   : null
    }
  },
  methods: {
    onFileChanged (event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      var form = document.getElementById('petForm');
      var formData = new FormData(form);
      formData.append('petImage', this.selectedFile, this.selectedFile.name);
      this.axios.post('posts endpoint here', formData);
    }
  }
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