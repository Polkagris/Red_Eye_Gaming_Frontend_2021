<template>
  <div
    class="logoHeaderBackgroundContainer"
    bg-image="../assets/mountains-1412683_1280.png"
  >
    <div className="logo">
      <a
        href="https://redeyemedia.io"
        target="_blank"
        rel="noreferrer"
        class="logo"
      >
        <img src="../assets/redEyeNew.png" alt="logo" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderImage",
  components: {},
  data: () => {},
};
</script>

<style scoped>
.logoHeaderBackgroundContainer {
  display: flex;
  background-image: url("../assets/mountains-1412683_1280.png");
  background-color: #cccccc;
  height: 500px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.logo {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;
  width: 300px;
  position: absolute;
}
</style>
