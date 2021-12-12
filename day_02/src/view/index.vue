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
      <div class="a_href">
        <div class="one_href">
          <a rel="nofollow" @click="open_shangcheng"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小米商城</a
          >
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow" @click="open_MIUI">MIUI</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">IoT</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">云服务</a>
          <span class="sep">&nbsp; | </span>
          <a rel="nofollow">天星数科</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">有品</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">小爱开放平台</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">企业团购</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">资质证照</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">协议规则</a>
          <span class="sep">&nbsp; | &nbsp; </span>
          <a rel="nofollow">智能生活</a>
          <span class="sep" target="_blank">&nbsp; | &nbsp; </span>
        </div>
        <div class="tow_href">
          <a rel="npfollow" class="el-icon-shopping-cart-full"
            >&nbsp; 购物车 &nbsp;&nbsp;</a
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div>
        <img
          src="../assets/logo-mi2.png"
          style="margin-left: -94%; margin-top: 10px; height: 67px; width: 69px"
          alt=""
          title="小米首页"
          @click="open_xiaomiIndex"
        />
      </div>
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
    open_MIUI() {
      open("https://home.miui.com/");
    },
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
.login:hover {
  color: cornsilk;
}
.login {
  color: rgb(115, 141, 141);
  line-height: 40px;
  float: right;
}

.imgTouXiang {
  width: 32px;
  height: 30px;
  border-radius: 100px;
  margin-top: 5px;
}
.taitou {
  background-color: black;
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
  top: -21px;
}
.one_href {
  margin-right: 20px;
}
.one_href a {
  float: left;
  line-height: 40px;
}
.one_href span {
  float: left;
  line-height: 40px;
}

.one_href a:hover {
  float: left;
  line-height: 40px;
  color: #ffffff;
}
.tow_href a:hover {
  line-height: 40px;
  color: #ffffff;
}
.tow_href a span {
  line-height: 40px;
}
.sep {
  margin: 0 0.3em;
  color: #424242;
}
.tow_href a:hover {
  color: #ffffff;
  line-height: 40px;
}
.tow_href {
  line-height: 40px;
  float: right;
  font-size: 14px;
}
</style>