<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
    <!-- <div class="app-container">
      <div v-if="mask" class="offline-mask">
        <h2 class="offline-mask-title">{{ offlineTitle }}</h2>
      </div>
    </div> -->
    <div>
      <router-view :key="this.$route.path"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  // name: "offlineHandler",
  // props: {
  //   offlineTitle: {
  //     type: String,
  //     default: "网络已断开，请检查网络",
  //   },
  //   onlineTitle: {
  //     type: String,
  //     default: "网络已连接",
  //   },
  // },
  data() {
    return {
      // mask: false,
    };
  },
  // mounted() {
  //   window.addEventListener("offline", this.eventHandler);
  //   window.addEventListener("online", this.eventHandler);
  // },
  // beforeDestroy() {
  //   window.removeEventListener("offline", this.eventHandler);
  //   window.removeEventListener("online", this.eventHandler);
  // },
  // methods: {
  //   eventHandler(event) {
  //     let { offlineTitle, onlineTitle } = this;
  //     const type = event.type === "offline" ? "error" : "success";
  //     const title = type === "error" ? offlineTitle : onlineTitle;
  //     window.alert(title);
  //     // element 的提示， UI不同这里换下
  //     this.$message({
  //       message: title,
  //       type: type,
  //     });
  //     setTimeout(() => {
  //       this.mask = event.type === "offline";
  //     }, 1500);
  //   },
  // },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
.offline-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  z-index: 999;
  transition: position 2s;
  display: flex;
  align-items: center;
  justify-content: center;
  .offline-mask-title {
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
