<template>
  <!-- 首页轮播图 -->
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <!-- item 是集合内的值 -->
      <el-carousel-item v-for="(index, item) in dataList" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <a :href="dataList[item.href]">
          <img :src="dataList[item.scr]" alt="Paris" />
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0, //表示第一张图片的位置
      dataList: [
        {
          herf: "http//i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
          scr: "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        },
        {
          herf: "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
          scr: "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        },
        {
          herf: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
          scr: "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less">
img {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100%;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  line-height: 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  line-height: 100%;
}
</style>


