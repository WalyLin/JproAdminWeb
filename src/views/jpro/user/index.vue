<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <template #operationBeforeExtend>
        <a-link @click="getEventts(recard)">ent</a-link>
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproUser from '@/api/jpro/jproUser'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  jproUser.numberOperation({ id, numberName, numberValue: newValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}

const switchStatus = (statusValue, id, statusName) => {
  jproUser.changeStatus({ id, statusName, statusValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}

const getEventts = (record) => {
  jproUser.getEvents(record).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}

const options = reactive({
  id: 'jpro_user',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 460,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: jproUser.getList,
  recycleApi: jproUser.getRecycleList,
  add: {
    show: true,
    api: jproUser.save,
    auth: ['jpro:user:save'],    
  },
  edit: {
    show: true,
    api: jproUser.update,
    auth: ['jpro:user:update']
  },
  delete: {
    show: true,
    api: jproUser.deletes,
    auth: ['jpro:user:delete'],
    realApi: jproUser.realDeletes,
    realAuth: ['jpro:user:realDeletes']
  },
  recovery: {
    show: true,
    api: jproUser.recoverys,
    auth: ['jpro:user:recovery']
  },

  // import: {
  //   show: true,
  //   url: 'jpro/user/import',
  //   templateUrl: 'jpro/user/downloadTemplate',
  //   auth: ['jpro:user:import']
  // },
  // export: {
  //   show: true,
  //   url: 'jpro/user/export',
  //   auth: ['jpro:user:export']

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
    title: "昵称",
    dataIndex: "nickname",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入昵称"
    }
  },
  {
    title: "性别",
    dataIndex: "sex",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入性别"
    },
    dict: {
      data: [
        {
          label: "男",
          value: "1"
        },
        {
          label: "女",
          value: "2"
        },
        {
          label: "未知",
          value: "3"
        }
      ],
      translation: true
    }
  },
  {
    title: "年龄",
    dataIndex: "age",
    formType: "input-number",
    search: false,
    min: 0,
    precision: 0
  },
  {
    title: "状态",
    dataIndex: "status",
    formType: "radio",
    search: true,
    commonRules: {
      required: true,
      message: "请输入状态 1正常 2禁用"
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
    title: "备注",
    dataIndex: "remark",
    formType: "input",
    addDisplay: true,
    editDisplay: true,
    // hide: true,
    commonRules: {
      required: false,
      message: "请输入备注"
    }
  },
  {
    title: "创建者",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: false,
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
<script>export default { name: 'jpro:user' } </script>