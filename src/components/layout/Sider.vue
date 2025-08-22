<script setup lang="ts">
import type { MenuProps } from 'ant-design-vue'
import { useLocalStorage } from '@vueuse/core'
import { App } from 'ant-design-vue'
import { menuItems } from '@/router/routes'
import { useSiderCollapsedStore } from '@/stores/global'

const { siderCollapsed } = storeToRefs(useSiderCollapsedStore())

const state = reactive({
  selectedKeys: ['/'],
  openKeys: ['/system'],
})
const items = reactive(menuItems)

const router = useRouter()
const { message } = App.useApp()

const lastState = useLocalStorage('lastState', {
  openKeys: state.openKeys,
  selectedKeys: state.selectedKeys,
})

const handleClick: MenuProps['onClick'] = (e) => {
  router.push(e.key.toString()).catch((err) => {
    console.error('route failed,path: ', e.key, ',Reason: ', err)
    message.error(err.message)
  })
  lastState.value.selectedKeys = [e.key.toString()]
}

watch(
  () => state.openKeys,
  (newVal) => {
    lastState.value.openKeys = newVal
  },
)
onMounted(() => {
  if (lastState.value.selectedKeys) {
    state.selectedKeys = lastState.value.selectedKeys
  }
  else {
    state.selectedKeys = [router.currentRoute.value.fullPath]
  }
})
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
