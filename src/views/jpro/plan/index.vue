<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
       <!-- 自定义字段名为 status 的插槽 -->
       <template #search-user_nickname="{ searchForm, component }">
            <!-- 显示一个输入框组件，并绑定输入框的v-model -->
            <a-select v-model="searchForm[component.dataIndex]" placeholder="请输入昵称" :options="user_nicknameSelect" :field-names="user_nicknameSelectfieldNames"/>
        </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproPlan from '@/api/jpro/jproPlan'
import { Message } from '@arco-design/web-vue'
import user from '@/api/system/user'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()

const userList = ref([])
user.getList().then(res => {
  res.data.map(item=>{item.nickname = item.nickname?item.nickname:item.username;return item})
  userList.value = res.data
})

const user_nicknameSelect = userList;
const  user_nicknameSelectfieldNames={value:'nickname',label:'昵称'}

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
  formOption: {
    viewType: 'modal',
    width: 600
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
    dataIndex: "user_nickname",
    formType: "select",
    search: true,
    dict: { 
      data: userList,
      props: { label: 'nickname', value: 'id' } ,
    },
    commonRules: [{ required: true, message: '用户必选' }],
  },
  {
    title: "事件详情",
    dataIndex: "detail",
    formType: "editor",
    hide: true
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入备注"
    }
  },
  {
    title: "计划时间",
    dataIndex: "time",
    formType: "date",
    search: true,
    showTime: false
  },
  // {
  //   title: "允许查看角色",
  //   dataIndex: "role",
  //   formType: "input",
  //   search: true
  // },
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
      data: [
        {
          label: "未开始",
          value: "1",
        },
        {
          label: "进行中",
          value: "2"
        },
        {
          label: "执行完毕",
          value: "3"
        },
        {
          label: "取消",
          value: "4"
        }
      ],
      translation: true
    },
    addDefaultValue: 1,
  },
])
</script>
<script>export default { name: 'jpro:plan' } </script>