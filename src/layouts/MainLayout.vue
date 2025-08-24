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
      <a-layout class="flex flex-col">
        <a-layout-header style="background: #fff; padding: 0">
          <Header />
        </a-layout-header>
        <a-layout-content class="flex-1">
          <slot />
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          © 2025 Vue Antd Starter. All Rights Reserved.
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </article>
</template>
