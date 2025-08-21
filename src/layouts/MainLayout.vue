<script setup lang="ts">
import { useSiderCollapsedStore } from '@/stores/global'

const { siderCollapsed } = storeToRefs(useSiderCollapsedStore())
</script>

<template>
  <article class="h-screen">
    <a-layout class="h-full">
      <a-layout-sider v-model:collapsed="siderCollapsed" :trigger="null" collapsible>
        <Sider />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
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
