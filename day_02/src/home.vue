<template>
  <div id="app">
    <headerDiv logo="Wise"></headerDiv>
    <router-view :key="this.$route.path"></router-view>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>