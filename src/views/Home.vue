<template>
  <!-- $ heroku logs --app regaming -->

  <!--   <div class="home shadow-xl bg-gray-200 w-8/12 nx-auto p-20">
    <h1>{{ currentHero }}</h1>
    <h2 class="text-3xl text-blue-600 font-extrabold">
      These are the Heroes of our stories
    </h2>
    <input type="text" v-model="newHero" />
    <h3 v-for="hero in allHeroes" :key="hero">{{ hero }}</h3>
    <button
      @click="addHero"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10 focus:outline-none"
    >
      Add Hero
    </button> -->
  <!--     <div>
      <h3
        class="md:flex bg-gray-100 rounded-xl p-8 md:p-0"
        v-for="game in gamesResponse"
        :key="game.name"
      >
        {{ game.name }}
      </h3>
    </div> -->

  <div
    bg-white
    dark:bg-gray-800
    class="flex flex-row flex-wrap justify-center wrapper bg-indigo-200"
  >
    <div class="text-7xl font-extrabold w-full font-sans">
      <div
        class="bg-clip-text pt-16 pb-8 text-transparent text-center bg-gradient-to-r from-blue-400 to-pink-900"
      >
        Welcome to Red Eye Gaming
        <p class="text-2xl text-red-800 pt-5 font-normal">
          - Play free games until your eyes bleed -
        </p>
      </div>
      <div class="flex justify-center">
        <img
          src="../assets/red_eye_gaming.png"
          class="title-image justify-center"
        />
      </div>
      <!--       <div
        w-full
        class="bg-hero-pattern bg-cover"
        style="
          background-image: url('https://pixabay.com/get/g16d2761cc0b58d431249a767f8182aeeecb6bc5c7e73415a9ba80a0fc9def55f105fab52a305003ff4e8655db0224731_1920.png');
        "
      >
        <h1 class="text-xl font-semibold" p-16>Free Games Right Now!</h1>
      </div> -->
    </div>

    <figure
      class="flex bg-gray-100 rounded-xl p-8 md:p-0"
      v-for="game in gamesResponse"
      :key="game.name"
    >
      <img
        class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        :src="game.imageUrl"
        alt=""
      />
      <div
        class="w-32 h-32 md:w-48 md:h-auto pt-6 md:p-8 text-center md:text-left space-y-4"
      >
        <blockquote>
          <p class="text-lg font-semibold">
            {{ game.name }}
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">{{ game.timeFree }}</div>
        </figcaption>
      </div>
    </figure>
  </div>
  <!--   </div> -->
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    newHero: "hello world",
    gamesResponse: [],
  }),
  computed: mapState({
    currentHero: (state) => state.currentHero,
    allHeroes: (state) => state.allHeroes,
  }),
  methods: {
    addHero() {
      this.$store.dispatch("addHero", this.newHero);
    },
  },
  mounted() {
    axios.get("https://free-game-really.herokuapp.com/api").then((response) => {
      console.log(response);
      this.gamesResponse = response.data;
    });
  },
};
</script>

<style scoped>
.wrapper {
}
.home {
  height: 400px;
  max-height: 500px;
}
h2 {
  font-size: 2.5rem;
}
.title-image {
  max-height: 250px;
  max-width: 800px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>