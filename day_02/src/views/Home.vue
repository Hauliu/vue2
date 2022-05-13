<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/log.gif" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/login.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
