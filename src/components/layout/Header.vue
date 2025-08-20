<script setup lang="ts">
import type { Breadcrumb } from '@/types/common'

const breadcrumbRoutes = ref<Breadcrumb[]>([])

const currentRoute = useRoute()
function initBreadcrumbRoutes() {
  breadcrumbRoutes.value = currentRoute.matched.filter(item => item.meta).map((item) => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title ? item.meta.title.toString() : '',
    }
  })
}

watch(
  () => currentRoute,
  () => {
    initBreadcrumbRoutes()
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex items-center ml-4 flex-1">
    <div>
      <a-breadcrumb :routes="breadcrumbRoutes">
        <template #itemRender="{ route, routes, paths }">
          <span v-if="routes.indexOf(route) === routes.length - 1">{{ route.breadcrumbName }}</span>
          <router-link v-else :to="paths.join('/')">
            {{ route.breadcrumbName }}
          </router-link>
        </template>
      </a-breadcrumb>
    </div>
    <div class="p-inline-4 flex items-center flex-1 justify-end">
      <a-divider type="vertical" class="h-4 mx-2" />
      <div>
        <a-avatar src="https://www.antdv.com/assets/logo.1ef800a8.svg" />
        <span class="ml-2">Admin</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
