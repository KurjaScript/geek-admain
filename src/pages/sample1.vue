<template>
  <div ref="myRef">获取单个DOM元素</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const myRef = ref(null);

    onMounted(() => {
      console.dir(myRef.value);
    });
 
    return {
      myRef
    };
  }
};
</script>