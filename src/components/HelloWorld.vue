<template>
  <div v-for="(item,index) in users" :key="item">{{ index + 1 }}-{{ item }}</div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios"
import mock from "../mock/index.js";
import '../mock/index.js'

export default defineComponent({
  setup() {
    let users = ref([])
    onMounted(() => {
      axios.get(`/api/getUsers`).then(res => {
        users.value = res.data.data
        console.log('users', users)
      }).catch(err => {
        console.log(err)
      })

      axios.get(`/users/login`).then(res => {
        users.value = res.data.data
        console.log('users', users)
      }).catch(err => {
        console.log(err)
      })

    })

    return { users }
  }
})
</script>
