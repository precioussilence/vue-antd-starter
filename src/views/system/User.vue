<script setup lang="ts">
import type { FormInstance, TableColumnsType } from 'ant-design-vue'
import type { SearchUserParams, UserListItem } from '@/types/system'

const activeKey = ref([])
const formRef = useTemplateRef<FormInstance>('formRef')
const formState = reactive<SearchUserParams>({})
const openSaveUserModal = ref(false)

const columns: TableColumnsType = [
  { title: 'id', width: 100, dataIndex: 'id', key: 'id', fixed: 'left' },
  { title: '用户名', width: 100, dataIndex: 'username', key: 'username', fixed: 'left' },
  { title: '姓名', dataIndex: 'realname', key: 'realname', width: 150 },
  { title: '昵称', dataIndex: 'nickname', key: 'nickname', width: 150 },
  { title: '手机', dataIndex: 'phone', key: 'phone', width: 150 },
  { title: '邮箱', dataIndex: 'email', key: 'email', width: 150 },
  { title: '部门', dataIndex: 'depart', key: 'depart', width: 150 },
  { title: '性别', dataIndex: 'gender', key: 'gender', width: 150 },
  { title: '状态', dataIndex: 'status', key: 'status', width: 150 },
  { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
  { title: '修改时间', dataIndex: 'updateTime', key: 'updateTime' },
  { title: '操作', key: 'operation', fixed: 'right', width: 100 },
]

const data: UserListItem[] = []
for (let i = 0; i < 100; i++) {
  const create = new Date()
  const update = new Date()
  create.setDate(create.getDate() - 100 + i)
  update.setDate(update.getDate() - i)
  data.push({
    id: i,
    username: `Edrward ${i}`,
    realname: `爱德华 ${i}`,
    nickname: `nickname ${i}`,
    phone: `15${i}0000000`,
    email: `email${i}@163.com`,
    depart: `depart ${i}`,
    gender: `${i % 2 === 0 ? '男' : '女'}`,
    status: `${i % 3 === 0 ? '正常' : (i % 3 === 1 ? '禁用' : '冻结')}`,
    createTime: `${create.toLocaleDateString()}`,
    updateTime: `${update.toLocaleDateString()}`,
  })
}

function onFinish(values: SearchUserParams) {
  console.warn('Received values of form: ', values)
}
</script>

<template>
  <div class="h-full flex flex-col overflow-hidden">
    <a-card title="用户列表" class="h-full">
      <template #extra>
        <a-button type="primary" @click="openSaveUserModal = true">
          添加用户
        </a-button>
      </template>
      <a-collapse v-model:active-key="activeKey" accordion>
        <a-collapse-panel key="1" header="搜索">
          <a-form
            ref="formRef"
            name="advanced_search"
            :model="formState"
            @finish="onFinish"
          >
            <a-row :gutter="24">
              <a-col :span="6">
                <a-form-item label="用户名" name="username">
                  <a-input v-model:value="formState.username" placeholder="请输入用户名" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="姓名" name="realname">
                  <a-input v-model:value="formState.realname" placeholder="请输入姓名" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="昵称" name="nickname">
                  <a-input v-model:value="formState.nickname" placeholder="请输入昵称" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="手机号" name="phone">
                  <a-input v-model:value="formState.phone" placeholder="请输入手机号" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="邮箱" name="email">
                  <a-input v-model:value="formState.email" placeholder="请输入邮箱" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="部门" name="depart">
                  <a-input v-model:value="formState.depart" placeholder="请输入部门" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="性别" name="gender">
                  <a-select v-model:value="formState.gender" placeholder="请选择性别">
                    <a-select-option value="1">
                      男
                    </a-select-option>
                    <a-select-option value="2">
                      女
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="状态" name="status">
                  <a-select v-model:value="formState.status" placeholder="请选择状态">
                    <a-select-option value="0">
                      正常
                    </a-select-option>
                    <a-select-option value="1">
                      禁用
                    </a-select-option>
                    <a-select-option value="2">
                      冻结
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="24" style="text-align: right">
                <a-button type="primary" html-type="submit">
                  Search
                </a-button>
                <a-button style="margin: 0 8px" @click="() => formRef?.resetFields()">
                  Clear
                </a-button>
              </a-col>
            </a-row>
          </a-form>
        </a-collapse-panel>
      </a-collapse>
      <a-card class="m-block-4">
        <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 600 }">
          <template #bodyCell="{ column }">
            <template v-if="column.key === 'operation'">
              <a>action</a>
            </template>
          </template>
        </a-table>
      </a-card>
    </a-card>
    <user-save-modal v-model:open="openSaveUserModal" />
  </div>
</template>

<style scoped>

</style>
