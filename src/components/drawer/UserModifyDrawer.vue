<script setup lang="ts">
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import type { UserModifyParams } from '@/types/system'
import { App } from 'ant-design-vue'
import { delay } from '@/utils/common'

const open = defineModel<boolean>('open')

const formRef = useTemplateRef<FormInstance>('formRef')
const formState = reactive<UserModifyParams>({})

const rules: Record<string, Rule[]> = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'change' },
    { min: 8, max: 16, message: '用户名长度应为8~16个字符', trigger: 'blur' },
  ],
  realname: [
    { required: true, message: '请输入姓名', trigger: 'change' },
    { min: 2, max: 16, message: '用户名长度应为2~16个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入初始密码', trigger: 'change' },
    { min: 2, max: 16, message: '用户名长度应为16~24个字符', trigger: 'blur' },
  ],
}

const { message } = App.useApp()
const loading = ref(false)

async function onFinish(values: UserModifyParams) {
  console.warn('Received values of form: ', values)
  loading.value = true
  await delay(5000)
  loading.value = false
  open.value = false
  message.success('Success!')
}
</script>

<template>
  <div>
    <a-drawer
      v-model:open="open"
      :closable="false"
      :width="720"
      :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }"
    >
      <a-card title="修改用户" class="h-full">
        <a-form
          ref="formRef"
          layout="vertical"
          :model="formState"
          :rules="rules"
          @finish="onFinish"
        >
          <a-row>
            <a-col :span="24">
              <a-form-item label="用户名" name="username">
                <a-input v-model:value="formState.username" placeholder="请输入用户名" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="姓名" name="realname">
                <a-input v-model:value="formState.realname" placeholder="请输入姓名" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="手机号" name="phone">
                <a-input v-model:value="formState.phone" placeholder="请输入手机号" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="邮箱" name="email">
                <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
              </a-form-item>
            </a-col>
            <a-col :span="24">
              <a-form-item label="所属部门" name="depart">
                <a-input v-model:value="formState.depart" placeholder="请输入部门" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24" style="text-align: right">
              <a-button type="primary" html-type="submit" :loading="loading">
                提交
              </a-button>
              <a-button style="margin: 0 8px" @click="() => formRef?.resetFields()">
                清除
              </a-button>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
    </a-drawer>
  </div>
</template>

<style scoped>

</style>
