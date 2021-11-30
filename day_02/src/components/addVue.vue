<template>
  <!-- 首页轮播图 -->
  <div>
    <div>
      <van-notice-bar
        left-icon="volume-o"
        text="小米最新机器，不要998，不要998，只要9。8"
      />
      <el-carousel :interval="4000" type="card" height="200px">
        <!-- item 是集合内的值 -->
        <!-- <el-carousel-item v-for="(index, item) in dataList" :key="item"> -->
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <el-carousel-item
          v-for="(item, index) in this.dataList"
          v-bind:key="index"
        >
          <a :href="item.scr">
            <img :src="item.scr" @click="showUrl(index)" alt="" />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div>
      <div>
        <!-- 点击图片跳转至视频链接 -->
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11ultra/section1-1.jpg"
          alt=""
          @click="video"
          title="点击图片观看视频"
          class="video"
        />
        <!-- <video controls autoplay name="media" class="video">
          <source
            src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11ultra/section3-2.mp4"
            type="video/mp4"
          />
        </video> -->
      </div>

      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择所在地区"
        @click="show = true"
        style="width: 50%; left: 50%; falot: top"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //input 框隐藏状态
      currentIndex: 0, //表示第一张图片的位置
      input: "",
      panduan: false,
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
      dataList: [
        {
          herf: "http://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
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
  methods: {
    //点击图片跳转视频界面
    video() {
      window.open(
        "https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11ultra/section3-2.mp4"
      );
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
    to_select() {
      if (this.input === "") {
        // 如果是输入的空字符串，那么做一个弹框提醒
        window.alert("请输入信息再查询");
      } else {
        this.panduan = false;
      }
    },
    showUrl(index) {
      if (index === 0) {
        window.open("http://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg");
      } else if (index === 1) {
        window.open("https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg");
      } else {
        window.open("https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg");
        return three;
      }
    },
  },
};
</script>
<style lang="less">
img {
  width: 100%;
  height: 100%;
}
.banxin {
  width: 1200px;
  margin: 0 auto;
  // 版心
  float: left;
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
.el-input__inner {
  width: 50%;
}
.video {
  width: 50%;
  height: 50%;
  position: relative;
  top: 20px;
}
</style>


