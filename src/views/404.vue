<script setup lang="ts">
defineOptions({
  name: 'NotFound',
})
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <a-result status="404" title="404" sub-title="对不起，你访问的页面不存在。">
      <template #extra>
        <a-button type="primary">
          <router-link to="/">
            返回首页
          </router-link>
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<style scoped>

</style>
