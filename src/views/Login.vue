<script lang="ts" setup>
import type { SigninRequest } from '@/types/auth'
import { App } from 'ant-design-vue'

const { message } = App.useApp()

const formState = reactive<SigninRequest>({
  username: '',
  password: '',
  captcha: '',
  remember: true,
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
      <h2 class="mb-4 text-2xl text-gray-700 font-bold tracking-wide">
        欢迎登录
      </h2>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        class="w-full flex flex-col gap-1"
        @finish="onFinish"
        @finish-failed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item
          label="验证码"
          name="captcha"
          :rules="[{ required: true, message: 'Please input your captcha!' }]"
        >
          <a-input v-model:value="formState.captcha" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">
            记住我
          </a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
