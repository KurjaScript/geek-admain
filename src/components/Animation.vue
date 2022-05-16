<template>
  <button @click="toggle">click</button>
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
</template>

<script setup>
import {ref} from 'vue'
let showTitle = ref(true)
function toggle(){
  showTitle.value = !showTitle.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    /* 设置 opacity 有 0.5 秒的过渡时间 */
    transition: opacity 0.5s linear;
}
.fade-enter-from,
.fade-leave-to {
    /* 元素进入前和离开后设置 opacity 为 0 */
    opacity: 0;
}
</style>