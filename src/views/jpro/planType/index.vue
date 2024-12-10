<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproPlanType from '@/api/jpro/jproPlanType'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  jproPlanType.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  jproPlanType.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'jpro_plan_type',
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
  api: jproPlanType.getList,
  recycleApi: jproPlanType.getRecycleList,
  add: {
    show: true,
    api: jproPlanType.save,
    auth: ['jpro:planType:save']
  },
  edit: {
    show: true,
    api: jproPlanType.update,
    auth: ['jpro:planType:update']
  },
  delete: {
    show: true,
    api: jproPlanType.deletes,
    auth: ['jpro:planType:delete'],
    realApi: jproPlanType.realDeletes,
    realAuth: ['jpro:planType:realDeletes']
  },
  recovery: {
    show: true,
    api: jproPlanType.recoverys,
    auth: ['jpro:planType:recovery']
  },
  import: {
    show: true,
    url: 'jpro/planType/import',
    templateUrl: 'jpro/planType/downloadTemplate',
    auth: ['jpro:planType:import']
  },
  export: {
    show: true,
    url: 'jpro/planType/export',
    auth: ['jpro:planType:export']
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
    title: "上级分类",
    dataIndex: "pid",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入上级分类"
    }
  },
  {
    title: "类型名称",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入类型名称"
    }
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
    title: "可以查看角色",
    dataIndex: "role",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入可以查看角色"
    }
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
          label: "启用",
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
<script> export default { name: 'jpro:planType' } </script>