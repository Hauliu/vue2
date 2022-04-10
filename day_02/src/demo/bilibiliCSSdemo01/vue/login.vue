<template>
  <div>
    <div v-if="hasLogin" class="backgroud-imgs">
      <el-form>
        <el-form-item label="账号">
          <span class="span-box">
            <el-input v-model="username" type="password"></el-input>
          </span>
        </el-form-item>
        <el-form-item label="密码">
          <span class="span-box">
            <el-input id="pass" v-model="password" type="password"></el-input>
            <button @click="handel_keshi">可视化</button>
          </span>
        </el-form-item>
        <el-form-item label="">
          <el-button @click="handleLogin">登录</el-button>
          <el-button @click="hasLogin = false">去注册</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-else class="backgroud-imgs">
      <el-form>
        <el-form-item label="账号">
          <span>
            <el-input
              class="el-input__inner input-box"
              v-model="username"
            ></el-input
          ></span>
        </el-form-item>

        <el-form-item label="密码">
          <span>
            ><el-input
              class="el-input__inner input-box"
              v-model="password"
            ></el-input
          ></span>
        </el-form-item>
        <el-form-item label="">
          <el-button>注册</el-button>

          <el-button @click="hasLogin = true">去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-input></el-input>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasLogin: false,
      dialogVisible: false,
      username: null,
      password: null,
    };
  },
  methods: {
    handleLogin() {
      this.$message.error(
        "username:" + this.username + ";password:" + this.password
      );
    },
    handel_keshi() {
      let html = "";
      html = ` <span class="span-box">
            <el-input id="pass" v-model="text" type="password"></el-input>
            <button @click="handel_keshi"></button>
          </span>`;
    },
  },
};
</script>

<style lang='less'>
@import "../css/login.css";
</style>