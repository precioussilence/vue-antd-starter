<script setup lang="ts">
import { App } from 'ant-design-vue'

const { message, modal, notification } = App.useApp()
function showMessage() {
  message.success('Success!')
}

function showModal() {
  modal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  })
}

function showNotification() {
  notification.info({
    message: `Notification topLeft`,
    description: 'Hello, Ant Design Vue!!',
    placement: 'topLeft',
  })
}
</script>

<template>
  <div>
    This is the Home view.
    <h2>Welcome to the Vue Ant Design Starter!</h2>
  </div>
  <a-space wrap>
    <a-button type="primary" @click="showMessage">
      Open message
    </a-button>
    <a-button type="primary" @click="showModal">
      Open modal
    </a-button>
    <a-button type="primary" @click="showNotification">
      Open notification
    </a-button>
  </a-space>
</template>

<style scoped>

</style>
