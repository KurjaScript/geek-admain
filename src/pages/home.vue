<template>
    <h1>这是首页</h1>
    <Todolist />
    <Rate :value="score"></Rate>
</template>

<script setup>
import { ref } from 'vue';
import Todolist from '../components/Todolist.vue';
import Rate from '../components/Rate.vue';
let score = ref(3)
</script>