<template>
  <div class="right-container">
    <h3>Right 组件(计算器)</h3>
    <div style="width: 20p; height: 100px">
      <!-- 显示框，显示结果 -->
      <input type="text" />{{ jieguo }}
      <hr />
      <button @click="one">1</button>&nbsp;<button @click="one">2</button
      >&nbsp;<button @click="one">3</button>&nbsp;
      <hr />

      <button @click="one">4</button>&nbsp;<button @click="one">5</button
      >&nbsp;<button @click="one">6</button>&nbsp;
      <hr />

      <button @click="one">7</button>&nbsp;<button @click="one">8</button
      >&nbsp;<button @click="one">9</button>&nbsp;
      <hr />

      <button></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
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
