<template>
  <div class="wrap" id="wrap">
    <div class="geju"></div>
    <div class="logGet">
      <!-- 头部提示信息 -->
      <div class="logD logDtip">
        <p class="p1">登录</p>
      </div>
      <!-- 输入框 -->
      <div class="lgD">
        <!-- <img src="../assets/log.gif" alt="" width="20px" height="20px" /> -->
        <input
          type="text"
          placeholder="请输入用户名"
          maxlength="12"
          minlength="10"
          v-model="userName"
        />
      </div>
      <div class="lgD">
        <!-- <img src="../assets/password.gif" alt="" width="20px" height="20px" /> -->
        <div class="oo">
          <form>
            <input
              class="password"
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
            <a class="tishi" style="font-size: 25px; color: red">*</a>
          </form>
        </div>
      </div>
      <div class="logC">
        <a><button @click="login" v-on:keyup.enter="submit">登 录</button></a>
      </div>
      <div>
        <a class="register_an_account">注册账户&nbsp; &nbsp;</a>
        <a class="register_an_account">忘记密码</a>
      </div>
    </div>
    <!-- 定义一个提示框，显示最新的官网消息 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "111",
      password: "111",
    };
  },
  methods: {
    login() {
      // console.log("::" + this.value);
      if (this.userName !== "") {
        if (this.password === "") {
          window.alert("请输入密码");
        } else {
          // 假设登陆成功，则跳转到 index 组件
          this.$router.push({ name: "index" });
          this.$message({
            type: "success",
            message: "登录成功",
          });
        }
      } else {
        window.alert("请输入用户名");
      }
    },
  },
};
</script>

<style lang="less">
body {
  // background-image: url("../assets/meinv.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 800px;
}

* {
  margin: 0;
  padding: 0;
}
.tishi {
  font-size: 25px;
  color: red;
  position: relative;
  left: 8px;
  bottom: -9px;
}
.password {
  // 密码
  position: relative;
  left: 4px;
}

#wrap {
  height: 600px;
  width: 100%;
  background-position: center center;
  position: relative;
}

#head {
  height: 120px;
  width: 100;
  background-color: #66cccc;
  text-align: center;
  position: relative;
}

#wrap .logGet {
  height: 408px;
  width: 368px;
  position: absolute;
  background-color: #ffffff;
  top: 180px;
  right: 40%;
}

.logC a button {
  width: 100%;
  height: 45px;
  background-color: #ee7700;
  border: none;
  color: white;
  font-size: 18px;
}

.logGet .logD.logDtip .p1 {
  display: inline-block;
  font-size: 28px;
  margin-top: 30px;
  width: 86%;
}

#wrap .logGet .logD.logDtip {
  width: 86%;
  border-bottom: 1px solid #ee7700;
  margin-bottom: 60px;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
}

.logGet .lgD img {
  position: absolute;
  top: 0px;
  left: 2px;
  width: 100%;
  height: 45px;
}

.logGet .lgD input {
  width: 94%;
  height: 42px;
  text-indent: 2.5rem;
}

#wrap .logGet .lgD {
  width: 86%;
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
}

#wrap .logGet .logC {
  width: 86%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}

.title {
  font-family: "宋体";
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  font-size: 36px;
  height: 40px;
  width: 30%;
}

.copyright {
  font-family: "宋体";
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  height: 60px;
  width: 40%;
  text-align: center;
}
.register_an_account {
  color: #0d0d0ebe;
  margin-left: 10px;
}
.register_an_account:hover {
  color: blue;
}
</style>