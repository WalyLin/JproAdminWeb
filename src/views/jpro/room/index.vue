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

      <template #mother_count="{ record }">
        <span v-if="record.mother_count < record.max_num" >{{ record.mother_count }}</span>
        <a-tag color="red" v-else >{{record.mother_count}}</a-tag>
      </template>
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import jproRoom from '@/api/jpro/jproRoom'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, record, statusName) => {
  let id = record.id
  jproRoom.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'jpro_room',
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
  api: jproRoom.getList,
  add: {
    show: true,
    api: jproRoom.save,
    auth: ['jpro:room:save']
  },
  edit: {
    show: true,
    api: jproRoom.update,
    auth: ['jpro:room:update']
  },
  delete: {
    show: true,
    api: jproRoom.deletes,
    auth: ['jpro:room:delete']
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
    title: "房间名称",
    dataIndex: "title",
    formType: "input",
    search: true
  },
  {
    title: "所属楼栋",
    dataIndex: "building_id",
    formType: "select",
    dict:{
      url:'/jpro/building/remote',
      method:'post',
      props:{label:'title',value:'id'},      
      translation: true,
    },
    search: true
  },
  {
    title: "可容纳人数",
    dataIndex: "max_num",
    formType: "input-number"
  },
  {
    title: "已入住孕妈",
    dataIndex: "mother_count",
    formType: "input",
    addDisplay:false,
    editDisplay:false,    
  },
  {
    title: "状态",
    dataIndex: "status",
    formType: "radio",
    dict:{
      name:'data_status',
      props:[{label:'label',value:'key'}]
    },
    addDefaultValue:1,
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "input"
  },
])
</script>
<script> export default { name: 'jpro:room' } </script>