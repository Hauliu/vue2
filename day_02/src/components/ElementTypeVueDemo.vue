<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="用户管理" name="first">
          <div class="to_one">
            姓名<el-input
              class="input_width"
              placeholder="请输入姓名"
              v-model="input"
              clearable
            >
            </el-input>
            年龄<el-input
              class="input_width"
              placeholder="请输入年龄"
              v-model="age"
              clearable
            >
            </el-input>
            时间
            <el-time-select
              placeholder="起始时间"
              v-model="startTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
            >
            </el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
                minTime: startTime,
              }"
            >
            </el-time-select>
            <el-button>查询</el-button>
            <el-button @click="initAll">重置</el-button>
            <el-divider>分割线-下面是表格</el-divider>
          </div>
          <div>
            <el-card>
              <el-switch
                v-model="switgh_button"
                :active-text="active_text"
                :inactive-text="inactive_text"
                @change="gaibianSwicth"
              >
              </el-switch>
              <el-button
                type="primary"
                class="creates"
                @click="switchs"
                :disabled="buttons"
              >
                新增</el-button
              >
              <el-button
                type="primary"
                class="creates"
                @click="switchs"
                :disabled="buttons"
              >
                编辑</el-button
              >
              <el-button
                type="primary"
                class="creates"
                @click="switchs"
                :disabled="buttons"
              >
                导入</el-button
              >
              <el-button
                type="primary"
                class="creates"
                @click="switchs"
                :disabled="buttons"
              >
                导出
              </el-button>
            </el-card>
          </div>
          <div>
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              height="650px"
              v-show="nubers"
            >
              <el-table-column label="序号" width="50px" type="index">
              </el-table-column>
              <el-table-column
                prop="data"
                label="姓名"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="age"
                label="年龄"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="startTime"
                label="开始时间"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="endTime"
                label="结束时间"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="caozuoName"
                label="操作人"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="shengfen"
                label="省份"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="shijidiqu"
                label="市级地区"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="xianji"
                label="县级地区"
                width="180px"
              ></el-table-column>
              <el-table-column
                prop="xiangji"
                label="乡级地区"
                width="180px"
              ></el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click="handleClick(scope.row)"
                    type="text"
                    size="small"
                    >查看</el-button
                  >
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagination_num"
                @size-chang="handerSizeChang"
                @curent-chang="handerCrrentChang"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40, 50]"
                :page-size="10"
                length="10"
              >
              </el-pagination>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理页面" name="second"
          >配置管理页面</el-tab-pane
        >
        <el-tab-pane label="角色管理页面" name="third"
          >角色管理页面</el-tab-pane
        >
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
    </div>
    <div class="returnGo">
      <el-button
        @click="returnGo"
        class="el-icon-caret-left colors"
        circle
      ></el-button>
      <el-button class="el-icon-caret-right colors" circle></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      input: "",
      startTime: "",
      endTime: "",
      age: "",
      pagination_num: 30,
      // 当前所在页
      currentPage: 1,
      switgh_button: true,
      //所有button按钮状态
      buttons: false,
      active_text: "开启",
      inactive_text: "禁用",
      tableData: [],
    };
  },
  methods: {
    nubers() {},
    //禁用所有按钮
    gaibianSwicth() {
      if (this.buttons === false) {
        this.buttons = true;
        console.log(this.buttons);
      } else {
        this.buttons = false;
      }
    },
    //查看按钮状态
    switchs() {
      console.log("目前按钮状态为:" + this.buttons);
    },
    //点击重置按钮，所有输入为空
    initAll() {
      const that = this;
      (that.input = ""),
        (that.startTime = ""),
        (that.endTime = ""),
        (that.age = "");
    },
    //每页数量最大设置为10
    handerSizeChang(val) {
      console.log(`每页 ${val} 条 `);
    },
    handerCrrentChang(val) {
      consolo.log(`当前页 ${val} 条`);
    },
    returnGo() {
      this.$router.push({ name: "index" });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="less">
.returnGo {
  position: absolute;
  display: flex;
  right: 50px;
  top: 0px;
}
.div_view {
  width: 50px;
  height: 100%;
  background-color: red;
}

.colors:hover {
  color: aqua;
}

.dataClass {
  position: absolute;
  left: 65%;
  top: 0%;
}
.input_width {
  width: 10%;
}
.to_one {
  position: relative;
  right: auto;
  width: 100%;
  height: 100%;
}
.creates {
  position: relative;
  left: 10px;
}
.el-card__body {
  padding: 20px;
  float: left;
}
</style>