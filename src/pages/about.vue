<template>
  <div v-for="(item,index) in users" :key="item">{{ index + 1 }}-{{ item }}</div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getUsersList, postNewUser, putUpdateUser } from '../api/restful'
// import axios from "axios"
// import { getUsers } from '../mock/users'
// import '../mock/index.js'
export default({
  setup() {
    let users = ref([])
    onMounted(() => {
      getUsersList().then(res => {
        users.value = res.data.data
        console.log('users', users)
      }).catch(err => {
        console.log(err)
      })

      postNewUser().then(res => {
        console.log(res.data)
      })

      putUpdateUser().then(res => {
        console.log(res)
      })
    })
    return { users }
  }
})
</script>