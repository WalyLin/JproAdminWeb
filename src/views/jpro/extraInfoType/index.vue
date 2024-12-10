<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproExtraInfoType from '@/api/jpro/jproExtraInfoType'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  jproExtraInfoType.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  jproExtraInfoType.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'jpro_extra_info_type',
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
  api: jproExtraInfoType.getList,
  recycleApi: jproExtraInfoType.getRecycleList,
  add: {
    show: true,
    api: jproExtraInfoType.save,
    auth: ['jpro:extraInfoType:save']
  },
  edit: {
    show: true,
    api: jproExtraInfoType.update,
    auth: ['jpro:extraInfoType:update']
  },
  delete: {
    show: true,
    api: jproExtraInfoType.deletes,
    auth: ['jpro:extraInfoType:delete'],
    realApi: jproExtraInfoType.realDeletes,
    realAuth: ['jpro:extraInfoType:realDeletes']
  },
  recovery: {
    show: true,
    api: jproExtraInfoType.recoverys,
    auth: ['jpro:extraInfoType:recovery']
  },
  import: {
    show: true,
    url: 'jpro/extraInfoType/import',
    templateUrl: 'jpro/extraInfoType/downloadTemplate',
    auth: ['jpro:extraInfoType:import']
  },
  export: {
    show: true,
    url: 'jpro/extraInfoType/export',
    auth: ['jpro:extraInfoType:export']
  }
})

const columns = reactive([
  {
    title: "",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "名称",
    dataIndex: "name",
    formType: "input",
    search: true
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
    hide: true
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
<script> export default { name: 'jpro:extraInfoType' } </script>