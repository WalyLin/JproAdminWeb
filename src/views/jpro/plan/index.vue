<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproPlan from '@/api/jpro/jproPlan'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  jproPlan.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  jproPlan.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
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
  }
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
    title: "用户id",
    dataIndex: "user_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入用户id"
    }
  },
  {
    title: "事件类型",
    dataIndex: "plan_type",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入事件类型"
    }
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
    showTime: true
  },
  {
    title: "允许查看角色",
    dataIndex: "role",
    formType: "input",
    search: true
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
      data: [
        {
          label: "未开始",
          value: "1"
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
    }
  },
  {
    title: "",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    showTime: true
  },
  {
    title: "",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'jpro:plan' } </script>