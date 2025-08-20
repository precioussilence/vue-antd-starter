<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const route = useRoute()
const layout = computed(() => {
  return route.meta.layout === 'auth' ? AuthLayout : MainLayout
})
</script>

<template>
  <a-config-provider>
    <a-app>
      <transition name="fade" mode="out-in">
        <component :is="layout">
          <router-view />
        </component>
      </transition>
    </a-app>
  </a-config-provider>
</template>
