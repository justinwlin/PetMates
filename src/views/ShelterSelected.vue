<template>
    <div class = "home">
        <div class="picture">
            <img src="../assets/petShelter.jpg"/>
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
      shelterImage: "../assets/petShelter.jpg",
      shelterName:"Hope Shelter",
      shelterDescription: "This is a shelter in New York State",
      shelterState: "NY",
      shelterStreet: "Jay St",
      shelterCity: "Katonah",
      shelterZipcode: "10010",
    };
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
        margin-left: 600px;
        position: relative;
        text-align:left;
        display: inline-block;
    }

</style>