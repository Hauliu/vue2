<template>
  <div>
    <div class="returnGo">
      <button @click="returnGo">返回上一级</button>
    </div>
    <input type="text" style="postion: fixed" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    returnGo() {
      this.$router.push("");
    },
  },
};
</script>

<style lang="less">
.returnGo {
  position: fixed;
  right: 50px;
}
</style>