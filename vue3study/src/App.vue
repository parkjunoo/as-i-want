<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <button @click="changeName">이름 변경</button>
  <h2></h2>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const username = ref("park");

    function changeName() {
      username.value = "juns";
    }
    return { username, changeName };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
