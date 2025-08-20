<script lang="ts" setup>
import type { SignupRequest } from '@/types/auth'
import { App } from 'ant-design-vue'

const { message } = App.useApp()

const formState = reactive<SignupRequest>({
  username: '',
  password: '',
  email: '',
  phone: '',
  captcha: '',
})

function onFinish(values: any) {
  console.warn('Success:', values)
  message.success('Success!')
}

function onFinishFailed(errorInfo: any) {
  console.error('Failed:', errorInfo)
  message.error('Failed!')
}
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center from-indigo-100 to-teal-50 bg-gradient-to-br">
    <div class="max-w-sm w-full flex flex-col items-center rounded-xl bg-white px-8 py-10 shadow-lg">
      <h2 class="mb-8 text-2xl text-gray-700 font-bold tracking-wide">
        欢迎注册
      </h2>
      <a-form
        :model="formState"
        name="basic"
        autocomplete="off"
        class="w-full flex flex-col gap-1"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="请输入用户名" />
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
        </a-form-item>

        <a-form-item
          name="confirmPassword"
          :rules="[{ required: true, message: 'Please confirm your password!' }]"
        >
          <a-input-password v-model:value="formState.confirmPassword" placeholder="请确认密码" />
        </a-form-item>

        <a-form-item
          name="email"
          :rules="[{ required: true, message: 'Please input your email!' }]"
        >
          <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
        </a-form-item>

        <a-form-item
          name="phone"
          :rules="[{ required: true, message: 'Please input your phone number!' }]"
        >
          <a-input v-model:value="formState.phone" placeholder="请输入手机号" />
        </a-form-item>

        <a-form-item
          name="captcha"
          :rules="[{ required: true, message: 'Please input your captcha!' }]"
        >
          <a-input v-model:value="formState.captcha" placeholder="请输入验证码" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">
            注册
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
