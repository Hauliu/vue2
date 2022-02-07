<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handelColse"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航页</span>
        </template>
        <!-- ElementTypeVueDemo 组件 -->
        <el-menu-item-group>
          <span slot="title">组件一</span>
          <el-menu-item index="1-1" @click="ElementTypeVueDemo" @open="1"
            >ElementTypeVueDemo</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title"> 设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    //展示页面
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handelColse(key, keyPath) {
      console.log(key, keyPath);
    },
    //页面跳转到 ElementTypeVueDemo 页面
    ElementTypeVueDemo() {
      console.log("点击跳转页面");
      this.$router.push({ name: "ElementTypeVueDemo" });
    },
  },
};
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>