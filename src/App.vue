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
      <component :is="layout">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <keep-alive include="Home">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </component>
    </a-app>
  </a-config-provider>
</template>
