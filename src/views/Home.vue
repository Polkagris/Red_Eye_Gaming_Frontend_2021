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
        Red Eye Gaming
        <p class="text-2xl text-red-800 pt-5 font-normal">
          Free games on Epic right now
        </p>
      </div>

      <HeaderImage />
    </div>

    <div
      v-if="this.gamesResponse.length > 0"
      class="flex w-full justify-center gameListContainer m-30"
    >
      <div
        v-for="game in filteredGames"
        :key="game.name"
        class="w-full items-center"
      >
        <div class="flex flex-col individualGame">
          <img class="sm:16 md:32 lg:46" :src="game.imageUrl" alt="" />
          <div class="pt-6 text-center space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                {{ game.name }}
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-cyan-600">{{ game.timeFree }}</div>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="
        loader
        ease-linear
        rounded-full
        border-8 border-t-8 border-gray-200
        h-64
        w-64
      "
    ></div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import axios from "axios";
import HeaderImage from "../components/HeaderImage.vue";

export default {
  name: "Home",
  data: () => ({
    newHero: "hello world",
    gamesResponse: [],
  }),
  components: {
    HeaderImage,
  },
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
          if (game.name.includes("Unlocking")) {
            game.imageUrl =
              "https://cdn.pixabay.com/photo/2018/02/10/19/19/goal-3144351_960_720.jpg";
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
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

.image {
  /*   max-width: 500px;
  height: 400px; */
  /*   height: 500px; */
}

.gameListContainer {
  /*   min-height: 500px; */
}

.individualGame {
  margin: 30px;
  max-width: 500px;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>