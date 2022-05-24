<template>
<div>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item><i class="el-icon-lx-copy"></i> tab选项卡</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="container">
    <el-tabs v-model="message">
      <el-tab-pane :label="`未读消息(${state.unread.length})`" name="first">
        <el-table :data="state.unread" :show-header="false" style="width: 100%">
          <el-table-column>
            <template #default="scope">
              <span class="message-title">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180"></el-table-column>
          <el-table-column width="120">
            <template #default="scope">
              <!-- 也可 scope.$index -->
              <el-button size="small" @click="handleRead(scope.index)"
                >标为已读</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="handle-row">
          <el-button type="primary" @click="handleAllread">全部标为已读</el-button>
        </div>
      </el-tab-pane>

      <el-tab-pane :label="`已读消息(${state.read.length})`" name="second">
        <template v-if="message === 'second'">
          <el-table :data="state.read" :show-header="false" style="width: 100%">
            <el-table-column>
              <template #default="scope">
                <span class="message-title">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="150"></el-table-column>
            <el-table-column width="120">
              <template #default="scope">
                <el-button type="danger" @click="handleDel(scope.index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger" @click="handleAlldel()">删除全部</el-button>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane :label="`回收站(${state.recycle.length})`" name="third">
        <template v-if="message === 'third'">
          <el-table :data="state.recycle" :show-header="false" style="width: 100%">
            <el-table-column>
              <template #default="scope">
                <span class="message-title">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="150"></el-table-column>
            <el-table-column width="120">
              <template #default="scope">
                <el-button @click="handleRecycle(scope.index)">还原</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="handle-row">
            <el-button type="danger" @click="handleClear">清空回收站</el-button>
          </div>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const message = ref("first");
    const state = reactive({
      unread: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        },
        {
          date: "2018-04-19 21:00:00",
          title: "今晚12点整发大红包，先到先得",
        },
      ],
      read: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        },
      ],
      recycle: [
        {
          date: "2018-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
        },
      ],
    });

    function handleRead(index) {
      const item = state.unread.splice(index, 1);
      state.read = item.concat(state.read);
    }
    function handleAllread() {
      state.read = state.unread.concat(state.read);
      state.unread = [];
    }

    function handleDel(index) {
      const item = state.read.splice(index, 1);
      state.recycle = state.recycle.concat(item);
    }
    function handleAlldel() {
      state.recycle = state.recycle.concat(state.read);
      state.read = [];
    }

    function handleRecycle(index) {
      const item = state.recycle.splice(index, 1);
      state.read = state.read.concat(item);
    }
    function handleClear() {
      state.recycle = [];
    }

    return {
      message,
      state,
      handleRead,
      handleAllread,
      handleDel,
      handleAlldel,
      handleRecycle,
      handleClear,
    };
  },
};
</script>

<style></style>
