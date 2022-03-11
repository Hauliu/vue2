<template>
  <div class="wrapper">
    <h1 class="title">文章列表</h1>
    <div class="article">
      <el-button class="addBtn" @click="handleAdd">新增+</el-button>
      <el-table :data="schArr" border stripe>
        <el-table-column
          prop="title"
          label="标题"
          width="200"
        ></el-table-column>
        <el-table-column label="日期" width="230">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleLook(scope.row)"
              >查看</el-button
            >
            <el-button size="mini" type="success" @click="handleEdit(scope.row)"
              >编辑</el-button
            >

            <el-button
              size="mini"
              type="danger"
              @click="handleDelect(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 7, 10, 15]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        class="fyDiv"
        :total="articleList.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schArr: [],
      articleList: [],
      currentPage: 1,
      pagesize: 10,
    };
  },
  methods: {
    handleAdd() {
      this.$router.push({ name: "editArticle" });
    },
    handleLook(row) {
      let id = row.id;
      window.open("#/detail/" + id);
    },
    handleEdit(row) {
      let id = row.id;
      this.$router.push({ path: `/article/edit/${id}` });
    },
    handleDelect(row) {
      let id = row.id;
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .post("/api/article/delete", {
              article_id: id,
            })
            .then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  type: "success",
                  message: "删除成功!",
                });
                setTimeout(() => {
                  this.getMyBlogList();
                  // location.reload() 过渡效果太难看了
                }, 1500);
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    getMyBlogList() {
      this.$axios
        .get("/api/article/myList")
        .then((res) => {
          console.log(res);
          if (res.data.code === 200) {
            this.articleList = res.data.data;
            // console.log(this.articleList)
            this.getPageData();
            return;
          }
          return this.$message.error("获取我的博客列表失败！");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.getPageData();
      console.log(this.pagesize);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getPageData();
      console.log(this.currentPage);
    },
    getPageData() {
      console.log("是否yes");
      let start = (this.currentPage - 1) * this.pagesize;
      let end = start + this.pagesize;
      this.schArr = this.articleList.slice(start, end);
    },
  },
  created() {
    this.getMyBlogList();
    // this.getPageData();
  },
};
</script>

<style lang="less" scoped>
.title {
  margin: 30px 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
}
.article {
  .addBtn {
    float: right;
    margin-bottom: 20px;
  }
}
/deep/ .el-table {
  .cell {
    text-align: center;
  }
}
.fyDiv {
  float: right;
  margin-top: 30px;
  padding-bottom: 20px;
}
</style>

