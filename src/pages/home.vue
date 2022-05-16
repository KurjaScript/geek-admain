<template>
    <h1>您的评分是 {{score}}</h1>
    <Todolist />
    <!-- 使用 update-rate 接收 Rate 组件 emit 的数据 -->
    <Rate :value="score" @update-rate="update">课程评分</Rate>
    <Rate :value="4" theme="red">
        <img width="14" src="/favicon.ico" alt="">
    </Rate>
    <Rate :value="1" theme="green"></Rate>
    <ChangeWidth />
    <LoopMove />
    <Animation />

</template>

<script setup>
import { ref } from 'vue';
import Todolist from '../components/Todolist.vue';
import Rate from '../components/Rate.vue';
import ChangeWidth from '../components/ChangeWidth.vue';
import LoopMove from '../components/LoopMove.vue';
import Animation from '../components/Animation.vue';
let score = ref(3.5)
function update(num) {
    score.value = num
}
</script>