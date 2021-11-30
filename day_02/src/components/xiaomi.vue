<template>
  <div class="wrap" id="wrap">
    <div class="logGet">
      <!-- 头部提示信息 -->
      <div class="logD logDtip">
        <p class="p1">登录</p>
      </div>
      <!-- 输入框 -->
      <div class="lgD">
        <img src="../assets/log.gif" alt="" width="20px" height="20px" />
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div class="lgD">
        <img src="../assets/password.gif" alt="" width="20px" height="20px" />
        <div class="oo">
          <input type="text" placeholder="请输入密码" />
          <a style="width: 25px; color: red">{{ passwordLS }}</a>
        </div>
      </div>
    </div>
    <!-- 定义一个提示框，显示最新的官网消息 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordLS: "*",
    };
  },
  methods: {},
};
</script>

<style lang="less">
.oo {
  position: absolute;
  right: 40px;
  top: 40px;
}
// .logGet .lgD img {
//   position: absolute;
//   top: 19px;
//   right: 19px;
//   width: 64px;
//   height: 64px;
// }
</style>