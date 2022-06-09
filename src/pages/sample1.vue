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
            <el-option key="1" label="1281" value="1281"></el-option>
            <el-option key="2" label="1282" value="1282"></el-option>
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
        <el-button type="primary" style="margin-bottom:20px"  @click="addForm"
            >新增</el-button
          >
      </div>
      
      

      <el-table
        :data="miniTable"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column prop="id" label="ID" width="70" align="center"></el-table-column>
        <el-table-column prop="name" label="用户名" align="center"></el-table-column>
        <el-table-column prop="email" label="邮箱" align="center">
          <template #default="scope">
            <div v-if="scope.row.email">{{ scope.row.email }}</div>
            <div v-else>暂无</div>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="update_time" label="更新时间" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.status === 1 || scope.row.status === true
                  ? 'success'
                  : 'danger'
              "
              >{{ scope.row.status === 1 || scope.row.status === true ? '成功' : '失败'  }}</el-tag
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
          :page-size="query.pageSize"
          :pager-count="5"
          :current-page="query.pageIndex"
          :total="query.pageTotal"
          @prev-click="togglePagination"
          @next-click="togglePagination"
          @current-change="togglePagination"
        ></el-pagination>
      </div>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="30%">
      <el-form label-width="70px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
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
    <el-dialog :title=" titleValue === true ? '编辑用户' : '新增用户'" v-model="addVisible" width="45%">
    
      <el-form
        ref="ruleForms"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-col :span="11">
            <el-input style="width:150px" v-model="ruleForm.name" />
          </el-col>
        </el-form-item>
         <el-form-item label="邮箱" prop="email">
          <el-col :span="11">
            <el-input style="width:150px" v-model="ruleForm.email" />
          </el-col>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-col :span="11" >
            <el-form-item prop="create_date">
              <el-date-picker
                v-model="ruleForm.create_date"
                type="date"
                placeholder="选择日期"
                style="width: 150px"
              />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="create_time">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.create_time" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="更新时间" >
          <el-col :span="11">
            <el-form-item prop="update_date">
              <el-date-picker
                v-model="ruleForm.update_date"
                type="date"
                placeholder="选择日期"
                style="width: 150px"
              />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="update_time">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.update_time" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-switch v-model="ruleForm.status" />
        </el-form-item> 
      </el-form>
      <template #footer >
        <span class="dialog-footer" >
          <el-button v-if="titleValue === false" @click="cancelAdd">取消</el-button>
          <el-button v-if="titleValue === true" @click="cancelEdit">取消 ?</el-button>
          <el-button v-if="titleValue === false" type="primary" @click="saveNewForm">确定</el-button>
          <el-button v-if="titleValue === true" type="primary" @click="saveEdit()" >确 定？</el-button>
        </span>
      </template>
      <!-- <span>{{JSON.stringify(ruleForm)}}</span> -->

    </el-dialog>
  </div>
</template>
<script>
import { ref, reactive, computed, toRefs } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { getUsersList, postNewUser } from '../api/restful';


// import { fetchData } from "../api/data";
// import { getBasetable, postBasetable } from "../mock/basetable.js"
// import axios from 'axios';

