<template>
  <div class="right-container">
    <h3 @click="show()">Count的值是: {{ count }}</h3>
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
      console.log(this.count);
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
