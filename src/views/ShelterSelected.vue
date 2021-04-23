<template>
    <div class = "home">
        <div class="picture">
            <img src={{shelterImage}}/>
        </div>
        <div class = "profile">
            <h2>{{shelterName}}
            <button>Email Shelter </button></h2> 
            <p>
                {{shelterDescription }} <br/>
                {{shelterState }}<br/>
                {{shelterStreet }}<br/>
                {{shelterCity }}<br/>
                {{shelterZipcode }}<br/>
            </p>
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
        width: 50%;
    }
    .profile{
        width: 100%;
        text-align:center;
        display: inline-block;
    }

</style>