<template>
  <div>
    <h1 @click="add">{{count}}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 引入 ref 函数包裹数字，返回的 count 变量就是响应式的数据
// 对于 ref 返回的响应式数据，需要修改 .value 才能生效
let count = ref(1)
function add(){
    count.value++
}
</script>

<style>
h1 {
  color: red;
}
</style>