<template>
  <div class="app-container">
    <hr />
    <div class="app">
      <AddVue></AddVue>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import AddVue from "@/components/addVue.vue";
export default {
  data() {
    return {
      message: "hello 132 宝宝们",
      userinfo: { name: "wsc", age: 18 },
      getNewCount: 0,
    };
  },
  methods: {
    show(val) {
      this.getNewCount = val;
      console.log("事件被触发:", val);
      return this.getNewCount;
    },
  },
  components: {
    Left,
    Right,
    AddVue,
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
.app {
  padding: 1px 20px 20px;
  background-color: hsl(0, 17%, 94%);
  width: 100px;
  height: 200px;
}
</style>
