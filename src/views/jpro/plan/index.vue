<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">

      <template #search-time="{ searchForm, component }">
        <!-- 显示一个输入框组件，并绑定输入框的v-model -->
        <a-range-picker v-model="searchForm[component.dataIndex]" style="width: 360px; margin: 0 24px 24px 0;" show-time
          :time-picker-props="{ defaultValue: ['00:00:00', '23:59:59'] }" format="YYYY-MM-DD HH:mm" />
      </template>

      <template #tableAfterButtons v-if="checkAuth('jpro:plan:delete')" v-auth="['jpro:planType:index']">
        <a-button @click="open" type="primary">任务类型管理</a-button>
        <a-modal v-model:visible="visible" :footer="false" width="70%">
          <template #title>任务类型管理</template>
          <plan-type-list ref="planTypeListRef" :visible="visible" @close="visible = false"></plan-type-list>
        </a-modal>
      </template>


    </ma-crud>

  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproPlan from '@/api/jpro/jproPlan'
import { Message } from '@arco-design/web-vue'
import user from '@/api/system/user'
import planType from '@/api/jpro/jproPlanType'
import tool from '@/utils/tool'
import * as common from '@/utils/common'
import planTypeList from '../planType/index.vue'
import checkAuth from '@/directives/auth/auth'
import dayjs from 'dayjs'
const crudRef = ref()



const visible = ref(false)
const open = () => {
  visible.value = true
}

const numberOperation = (newValue, id, numberName) => {
  jproPlan.numberOperation({ id, numberName, numberValue: newValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}

const switchStatus = (statusValue, id, statusName) => {
  jproPlan.changeStatus({ id, statusName, statusValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}



const options = reactive({
  id: 'jpro_plan',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 160,
  operationColumnFixed: false,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  beforeRequest: (params) => {
    params.user_id = params.username_and_nickname
    params.plan_type = params.plan_type_name
  },
  beforeAdd: (data) => {
    data.user_id = data.username_and_nickname
    data.plan_type = data.plan_type_name
    return data
  },
  beforeEdit: (data) => {
    data.plan_type = data.plan_type_name
    return data
  },
  api: jproPlan.getList,
  recycleApi: jproPlan.getRecycleList,
  add: {
    show: true,
    api: jproPlan.save,
    auth: ['jpro:plan:save']
  },
  edit: {
    show: true,
    api: jproPlan.update,
    auth: ['jpro:plan:update']
  },
  delete: {
    show: true,
    api: jproPlan.deletes,
    auth: ['jpro:plan:delete'],
    realApi: jproPlan.realDeletes,
    realAuth: ['jpro:plan:realDeletes']
  },
  recovery: {
    show: true,
    api: jproPlan.recoverys,
    auth: ['jpro:plan:recovery']
  },
  import: {
    show: true,
    url: 'jpro/plan/import',
    templateUrl: 'jpro/plan/downloadTemplate',
    auth: ['jpro:plan:import']
  },
  export: {
    show: true,
    url: 'jpro/plan/export',
    auth: ['jpro:plan:export']
  },
  formOption: {
    width: 800,
    layout: [
      // { formType: 'grid', cols: [ { span: 24, formList: [ { dataIndex: 'avatar' }] }]  },
      // { formType: 'grid', cols: [ { span: 12, formList: [ { dataIndex: 'username' }] }, { span: 12, formList: [{ dataIndex: 'dept_ids' }] }]  },
      // { formType: 'grid', cols: [ { span: 12, formList: [ { dataIndex: 'password' }] }, { span: 12, formList: [{ dataIndex: 'nickname' }] }]  },
      // { formType: 'grid', cols: [ { span: 12, formList: [ { dataIndex: 'role_ids' }] }, { span: 12, formList: [{ dataIndex: 'phone' }] }]  },
      // { formType: 'grid', cols: [ { span: 12, formList: [ { dataIndex: 'post_ids' }] }, { span: 12, formList: [{ dataIndex: 'email' }] }]  },
      // { formType: 'grid', cols: [ { span: 24, formList: [ { dataIndex: 'status' }] }] },
      // { formType: 'grid', cols: [ { span: 24, formList: [ { dataIndex: 'remark' }] }] },
    ]
  },
})

const columns = reactive([
  {
    title: "",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入"
    }
  },
  {
    title: "用户",
    dataIndex: "username_and_nickname",
    formType: "select",
    search: true,
    dict: {
      url: 'system/user/getList',
      props: { label: 'username_and_nickname', value: 'id' },
    },
    commonRules: [{ required: true, message: '用户必选' }],
  },
  {
    title: "任务类型",
    dataIndex: "plan_type_name",
    formType: "select",
    search: true,
    dict: {
      remote: 'jpro/planType/remote',
      props: { label: "name", value: "id" }
    },
    translation: true
  },
  {
    title: "详情",
    dataIndex: "detail",
    formType: "editor",
    hide: true
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "input",
    addDisplay: true,
    editDisplay: true,
    hide: true,
  },
  {
    title: "计划时间",
    dataIndex: "time",
    formType: "date",
    format: "YYYY-MM-DD HH:mm",
    addDefaultValue: dayjs().format('YYYY-MM-DD 00:00'),
    search: true,
    showTime: true
  },
  {
    title: "状态",
    dataIndex: "status",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入状态"
    },
    dict: {
      name: "plan_status",
      translation: true,
      tagColors: { 2: 'green' },
    },

    addDefaultValue: 1,
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "input",    
    search: false,
    // addDisplay: true,
    // editDisplay: true,
  },
])
</script>
<script>export default { name: 'jpro:plan' } </script>