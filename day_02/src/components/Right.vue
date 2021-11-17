<template>
  <div class="right-container">
    <h3>Count的值是: {{ count }}</h3>
    <button type="button" @click="show('count')">点击+1</button>
  </div>
</template>

<script>
export default {
  props: ["init"],
  data() {
    return {
      count: this.init,
    };
  },
  methods: {
    show() {
      this.count += 1;
      this.$on("numberChanger", this.count);
    },
  },
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
