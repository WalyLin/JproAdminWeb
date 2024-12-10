<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproExtraInfo from '@/api/jpro/jproExtraInfo'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  jproExtraInfo.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  jproExtraInfo.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'jpro_extra_info',
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
  api: jproExtraInfo.getList,
  recycleApi: jproExtraInfo.getRecycleList,
  add: {
    show: true,
    api: jproExtraInfo.save,
    auth: ['jpro:extraInfo:save']
  },
  edit: {
    show: true,
    api: jproExtraInfo.update,
    auth: ['jpro:extraInfo:update']
  },
  delete: {
    show: true,
    api: jproExtraInfo.deletes,
    auth: ['jpro:extraInfo:delete'],
    realApi: jproExtraInfo.realDeletes,
    realAuth: ['jpro:extraInfo:realDeletes']
  },
  recovery: {
    show: true,
    api: jproExtraInfo.recoverys,
    auth: ['jpro:extraInfo:recovery']
  },
  import: {
    show: true,
    url: 'jpro/extraInfo/import',
    templateUrl: 'jpro/extraInfo/downloadTemplate',
    auth: ['jpro:extraInfo:import']
  },
  export: {
    show: true,
    url: 'jpro/extraInfo/export',
    auth: ['jpro:extraInfo:export']
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
    formType: "user-select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入用户id"
    },
    onlyId: false
  },
  {
    title: "类型",
    dataIndex: "type",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入类型"
    }
  },
  {
    title: "额外信息详情",
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
    hide: true
  },
  {
    title: "可以查看的角色",
    dataIndex: "role",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入可以查看的角色"
    }
  },
  {
    title: "状态 1-正常 2-禁用",
    dataIndex: "status",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入状态 1-正常 2-禁用"
    },
    dict: {
      data: [
        {
          label: "正常",
          value: "1"
        },
        {
          label: "禁用",
          value: "2"
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
    hide: true,
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
<script> export default { name: 'jpro:extraInfo' } </script>