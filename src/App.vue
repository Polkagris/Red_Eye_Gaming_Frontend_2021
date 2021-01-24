<template>
  <div id="app" class="bg-indigo-200">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
