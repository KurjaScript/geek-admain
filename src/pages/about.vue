<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 基础表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="header-box">
        <div class="handle-box">
          <el-select v-model="query.id" placeholder="ID" class="handle-select mr10">
            <el-option key="1" label="12804" value="12804"></el-option>
            <el-option key="2" label="12807" value="12807"></el-option>
          </el-select>
          <el-input
            v-model="query.name"
            placeholder="用户名"
            class="handle-input mr10"
          ></el-input>
          <el-button type="primary" icon="el-icon-search" @click="handleSearch(query.name)"
            >搜索</el-button
          >
        </div>
        <el-button type="primary" style="margin-bottom:20px"  @click="addVisible = true"
            >新增</el-button
          >
      </div>
      

      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column prop="id" label="ID" width="70" align="center"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="email" label="邮箱">
          <template #default="scope">
            <div v-if="scope.row.email">￥{{ scope.row.email }}</div>
            <div v-else>暂无</div>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="update_time" label="更新时间"></el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.status === 1
                  ? 'success'
                  : scope.row.state === 0
                  ? 'danger'
                  : ''
              "
              >{{ scope.row.status === 1 ? '成功' : '失败'  }}</el-tag
            >
          </template>
        </el-table-column>

        
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          :total="pageTotal"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="30%">
      <el-form label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit()" >确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 新增弹出框 -->
    <el-dialog title="新增用户" v-model="addVisible" width="30%">
      <el-form label-width="70px" >
        <el-form-item label="用户名">
          <el-input v-model="newForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="newForm.email"></el-input>
        </el-form-item>
        <el-form-item label="创建日期">
          <el-input v-model="newForm.create_time"></el-input>
        </el-form-item>
        <el-form-item label="更新日期">
          <el-input v-model="newForm.update_time"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-input v-model="newForm.date"></el-input>
        </el-form-item>
      </el-form>
      
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addVisible = false">取消</el-button>
          <el-button type="primary" @click="saveNewForm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { getUsersList, postNewUser } from '../api/restful'
// import { fetchData } from "../api/data";
import { getBasetable, postBasetable } from "../mock/basetable.js"
import axios from 'axios';

export default {
  name: "basetable",
  setup() {
    const editVisible = ref(false)
    const addVisible = ref(false)
    const query = reactive({
      id: "",
      name: "",
      pageIndex: 1,
      pageSize: 10,
    });
    const tableData = ref([]);
    const allMsg = ref([])
    const pageTotal = ref(0);
    const form = reactive({
      name: "",
      email: "",
      status: "",
    })
  
    const newForm = reactive({
      name: "",
      email: "",
      create_time: "",
      update_time: "",
      status: "",
    })
    // 获取表格数据
    const getData = () => {
      getUsersList({}).then((res) => {
        allMsg.value = res.data.data
        tableData.value = res.data.data;
        console.log(res.data.data)
        pageTotal.value = res.data.pageTotal || 50;
      });
    };
    getData();

    // 搜索功能
    function handleSearch(queryString) {
      tableData.value = []
      allMsg.value.map(item => {
        if(item.name.indexOf(queryString) !== -1 && item.id.toString().indexOf(query.id) !== -1){
          tableData.value.push(item)
        }
      })
    }

    // 新增功能
    const saveNewForm = () => {
      let newItem = {
        id: tableData.value.length + 1,
        name: newForm.name,
        email: newForm.email,
        create_time: newForm.create_time,
        update_time: newForm.update_time,
        status: newForm.status,
      }
      tableData.value.push(newItem)
      addVisible.value = false
      // axios.post('http://localhost:3000/api/getbasetable', tableData.value).then(res => {
      //   console.log(res)
      // })
      postNewUser(newItem).then(res => {
        console.log(res)
        // console.log(allMsg.value = res.data.obj.list)
        // tableData.value = res.data.obj.list;
        // console.log(res)
        // pageTotal.value = res.data.obj.pageTotal || 50;

      })
    }

    // 编辑操作
    let idx = -1
    const handleEdit = (index, row) => {
      idx = index
      Object.keys(form).forEach((item) => {
        form[item] = row[item]
      })
      editVisible.value = true
    }

    const saveEdit = () => {
      editVisible.value = false
      ElMessage.success(`修改第 ${idx + 1} 行成功！`)
      Object.keys(form).forEach((item) => {
        tableData.value[idx][item] = form[item]
      })
    }


    // 删除操作
    const handleDelete = (index, row) => {
      // 二次确认删除
      ElMessageBox.confirm("确认要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          ElMessage.success("删除成功！")
          tableData.value.splice(index, 1)
        })
        .catch(() => {})
    }


   
   

    return {
      query,
      tableData,
      pageTotal,
      editVisible,
      addVisible,
      newForm,
      form,
      handleDelete,
      handleEdit,
      saveEdit,
      saveNewForm,
      handleSearch
    };
  },
};
</script>

<style scoped>
.header-box {
  display: flex;
  justify-content: space-between;
}
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
