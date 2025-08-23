<script setup lang="ts">
import { App } from 'ant-design-vue'

defineOptions({
  name: 'Home',
})

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
    placement: 'topRight',
  })
}
</script>

<template>
  <div class="h-full">
    <a-card title="This is the Home view." class="h-full">
      <p style="font-size: 14px; color: rgba(0, 0, 0, 0.85); margin-bottom: 16px; font-weight: 500">
        Some examples of Ant Design Vue components:
      </p>
      <a-card title="Message examples">
        <template #extra>
          <a href="#">More</a>
        </template>
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
      </a-card>
      <a-card title="Timeline examples" :style="{ marginTop: '16px' }">
        <template #extra>
          <a href="#">More</a>
        </template>
        <a-timeline>
          <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
          <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
          <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
          <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
        </a-timeline>
      </a-card>
      <a-card title="Watermark examples" :style="{ marginTop: '16px' }">
        <template #extra>
          <a href="#">More</a>
        </template>
        <a-watermark content="Ant Design Vue">
          <a-timeline>
            <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
            <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
            <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
            <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
          </a-timeline>
        </a-watermark>
      </a-card>
    </a-card>
  </div>
</template>

<style scoped>

</style>
