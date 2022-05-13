<template>
    <div>
        {{ rate }}
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
// 使用 defineProps 来规范传递数据的格式
let props = defineProps({
    value: Number
})
// 
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
</script>
