<template>
  <div class="box"></div>
  <button @click="change">click</button>
</template>

<style scoped>
.box{
  background:greenyellow;
  width: 30px;
  height: 30px;
  position: relative;
  /* 给标签设置 move 动画，持续时间 2s，线性变化且无限循环 */
  animation: move 2s linear infinite;
}
@keyframes move {
    0% {left: 0px}
    50% {left: 400px}
    100% {left: 0;}
}
</style>