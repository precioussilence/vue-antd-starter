<script setup lang="ts">
defineOptions({
  name: 'Unauthorized',
})
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <a-result status="403" title="403" sub-title="对不起，你没有当前页面的访问权限。">
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
