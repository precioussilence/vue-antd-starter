<script setup lang="ts">
import type { MenuProps } from 'ant-design-vue'
import { App } from 'ant-design-vue'
import { useSiderCollapsedStore } from '@/stores/global'

const { siderCollapsed } = storeToRefs(useSiderCollapsedStore())

const state = reactive({
  selectedKeys: ['1'],
  openKeys: ['sub1'],
})
const items = reactive([
  {
    key: '1',
    icon: h('i', { class: 'i-carbon-home', style: 'font-size: 18px;' }),
    label: '首页',
    title: '首页',
    path: '/',
  },
  {
    key: '2',
    icon: () => h('i', { class: 'i-carbon-settings', style: 'font-size: 18px;' }),
    label: 'Option 2',
    title: 'Option 2',
  },
  {
    key: '3',
    icon: () => h('i', { class: 'i-carbon-settings', style: 'font-size: 18px;' }),
    label: 'Option 3',
    title: 'Option 3',
  },
  {
    key: 'sub1',
    icon: () => h('i', { class: 'i-carbon-settings', style: 'font-size: 18px;' }),
    label: '系统管理',
    title: '系统管理',
    path: '/system',
    children: [
      {
        key: '5',
        icon: () => h('i', { class: 'i-carbon-user', style: 'font-size: 18px;' }),
        label: '用户管理',
        title: '用户管理',
        path: '/system/user',
      },
      {
        key: '6',
        icon: () => h('i', { class: 'i-carbon-user-role', style: 'font-size: 18px;' }),
        label: '角色管理',
        title: '角色管理',
        path: '/system/role',
      },
      {
        key: '7',
        icon: () => h('i', { class: 'i-carbon-menu', style: 'font-size: 18px;' }),
        label: '菜单管理',
        title: '菜单管理',
        path: '/system/menu',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ],
  },
])

const router = useRouter()
const { message } = App.useApp()

const handleClick: MenuProps['onClick'] = (e) => {
  const { path } = e.item
  if (path) {
    router.push(path)
  }
  else {
    console.warn('No path found for clicked menu item:', e)
    message.warning('当前菜单项未配置路由！')
  }
}
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
      <a-menu
        v-model:open-keys="state.openKeys"
        v-model:selected-keys="state.selectedKeys"
        mode="inline"
        theme="dark"
        :items="items"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
