<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">

      <template #operationBeforeExtend="{ record }" v-if="checkAuth('jpro:checkRecord:save')">
        <a-link @click="open(record)"><icon-plus-circle />就诊</a-link>
      </template>


      <template #passport="{record}">
        <image-see :url="record.passport"></image-see>
      </template>

      <template #last_check_record="{ record }">
        <!-- 对标题加上 tag -->
        <a-tag v-if="record.last_check_record"
          :color="record.last_check_record?.check_time == today ? 'red' : 'green'">{{
            record.last_check_record?.check_time
          }}</a-tag>
      </template>


    </ma-crud>

    <add-check-record v-model:mother="currentRecord" ref="addCheckRecordRef"
      :parentCrudRef="crudRef"></add-check-record>

  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { Message } from '@arco-design/web-vue'
import imageSee from '@/components/customer/imageSee.vue'
import jproMother from '@/api/jpro/jproMother'
import addCheckRecord from './addCheckRecord.vue'
import checkAuth from '@/directives/auth/auth'
import dayjs from 'dayjs'


const crudRef = ref()
const currentRecord = ref({})
const addCheckRecordRef = ref(null)
const today = dayjs().format('YYYY-MM-DD')

const numberOperation = (newValue, id, numberName) => {
  jproMother.numberOperation({ id, numberName, numberValue: newValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}

const switchStatus = (statusValue, id, statusName) => {
  jproMother.changeStatus({ id, statusName, statusValue }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => { console.log(e) })
}

const open = (record) => {
  currentRecord.value = record
  addCheckRecordRef.value.open()
}

const options = reactive({
  id: 'jpro_mother',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  align: 'center',
  operationColumn: true,
  operationColumnWidth: 190,
  operationColumnFixed: 'false',
  showTools: false,
  formOption: {
    viewType: 'modal',
    width: 1000,
    layout: [
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'name' }] }, { span: 12, formList: [{ dataIndex: 'surname' }] }] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'height' }] }, { span: 12, formList: [{ dataIndex: 'weight' }] },] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'children_amount' }] }, { span: 12, formList: [{ dataIndex: 'body_status' }] },] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'age' }] }, { span: 12, formList: [{ dataIndex: 'gravida' }] },] },


      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'hep_b' }] }, { span: 12, formList: [{ dataIndex: 'hep_b_date' }] }] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'bleed_amount' }] },] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'building_id' }] }, { span: 12, formList: [{ dataIndex: 'room_id' }] }] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'last_menstrual_time' }] }, { span: 12, formList: [{ dataIndex: 'arrive_time' }] }] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'hospital_id' }] }, { span: 12, formList: [{ dataIndex: 'doctor_id' }] }] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'operation' }] }, { span: 12, formList: [{ dataIndex: 'food_allergy' }] }] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'drug_allergy' }] }, { span: 12, formList: [{ dataIndex: 'complication' }] }] },

      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'menstrual_freq' }] }, { span: 12, formList: [{ dataIndex: 'tag' }] }] },
      { formType: 'grid', cols: [{ span: 12, formList: [{ dataIndex: 'remark' }] }, { span: 12, formList: [{ dataIndex: 'passport' }] }] },
      { formType: 'grid', cols: [{ span: 24, formList: [{ dataIndex: 'extra' }] }] },
    ]
  },
  api: jproMother.getList,
  recycleApi: jproMother.getRecycleList,
  add: {
    show: true,
    api: jproMother.save,
    auth: ['jpro:mother:save']
  },
  edit: {
    show: true,
    api: jproMother.update,
    auth: ['jpro:mother:update']
  },
  delete: {
    show: true,
    api: jproMother.deletes,
    auth: ['jpro:mother:delete'],
    realApi: jproMother.realDeletes,
    realAuth: ['jpro:mother:realDeletes']
  },
  recovery: {
    show: true,
    api: jproMother.recoverys,
    auth: ['jpro:mother:recovery']
  },
  import: {
    show: false,
    url: 'jpro/mother/import',
    templateUrl: 'jpro/mother/downloadTemplate',
    auth: ['jpro:mother:import']
  },
  export: {
    show: true,
    url: 'jpro/mother/export',
    auth: ['jpro:mother:export']
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
    title: "姓",
    dataIndex: "surname",
    formType: "input",
    search: true,
    commonRules: {
      required: false,
      message: "请输入姓"
    }
  },
  {
    title: "名",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入名"
    }
  },
  {
    title: "年龄",
    dataIndex: "age",
    formType: "input-number",
    search: true,
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    },
    max: 200
  },
  {
    title: "身体状态",
    dataIndex: "body_status",
    formType: "select",
    search: true,
    dict: {
      name: "body_status",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
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
    search: true
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
    search: true
  },
  {
    title: "最近一次就诊",
    dataIndex: "last_check_record",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
  },
  {
    title: "乙肝疫苗",
    dataIndex: "hep_b",
    formType: "radio",
    dict: {
      name: "data_hep_b",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    },
    align: 'center',
    addDefaultValue: "2",
    hide: true,
  },
  {
    title: "怀孕次数",
    dataIndex: "gravida",
    formType: "input-number",
    search: true,
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    },
    max: 30
  },
  {
    title: "护照",
    dataIndex: "passport",
    formType: "upload",
    type: 'image',
    returnType: 'url',        
  },
  {
    title: "楼栋",
    dataIndex: "building_id",
    formType: "select",
    hide: true,
    dict: {
      url: 'jpro/building/remote',
      method:'post',
      props: {
        label: 'title',
        value: 'id'
      },
      translation: true,      
    },
    // 定义联动，dataA的数据改变，dataB和dataC的数据也会变化
    cascaderItem: ['room_id',],    
  },
  {
    title: "房间",
    dataIndex: "room_id",
    formType: "select",
    dict: {
      url: 'jpro/room/remote?filter[building_id]={{key}}',
      method:'post',
      props: {
        label: 'title',
        value: 'id'
      },
      translation: true,
    },
    hide: true,
  },
  {
    title: "疫苗时间",
    dataIndex: "hep_b_date",
    formType: "input",
    hide: true,
  },
  {
    title: "手术情况",
    dataIndex: "operation",
    formType: "textarea",
    hide: true,

  },
  {
    title: "食物过敏",
    dataIndex: "food_allergy",
    hide: true,
    formType: "textarea",

  },
  {
    title: "药物过敏",
    dataIndex: "drug_allergy",
    hide: true,
    formType: "textarea",

  },
  {
    title: "并发症",
    dataIndex: "complication",
    hide: true,
    formType: "textarea",

  },
  {
    title: "身高",
    dataIndex: "height",
    formType: "input",
    hide: true,
  },
  {
    title: "体重",
    dataIndex: "weight",
    formType: "input",
    hide: true,
  },
  {
    title: "上次月经时间",
    dataIndex: "last_menstrual_time",
    formType: "date",
    format: 'YYYY-MM-DD HH:mm',
    addDefaultValue: dayjs().format('YYYY-MM-DD HH:00'),
    width: 200,
    showTime: true
  },
  {
    title: "到格鲁吉亚时间",
    dataIndex: "arrive_time",
    formType: "date",
    width: 200,
    showTime: false
  },
  {
    title: "流血量",
    dataIndex: "bleed_amount",
    formType: "radio",
    hide: true,
    dict: {
      name: 'bleed_amount',
      translation: true
    },
    addDefaultValue: '1'
  },
  {
    title: "小孩数量",
    dataIndex: "children_amount",
    formType: "input-number",
    search: true,
    max: 20,
    hide: true,
  },
  {
    title: "月经频次(天)",
    dataIndex: "menstrual_freq",
    formType: "input-number",
    hide: true,
    addDefaultValue: 30,
  },
  {
    title: "标签",
    dataIndex: "tag",
    formType: "input",
    hide: true,
  },
  // {
  //   title: "标签备注",
  //   dataIndex: "tag_remark",
  //   formType: "input",
  //   hide: true,
  // },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "textarea",
    hide: true
  },
  {
    title: "扩展信息",
    dataIndex: "extra",
    formType: "editor",
    hide: true
  },
])
</script>
<script>export default { name: 'jpro:mother' } </script>