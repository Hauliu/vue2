<template>
  <div>
    <h4>
      <p :title="time()">{{ name }}</p>
    </h4>
  </div>
</template>

<style>
    .test-box {
        background-color: pink;
    }
</style>
<script>
export default {
 data() {
     return{
         name: 'iiiiiii',
          
     }
 },
 methods: {
     time(){
         console.log()
         const time = new Date().toLocaleString()
         return time
     }
 },
};
</script>


