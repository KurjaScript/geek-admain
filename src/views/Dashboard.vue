<template>
  <div>
    <!-- gutter: 栅格间隔 -->
    <el-row :gutter="20">
      <!-- span: 栅格占据的列数 -->
      <el-col :span="8">
        <!-- shadow：设置阴影显示时机 -->
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <div class="user-info">
            <img src="../assets/img/yunzhu.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2022-05-22</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>南京</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 252px">
          <template #header >
              <div style="height:40px; line-height:40px">
                <span>语言详情</span>
              </div>
            
          </template>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          CSS
          <el-progress :percentage="13.7"></el-progress>
          HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-s-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height: 403px;">
            <div style="display:flex;position:relative;align-items:center;height:30px;z-index:999">
              <div class="clearfix">
                <div style="height:40px;line-height:40px">待办事项</div>
                <el-button style="float: right; padding: 3px" type="text" @click="addVisible = true"
                  >添加</el-button
                >
              </div>
            </div>
          <!-- show-header: 是否显示表头 -->
          <el-table :show-header="false" :data="state.todoList" style="width: 100%;height:325px;overflow:scroll">
            <el-table-column width="40">
              <template #default="scope">
                <!-- scope.row.status -->
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <div
                  class="todo-item"
                  :class="{
                    'todo-item-del': scope.row.status,
                  }"
                >
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="90" align="center">
              <template #default="scope">
                  <el-button type="text" icon="el-icon-delete" style="color:#ff0000"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="bar"
            class="schart"
            canvasId="bar"
            :options="state.options1"
          ></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="line"
            class="schart"
            canvasId="line"
            :options="state.options2"
          ></schart>
        </el-card>
      </el-col>
    </el-row>
    <!-- 添加弹出框 -->
    <el-dialog title="添加待做事项" v-model="addVisible" width="30%">
      <el-form label-width="70px">
        <el-input v-model="addevent"></el-input>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addVisible = false">取消</el-button>
          <el-button type="primary" @click="saveEvent">确定</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script>
import Schart from "vue-schart";
import { onMounted, reactive, computed, ref} from "vue";
import { useStore } from "vuex";
import { getDashboard } from '../mock/dashboard';
import axios from "axios";
import { ElMessage, ElMessageBox } from 'element-plus';
export default {
  name: "dashboard",
  components: { Schart },
  setup() {
    const name = localStorage.getItem("ms_username");
    const role = name === "admin" ? "超级管理员" : "普通用户";
    const store = useStore()
    let addVisible = ref(false)
    let addevent = ref("")

    const state = reactive({
      options1: {},
      options2: {},
      todoList: []
    })
    const handleDelete = ((index, row) => {
      ElMessageBox.confirm(
        '确定删除？',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        state.todoList.splice(index,1)
        ElMessage({
          type: 'success',
          message: `成功删除第${index+1}待做事项！`
        })
      }).catch(() => {
        ElMessage({
          type: 'info',
          message: '取消删除'
        })
      })
    })
    const saveEvent = () => {
      if (addevent.value === "") {
        ElMessage.error(`您的输入为空，请输入待做事项！`)
      } else {
        addVisible.value = false
        let interEvent = addevent.value
        state.todoList.push({index: state.todoList.length + 1, title: interEvent, status: false})
        ElMessage.success(`已成功添加待做事项！`)
        addevent.value = ""
        console.log(state.todoList)
      }
    }
   


    onMounted(() => {
      getDashboard().then(res => {
        const { code, data } = res.data
        if (code === 200) {
          state.todoList = data.todoList
          state.options1 = data.options1
          state.options2 = data.options2
        }
      })
      
    }) 

    return {
      name,
      addVisible,
      addevent,
      state,
      role,
      saveEvent,
      handleDelete

    };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.schart {
  width: 100%;
  height: 300px;
}
.clearfix {
  display: flex;
  position: absolute;
  width:100%;
  justify-content: space-between;
  align-content: center;
  margin-top: -20px;
  padding: 0;
  /* overflow-y:auto; */
  /* z-index: 999; */
  /* color: red; */
}
/deep/ .el-card__header{
  padding: 0 20px;
}
</style>
