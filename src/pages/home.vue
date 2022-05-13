<template>
    <h1>这是首页</h1>
    <Todolist />
    <Rate :value="3.5"></Rate>
    <Rate :value="4" theme="red"></Rate>
    <Rate :value="1" theme="green"></Rate>
</template>

<script setup>
import { ref } from 'vue';
import Todolist from '../components/Todolist.vue';
import Rate from '../components/Rate.vue';
let score = ref(3)
</script>