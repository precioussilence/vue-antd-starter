<script setup lang="ts">
import type { Breadcrumb } from '@/types/common'

const breadcrumbRoutes = ref<Breadcrumb[]>([])

const currentRoute = useRoute()
function initBreadcrumbRoutes() {
  breadcrumbRoutes.value = currentRoute.matched.filter(item => item.name).map((item) => {
    return {
      path: item.path,
      breadcrumbName: item.name ? item.name.toString() : '',
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
</template>

<style scoped>

</style>
