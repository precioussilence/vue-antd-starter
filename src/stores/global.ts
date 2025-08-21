export const useSiderCollapsedStore = defineStore('siderCollapsed', () => {
  const siderCollapsed = ref(false)
  function toggleSiderCollapsed() {
    siderCollapsed.value = !siderCollapsed.value
  }

  return { siderCollapsed, toggleSiderCollapsed }
})
