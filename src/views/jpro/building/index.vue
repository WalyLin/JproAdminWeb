<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">

      <template #status="{ record }">
        <a-switch
          :checked-value="1"
          unchecked-value="2"
          @change="switchStatus($event, record, 'status')"
          :default-checked="record.status == 1"
        />
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproBuilding from '@/api/jpro/jproBuilding'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, record, statusName) => {
  let id = record.id
  record.status = statusValue
  jproBuilding.changeStatus({ id, statusName, statusValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}


const options = reactive({
  id: 'jpro_building',
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
  api: jproBuilding.getList,
  add: {
    show: true,
    api: jproBuilding.save,
    auth: ['jpro:building:save']
  },
  edit: {
    show: true,
    api: jproBuilding.update,
    auth: ['jpro:building:update']
  },
  delete: {
    show: true,
    api: jproBuilding.deletes,
    auth: ['jpro:building:delete']
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
    title: "楼栋名称",
    dataIndex: "title",
    formType: "input",
    search: true
  },
  {
    title: "地址",
    dataIndex: "address",
    formType: "input",
    search: true
  },
  {
    title: "房间数量",
    dataIndex: "room_num",
    formType: "input-number"
  },
  {
    title: '状态', 
    dataIndex: 'status', 
    search: true, 
    formType: 'radio',
    dict: { name: 'data_status', props: { label: 'title', value: 'key' } },
    addDefaultValue: '1', width: 180,
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "input"
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
  }
])
</script>
<script>export default { name: 'jpro:building' } </script>