<template>
  <div v-for="(item,index) in users" :key="item">{{ index + 1 }}-{{ item }}</div>
</template>

<script>
import { onMounted, ref } from "vue";
// import axios from "axios"
import { getUsers } from '../mock/users'
// import '../mock/index.js'

export default({
  setup() {
    let users = ref([])
    onMounted(() => {
      getUsers().then(res => {
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
    

    

