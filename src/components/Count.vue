<template>
  <h1 @click="add" class="count-color">
    {{ count }}
  </h1>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

let store = useStore();
let color = ref("red");
let count = computed(() => store.state.count);

function add() {
  store.commit("add");
  color.value = Math.random() > 0.5 ? "blue" : "red";
}
</script>

<style scoped>
.count-color {
  /* font-size: 24px; */
  color: v-bind(color);
}
</style>
