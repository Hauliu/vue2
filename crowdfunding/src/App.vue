<template>
  <div id="app">
    <CrowdFund />
  </div>
</template>

<script>
import CrowdFund from "@/CrowdFund.vue";

export default {
  name: "app",
  components: {
    CrowdFund,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
