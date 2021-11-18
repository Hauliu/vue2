<template>
  <div class="content">
    <h3>新书众筹</h3>
    <span>以最低的价格获取我的新书</span>
    <!-- 众筹总体状态 -->
    <div class="status">
      <div v-if="!closed">
        已筹到资金 <b>{{ total }} ETH</b>
      </div>
      <div v-if="closed">众筹已完成</div>
      <div>众筹截止时间 {{ endDate }}</div>
    </div>

    <!-- 当读者参与过，显示如下div -->
    <div v-if="joined" class="card-bkg">
      <div class="award-des">
        <span>参与价格</span>
        <b>{{ joined }} ETH</b>
      </div>
      <button :disabled="closed" @click="withdraw">赎回</button>
    </div>

    <!-- 当读者未参与，显示如下div -->
    <div v-if="!joined" class="card-bkg">
      <div class="award-des">
        <span>当前众筹价格</span>
        <b>{{ price }} ETH</b>
      </div>

      <button :disabled="closed" @click="join">参与众筹</button>
    </div>

    <!-- 如果是创作者，那么显示如下div -->
    <div v-if="isAuthor">
      <button :disabled="closed" @click="withdrawFund">提出资金</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrowdFund",
  //定义上面的HTML模板中的变量
  data() {
    return {
      price: null,
      total: 0,
      closed: true,
      joinPrice: null,
      joined: false,
      endDate: "null",
      isAuthor: true,
    };
  },

  methods: {
    async initWeb3Account() {},
    async initContract() {},
    async getCrowdInfo() {},
  },
};
</script>

<style>
</style>