<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
      <template #mother_passport="{record}">
        <image-see :url="record.mother_passport"></image-see>
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive, shallowRef } from 'vue'
import jproCheckRecord from '@/api/jpro/jproCheckRecord'
import customerComponent from '@/components/customer/image.vue'
import imageSee from '@/components/customer/imageSee.vue'
import { Message } from '@arco-design/web-vue'

const crudRef = ref()
const numberOperation = (newValue, id, numberName) => {
  jproCheckRecord.numberOperation({ id, numberName, numberValue: newValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}

const switchStatus = (statusValue, id, statusName) => {
  jproCheckRecord.changeStatus({ id, statusName, statusValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}


const options = reactive({
  id: 'jpro_check_record',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 140,
  operationColumnFixed: 'false',
  showTools: false,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: jproCheckRecord.getList,
  // recycleApi: jproCheckRecord.getRecycleList,
  add: {
    show: true,
    api: jproCheckRecord.save,
    auth: ['jpro:checkRecord:save']
  },
  edit: {
    show: true,
    api: jproCheckRecord.update,
    auth: ['jpro:checkRecord:update']
  },
  delete: {
    show: true,
    api: jproCheckRecord.deletes,
    auth: ['jpro:checkRecord:delete'],
    realApi: jproCheckRecord.realDeletes,
    realAuth: ['jpro:checkRecord:realDeletes']
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
    title: "孕妈",
    dataIndex: "mother_id",
    formType: "select",
    dict: {
      url: 'jpro/mother/remote',
      method: 'post',
      props: {
        label: 'name',
        value: 'id'
      },
      translation: true,
    },
    search: true,
    commonRules: {
      required: true,
      message: "请输入孕妈id"
    },
    multiple: false
  },
  {
    title: '孕妈护照',
    dataIndex: "mother_passport",
    formType: "component",
    component: shallowRef(customerComponent)
  },
  {
    title: "医院",
    dataIndex: "hospital_id",
    formType: "select",
    dict: {
      url: 'jpro/common/hospitals',
      props: {
        label: 'name',
        value: 'id'
      },
      translation: true,
    },
    search: true,
    multiple: false
  },
  {
    title: "医生",
    dataIndex: "doctor_id",
    formType: "select",
    dict: {
      url: 'jpro/common/doctors',
      props: {
        label: 'name',
        value: 'id'
      },
      translation: true,
    },
    search: true,
    multiple: false
  },
  {
    title: "月经开始时间",
    dataIndex: "menstrual",
    formType: "date",
    format: 'YYYY-MM-DD HH:mm',
    showTime: true,
    range: false
  },
  {
    title: "检查时间",
    dataIndex: "check_time",
    formType: "date",
    search: true,
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    },
    showTime: false,
    range: false
  },
  {
    title: "状态",
    dataIndex: 'status',
    formType: "radio",
    dict: {
      name: 'check_record_status',
      translation: true,
      tagColors: { 1: 'gray', 2: 'red' },
    },
    addDefaultValue: 1,
  },

  {
    title: "备注",
    dataIndex: "remark",
    formType: "input",
    search: true
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    editDisplay: false,
    addDisplay: false,
    hide: false,
    showTime: true
  },
  {
    title: "检查详情",
    dataIndex: "detail",
    formType: "editor",
    hide: true
  },
])
</script>
<script>export default { name: 'jpro:checkRecord' } </script>