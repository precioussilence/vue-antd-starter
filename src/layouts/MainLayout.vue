<script setup lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons-vue'

const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
</script>

<template>
  <article class="h-screen">
    <a-layout class="h-full">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="h-8 m-4">
          <a-image :width="32" src="https://aliyuncdn.antdv.com/vue.png" :preview="false" />
          <a-image :width="32" src="https://aliyuncdn.antdv.com/logo.png" :preview="false" />
        </div>
        <a-menu v-model:selected-keys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <VideoCameraOutlined />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <UploadOutlined />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" class="flex items-center">
          <MenuUnfoldOutlined
            v-if="collapsed"
            class="font-size-6 line-height-16 m-inline-4 p-block-0 cursor-pointer transition-color duration-300"
            @click="() => (collapsed = !collapsed)"
          />
          <MenuFoldOutlined
            v-else
            class="font-size-6 line-height-16 m-inline-4 p-block-0 cursor-pointer transition-color duration-300"
            @click="() => (collapsed = !collapsed)"
          />
          <a-divider type="vertical" class="h-4 " />
          <Header />
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <slot />
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          © 2025 Vue Antd Starter. All Rights Reserved.
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </article>
</template>
