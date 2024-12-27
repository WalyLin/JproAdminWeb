<template>
    <a-modal :visible="visible" :on-before-ok="doSubmit" @cancel="cancel" width="1000px" :fullscreen="isFull">
        <template #title>
            新增就诊记录
        </template>
        <!-- 使用 ma-crud 组件 -->
        <ma-form v-model="form" :columns="columns" :options="options" ref="crudForm" />
    </a-modal>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { Message } from '@arco-design/web-vue'
import dayjs from 'dayjs'
import { setModalSizeEvent } from "@/utils/common";
import jproCheckRecord from '@/api/jpro/jproCheckRecord'

// 定义 props
const props = defineProps({
    mother: {
        type: Object,
        required: true
    },
    parentCrudRef: {
        type: Object,
        required: true
    }
})

// form 组件的 ref
const crudForm = ref()
// 表单数据
const form = ref({})

const visible = ref(false)

// modal框 的尺寸，手机端时全屏
const isFull = ref(false)
setModalSizeEvent((config) => {
    isFull.value = config.isFull
})


// 监听 mother 属性变化，更新 form 数据
watch(() => props.mother, (val) => {
    form.value.mother_id = val.id
    form.value.hospital_id = val.hospital_id
    form.value.doctor_id = val.doctor_id
    form.value.check_time = dayjs().format('YYYY-MM-DD')

}, { immediate: true })

// 组件的字段设置
const columns = reactive([
    {
        title: "孕妈",
        dataIndex: "mother_id",
        formType: "select",
        disabled: true,
        dict: {
            url: 'jpro/mother/remote',
            method: 'post',
            props: {
                label: 'name',
                value: 'id'
            },
            translation: true,
        },
        commonRules: {
            required: true,
            message: "请选择孕妈"
        },
        multiple: false
    },
    {
        title: "医院",
        dataIndex: "hospital_id",
        disabled: true,
        formType: "select",
        dict: {
            url: 'jpro/common/hospitals',
            props: {
                label: 'name',
                value: 'id'
            },
            translation: true,
        },
        readonly: true,
        multiple: false
    },
    {
        title: "医生",
        disabled: true,
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
        readonly: true,
        defaultValue: props.mother.doctor_id,
        multiple: false
    },
    {
        title: "检查时间",
        dataIndex: "check_time",
        formType: "date",
        showTime: false,
    },
    {
        title: "备注",
        dataIndex: "remark",
        formType: "input",
    },
    {
        title: "检查详情",
        dataIndex: "detail",
        formType: "editor",
    },
])

const options = reactive({
    showButtons: false
})

const doSubmit = async () => {

    if (await crudForm._rawValue.validateForm()) {
        return false
    }

    await jproCheckRecord.save(crudForm._rawValue.getFormData()).then(response => {
        if (response.success) {
            props.parentCrudRef.refresh()
            Message.success(response.message || `操作成功！`)
            cancel()
            return true
        } else if (response.success === false && (typeof response.code === "undefined" || response.code !== 200)) {
            Message.clear()
            Message.error(response.message || `操作失败！`)
            return false
        }
    })

}

const open = () => {
    visible.value = true
}
const cancel = () => {
    // 处理取消逻辑
    visible.value = false
}

defineExpose({
    cancel,
    open,
})
</script>