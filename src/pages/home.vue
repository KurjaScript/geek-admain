<template>
  <div>
    <v-header />
    <v-sidebar />
    <div class="content-box">
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition>
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "../components/Header.vue";
import vSidebar from "../components/Sidebar.vue";
export default {
  components: {
    vHeader,
    vSidebar,
  },
};
</script>

<style scoped>
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background-color: #f0f0f0;
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  /* 当一个块级元素的内容在垂直方向发生溢出时，显示滚动条 */
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
