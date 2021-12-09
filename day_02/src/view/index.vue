<template>
  <div>
    <div class="taitou">
      <img
        class="imgTouXiang"
        src="../assets/liuyifei.jpg"
        style="float: right"
        alt=""
      />
      <a class="login" @click="login">退出登录</a>
      <div class="text_color">
        <a rel="nofollow" @click="open_shangcheng">小米商城</a>
        <span class="sep"> | </span>
        <a rel="nofollow" @click="open_shangcheng">MIUI</a>
        <span class="sep"> | </span>
        <a rel="nofollow" @click="open_shangcheng">loT</a>
        <span class="sep"> | </span>
        <a rel="nofollow" @click="open_shangcheng">云服务</a>
        <span class="sep"> | </span>
        <a rel="nofollow" @click="open_shangcheng">天星数科</a>
        <span class="sep"> | </span>
        <a rel="nofollow" @click="open_shangcheng">有品</a>
        <span class="sep"> | </span>
        <a rel="nofollow" @click="open_shangcheng">小爱开放平台</a>
        <span class="sep"> | </span>
        <a rel="nofollow" @click="open_shangcheng">企业团购</a>
        <span class="sep"> | </span>
      </div>
    </div>
    <div class="container">
      <img
        src="../assets/logo-mi2.png"
        style="margin-left: -94%; margin-top: 10px; height: 67px; width: 69px"
        alt=""
        title="小米首页"
        @click="open_xiaomiIndex"
      />
    </div>
    <div class="header-nav"></div>
  </div>
</template>

<script>
export default {
  dada() {
    return {};
  },
  methods: {
    login() {
      //点击退出登录，页面弹出框确认是是否删除
      this.$confirm("是否退出当前登录", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          type: "success",
          message: "退出成功",
        });
        this.$router.push("/");
        //点击退出，返回登录页面
      });
    },
    open_shangcheng() {
      //点击打开小米商城新页面
      window.open("https://www.mi.com/index.html");
    },
    open_xiaomiIndex() {
      //点击打开小米首页
      window, open("https://www.mi.com/index.html");
    },
  },
};
</script>

<style lang="less">
.text_color {
  color: rgb(115, 141, 141);
  margin-left: -60%;
  line-height: 40px;
  display: inline-block;
}
.text_color a:hover {
  color: #ffffff;
}
.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
}
.header-nav {
  float: left;
  width: 850px;
}
.login {
  float: right;
  color: cornsilk;
}
.imgTouXiang {
  width: 30px;
  height: 39px;

  border-radius: 100px;
}
.taitou {
  background-color: black;
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}
</style>