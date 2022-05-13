<template>
  <div>
    <div class="app">
      <h1>备忘录</h1>
      <p>记事</p>
      <input typoe="text" id="context" />
      <p>日期</p>
      <input type="date" id="date" />
      <p>时间</p>
      <input type="time" id="time" />
      <button class="addBtn" id="addBtn" @click="addBtns">新增</button>
      <button class="remove" id="deleteBtn" @click="removeBtns">
        删除最后一个
      </button>
      <div class="list" id="list">
        <div class="item" id="list">
          <div>
            <p class="weizhitiaozheng">内容:</p>
            <p class="weizhitiaozheng">时间:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addCreate, remove } from "@/demo/js/beiwanglu.js";
export default {
  data() {
    return {
      date_value: "",
      time_value: "",
      input_value: "",
    };
  },
  methods: {
    addBtns() {
      addCreate();
    },
    removeBtns() {
      remove();
    },
  },
};
</script>

<style>
@import "../css/beiwanglu.css";
</style>