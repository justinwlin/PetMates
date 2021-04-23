<template>
    <div class = "home">
        <div class="navBar">
            <el-button type="primary">Select Shelter</el-button>
            <el-button type="primary">Favorites</el-button>
        </div>
        <div class="picture">
            <img src={{shelterImage}}/>
        </div>
        <div class = "profile">
            <h2>{{shelterName}}
            <button>Email Shelter </button></h2> 
            <div class = "like">
                <p>LIKES : {{likes}}         DISLIKES: {{dislikes}}</p>
            </div>
            <p>
                {{shelterDescription }} <br/>
                {{shelterState }}<br/>
                {{shelterStreet }}<br/>
                {{shelterCity }}<br/>
                {{shelterZipcode }}<br/>
            </p>
            <div class = "pet">
                <el-button type="primary">CHECK OUT THE PETS</el-button>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      shelterImage: "",
      shelterName:"",
      shelterDescription: "",
      shelterState: "",
      shelterStreet: "",
      shelterCity: "",
      shelterZipcode: "",
      likes:"",
      dislikes:"",
    };
  },
  created() {
    (async () => {
      const shelterSnapshot = await this.$store.dispatch("getShelter", {shelterID: 1,});
      if (shelterSnapshot.empty) {
        console.log("No such shelter document!");
      } else {
        shelterSnapshot.forEach((doc) => {
          const data = doc.data();
          this.shelterName = data.name;
          this.shelterState = data.state;
          this.shelterStreet = data.street;
          this.shelterCity = data.city;
          this.shelterZipcode = data.zipcode;
          this.likes = data.likes;
          this.dislikes = data.dislikes;
          this.shelterImage = data.image;
       });
      }
    })();
  },
};
</script>

<style scoped>
    .picture{
        display: block;
        margin-left: auto;
        margin-right: auto;
        position: absoulte;
        margin-top: 100px;
        width: 50%;
    }
    .profile{
        width: 100%;
        text-align:center;
        position:absolute;
        display: inline-block;
    }
    .pet{
        text-align:center;
    }
</style>