export default {
  name: "basetable",
  setup() {
    const titleValue = ref(false)
    const editVisible = ref(false)
    const addVisible = ref(false)
    const query = reactive({
      id: "",
      name: "",
      pageIndex: 1, // 当前页
      pageSize: 10, // 每页的条页个数
      pageTotal:10, // 总条目数
    });
    const ruleForms = ref(null)
    const tableData = ref([]);
    // const allMsg = ref([])
    const miniTable = ref([])
    const form = reactive({
      name: '',
      email: '',
      create_date: '',
      create_time: '',
      update_date: '',
      update_time: '',
      status: false,
    })

    // 获取表格数据
    const getData = () => {
      getUsersList({}).then((res) => {
        // allMsg.value = res.data.data
        // console.log(allMsg)
        tableData.value = res.data.data;
        query.pageTotal = tableData.value.length
        if(query.pageSize > tableData.value.length) {
          miniTable.value = tableData.value
        } else {
          let beginNum = (query.pageIndex - 1) * query.pageSize
          let endNum = query.pageIndex * query.pageSize
          for( beginNum; beginNum < endNum; beginNum++){
            miniTable.value.push(tableData.value[beginNum])
          }
        }
        
      });
    };
    getData();
    console.log(miniTable.value)

    const formSize = ref('default')
const ruleForm = reactive({
  
    name: '',
    email: '',
    create_date: 'Wed Jun 08 2022 23:25:59 GMT+0800',
    create_time: '',
    update_date: '',
    update_time: '',
    status: false,
  
  
})



const rules = reactive({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, message: '用户名长度不能小于 3', trigger: 'blur' },
  ],
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur',
    },
  ],
  create_date: [
    {
      type: 'date',
      required: false,
      message: '请选择创建日期',
      trigger: 'change',
    },
  ],
  create_time: [
    {
      type: 'date',
      required: false,
      message: '请选择创建时间',
      trigger: 'change',
    },
  ],
  update_date: [
    {
      type: 'date',
      required: false,
      message: '请选择更新日期',
      trigger: 'change',
    },
  ],
  update_time: [
    {
      type: 'date',
      required: false,
      message: '请选择更新时间',
      trigger: 'change',
    },
  ],
  status: [
    {
      required: false,
      message: '请选择状态',
      trigger: 'change',
    }
  ]

})

    // 搜索功能
    function handleSearch(queryString) {
      miniTable.value = []
      tableData.value.map(item => {
        if(item.name.indexOf(queryString) !== -1 && item.id.toString().indexOf(query.id) !== -1){
          miniTable.value.push(item)
        }
      })
    }

    // 转换日期格式
    const formatDate = (val1, val2) => {
      // debugger
      console.log(val1,val2)
      let seperator1 = "-"
      let seperator2 = ":"
      
      let value1, value2, month, day, hour, minute, second,formatDate
      if (!val1 && !val2) { 
        formatDate = ""
        return formatDate
      }
      else if (!val1) {
        value1 = new Date(val2)
        value2 = new Date(val2)
        month = value1.getMonth() + 1
        day = value1.getDay()
        hour = value2.getHours()
        minute = value2.getMinutes()
        second = value2.getSeconds()
      }
      else if (!val2) {
        value1 = new Date(val1)
        month = value1.getMonth() + 1
        day = value1.getDay()
        hour = 0
        minute = 0
        second = 0
      }else {
        value1 = new Date(val1)
        value2 = new Date(val2)
        month = value1.getMonth() + 1
        day = value1.getDate()
        hour = value2.getHours()
        minute = value2.getMinutes()
        second = value2.getSeconds()
      }

      if (month >=1 && month <= 9){
        month = "0" + month
      }
      if (day >=1 && day <= 9) {
        day = "0" + day
      }
      if (hour >= 0 && hour <= 9){
        hour = "0" + hour
      }
      if (minute >= 0 && minute <= 9) {
        minute = "0" + minute
      }
      if (second >= 0 && second <= 9) {
        second = "0" + second
      }
      formatDate = value1.getFullYear() + seperator1 + month + seperator1 + day + " " + hour + seperator2 + minute + seperator2 + second;
      return formatDate
    }

    // 清空 reactive 对象
    const clear = (obj) => {
      Object.keys(obj).map(key => {
        if (key === "status") obj[key] = false
        else obj[key] = ""
      })
    }

    // 点击新增按钮
    const addForm = () => {
      // debugger
      titleValue.value = false
      addVisible.value = true
      clear(ruleForm)
      console.log(ruleForm)
      // ruleForms.value.resetFields()
      console.log(ruleForm)
    }

    // 取消新增
    const cancelAdd = () => {
      addVisible.value = false
      clear(ruleForm)
      // ruleForms.value.validate()
      ruleForms.value.resetFields()
    }

    // 保存新增内容
    const saveNewForm = () => {
      // debugger
      console.log(ruleForm.create_date)
      let newItem = []
      ruleForms.value.validate((valid) => {
        if (valid) {
          newItem = [{
            id: tableData.value.length + 1,
            name: ruleForm.name,
            email: ruleForm.email,
            create_time: formatDate(ruleForm.create_date, ruleForm.create_time),
            update_time: formatDate(ruleForm.update_date, ruleForm.update_time),
            status: ruleForm.status,
          }]
          tableData.value = newItem.concat(tableData.value)
          // allMsg.value = newItem.concat(allMsg.value)
          addVisible.value = false
          query.pageTotal = tableData.value.length
          miniTable.value = tableData.value.slice((query.pageIndex - 1) * query.pageSize, query.pageIndex * query.pageSize) 
          postNewUser(newItem[0]).then(res => {  
            console.log(res)
          })
          ruleForms.value.resetFields()
        }else {
          // clear(ruleForm)
          console.log('error submit!!');
          return false;
        }
      })
    }

    // 取消编辑
    const cancelEdit = () => {
      addVisible.value = false
      console.log(form)
      ruleForms.value.resetFields()
      Object.keys(form).map((key) => {
        miniTable.value[idx][key] = form[key]
      })
      console.log(miniTable.value[idx])
    }

    const transformTime = str => {
      // debugger
      let string1 
      if(!str) string1 = ""
      else string1 = new Date(str.replace("T", " ").replace("Z",""))
      console.log("aaa---",string1)
      return string1
    }

    // 编辑操作
    let idx = -1
    const handleEdit = (index, row) => {
      console.log(row)
      idx = index
      titleValue.value = true
      // 点击编辑按钮，弹框里的内容保持一致
      Object.keys(ruleForm).map(key => {
        if (key === "create_date") {
        
          // if (ruleForm)
          ruleForm[key] = transformTime(row["create_time"])
        }
        else if (key === "create_time") ruleForm[key] = transformTime(row["create_time"])
        else if (key === "update_date") ruleForm[key] = transformTime(row["update_time"])
        else if ( key === "update_time") ruleForm[key] = transformTime(row["update_time"])
        else ruleForm[key] = row[key]
        console.log(ruleForm[key])
      })
      console.log("aaa4 ",ruleForm)

      Object.keys(form).map(key => {
        form[key] = row[key]
      })
      console.log(miniTable.value[idx])

      addVisible.value = true
    }
    // 保存编辑
    const saveEdit = () => {
      ruleForms.value.validate((valid) => {
        if(valid) {
          let id = ref(miniTable.value[idx]['id'])
           console.log(id)
           Object.keys(miniTable.value[idx]).map((item) => {
             miniTable.value[idx][item] = ruleForm[item]
           })
           miniTable.value[idx]['id'] = id.value
           miniTable.value[idx].create_time = formatDate(ruleForm.create_date, ruleForm.create_time)
           miniTable.value[idx]['update_time'] = formatDate(ruleForm['update_date'],ruleForm['update_time'])
           ElMessage.success(`修改第 ${idx + 1} 行成功！`)
           addVisible.value = false
        } else {
          console.log('error edit!')

          return false
        }
      })
    }


    // 删除操作
    const handleDelete = (index, row) => {
      // 二次确认删除
      ElMessageBox.confirm("确认要删除吗？", "提示", {
        type: "warning"
      })
        .then(() => {
          tableData.value.splice(index, 1)
          query.pageTotal = tableData.value.length
          if (query.pageSize > tableData.value.length) miniTable.value = tableData.value
          else {
            miniTable.value = []
            for( let i = 1; i < tableData.value.length; i++){
              miniTable.value.push(tableData.value[i])
            }
          }
          ElMessage.success("删除成功！")
        })
        .catch(() => {})
    }

    const togglePagination = (page) => {
      query.pageIndex = page
      let beginNum = (page - 1) * query.pageSize
      let endNum = query.pageSize * page > query.pageTotal ? query.pageTotal : query.pageSize * page
      miniTable.value = []

      for (beginNum; beginNum < endNum; beginNum++) {
        miniTable.value.push(tableData.value[beginNum])
      }
    }
    return {
      titleValue,
      query,
      tableData,
      miniTable,
      editVisible,
      addVisible,
      rules,
      ruleForm,
      ruleForms,
      addForm,
      handleDelete,
      handleEdit,
      cancelAdd,
      cancelEdit,
      saveEdit,
      saveNewForm,
      handleSearch,
      togglePagination
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
  height: 770px;
  font-size: 14px;
  /* overflow: scroll; */
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
