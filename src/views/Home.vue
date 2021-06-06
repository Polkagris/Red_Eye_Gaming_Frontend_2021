<template>
  <div
    bg-white
    dark:bg-gray-800
    class="flex flex-row flex-wrap justify-center wrapper bg-indigo-200"
  >
    <div class="text-7xl font-extrabold w-full font-sans">
      <div
        class="
          bg-clip-text
          pt-16
          pb-8
          text-transparent text-center
          bg-gradient-to-r
          from-blue-400
          to-pink-900
        "
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
    </div>

    <figure
      class="flex bg-gray-100 rounded-xl p-8 md:p-0"
      v-for="game in filteredGames"
      :key="game.name"
    >
      <img
        class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        :src="game.imageUrl"
        alt=""
      />
      <div
        class="
          w-32
          h-32
          md:w-48
          md:h-auto
          pt-6
          md:p-8
          text-center
          md:text-left
          space-y-4
        "
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
</template>

<script>
// import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "Home",
  data: () => ({
    newHero: "hello world",
    gamesResponse: [],
  }),
  computed: {
    filteredGames() {
      let filteredGame = this.gamesResponse;

      filteredGame = filteredGame.filter((game) => {
        return (
          game.timeFree.includes("Free") || game.name.includes("Unlocking")
        );
      });

      filteredGame.map((game) => {
        this.gamesResponse.filter((gameResponseGame) => {
          if (gameResponseGame.imageUrl.includes(game.name)) {
            console.log("gameResponseGame in map:", gameResponseGame);
            game.imageUrl = gameResponseGame.imageUrl;
          }
        });
      });

      return filteredGame;
    },
  },
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