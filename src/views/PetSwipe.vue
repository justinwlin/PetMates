<template>
  <div id="app">
    <Tinder
      ref="tinder"
      key-name="id"
      v-model:queue="queue"
      :max="3"
      :offset-y="10"
      allow-down
      @submit="onSubmit"
    >
      <template #default="{ data }">
        <div class="pic" :style="{
            'background-image': `url(${data.id})`
          }" />
      </template>
    </Tinder>
    <div class="btns">
      <img src="../assets/nope.png" @click="decide('nope')" />
      <img src="../assets/like.png" @click="decide('like')" />
    </div>
  </div>
</template>

<script>
import Tinder from "../components/vue-tinder/Tinder.vue";

export default {
  name: "App",
  components: { Tinder },
  data: () => ({
    queue: [],
    offset: 0,
    history: [],
    shelterDogImages: [],
    res: [],
    like: [],
    indexInRes: 0,
  }),
  async created() {
    this.res = await this.$store.dispatch("getPets");
    this.shelterDogImages = this.res.map((ele) => {
      return ele.image;
    });
    this.mock();
  },
  methods: {
    mock(count = 5, append = true) {
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({ id: this.shelterDogImages[this.offset] });
        this.offset++;
      }
      if (append) {
        this.queue = this.queue.concat(list);
      } else {
        this.queue.unshift(...list);
      }
    },
    onSubmit({ type, item }) {
      if (this.queue.length < 3) {
        this.mock();
      }
      this.history.push(item);
      if (type == "like") {
        this.like.push(this.res[this.indexInRes].petID);
        console.log(this.res[this.indexInRes].petID);
        this.$store.dispatch("getFavorites", {
          value: this.res[this.indexInRes].petID,
        });
      }
      this.indexInRes += 1;
    },
    async decide(choice) {
      this.$refs.tinder.decide(choice);
      console.log(this.history);
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  margin: 0;
  background-color: #20262e;
  overflow: hidden;
}

#app .vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 23px;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 23px - 65px - 47px - 16px);
  min-width: 300px;
  max-width: 355px;
}

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}

.nope-pointer {
  right: 10px;
}

.like-pointer {
  left: 10px;
}

.super-pointer,
.down-pointer {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}

.super-pointer {
  bottom: 40px;
}

.down-pointer {
  top: 40px;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
  width: 112px;
  height: 78px;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 355px;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
</style>
