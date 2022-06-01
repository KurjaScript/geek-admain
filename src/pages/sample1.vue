<template>
<!-- <el-dialog title="编辑" width="30%"> -->
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
  >
    <el-form-item label="用户名" prop="name">
      <el-col :span="11">
        <el-input style="width:245px" v-model="ruleForm.name" />
      </el-col>
    </el-form-item>
    <!-- <el-form-item label="邮箱" prop="email">
      <el-col :span="11">
        <el-input style="width:245px" v-model="ruleForm.email" />
      </el-col>
    </el-form-item>
    <el-form-item label="创建日期">
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="更新日期">
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-date-picker
            v-model="ruleForm.date2"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="状态" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Create</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item> -->
  </el-form>
<!-- </el-dialog> -->
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  name: 'Hello',
  email: '',
  date1: '',
  date2: '',
  type: [],
  delivery: false,
  resource: '',
  desc: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: '请选择创建日期',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: '请选择更新日期',
      trigger: 'change',
    },
  ],
  delivery: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    }
  ]

})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
