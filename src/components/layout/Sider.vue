<script setup lang="ts">
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons-vue'
import { useSiderCollapsedStore } from '@/stores/global'

const { siderCollapsed } = storeToRefs(useSiderCollapsedStore())
const selectedKeys = ref<string[]>(['1'])
</script>

<template>
  <div>
    <div v-if="siderCollapsed" class="h-8 m-inline-2 m-block-4 flex justify-center items-center gap-2">
      <a-image :width="32" src="https://aliyuncdn.antdv.com/logo.png" :preview="false" />
    </div>
    <div v-else class="h-8 m-inline-2 m-block-4 flex items-center gap-2">
      <a-image :width="32" src="https://aliyuncdn.antdv.com/logo.png" :preview="false" />
      <h3 class="text-white">
        Vue Antd Starter
      </h3>
    </div>
    <div>
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
    </div>
  </div>
</template>

<style scoped>

</style>
