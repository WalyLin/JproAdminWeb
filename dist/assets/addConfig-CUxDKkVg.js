import{c as _}from"./config-BxxOLlx-.js";import{i as f}from"./configDefine-CjGFkmcf.js";import{_ as g,k as l,S as x,r,o as b,c as h,d as n}from"./index-BKl9qfEo.js";const v={__name:"addConfig",emits:["success"],setup(y,{emit:c}){const i=c,s=l(),a=l({input_type:"input",sort:0}),d=async e=>{if(e){e.config_select_data&&(e.config_select_data=e.config_select_data.replace(/\r|\n|\s/g,""),e.config_select_data=e.config_select_data.replace(",]","]"),e.config_select_data=JSON.parse(e.config_select_data));const t=await _.save(e);i("success",t.success),t.success&&s.value.resetForm()}},u=x([{title:"所属组",dataIndex:"group_id",formType:"select",labelWidth:"120px",dict:{url:"setting/configGroup/index",props:{label:"name",value:"id"}},rules:[{required:!0,message:"所属组必选"}]},{title:"配置标题",dataIndex:"name",labelWidth:"120px",rules:[{required:!0,message:"配置标题必填"}]},{title:"配置标识",dataIndex:"key",labelWidth:"120px",rules:[{required:!0,message:"配置标识必填"}]},{title:"配置值",dataIndex:"value",labelWidth:"120px"},{title:"排序",dataIndex:"sort",formType:"input-number",labelWidth:"120px",min:0,max:999},{title:"输入组件",dataIndex:"input_type",formType:"select",rules:[{required:!0,message:"输入组件必选"}],labelWidth:"120px",dict:{data:f},onControl:(e,t)=>{t.getColumnService().get("config_select_data").setAttr("display",["select","radio","checkbox"].includes(e))}},{title:"配置说明",dataIndex:"remark",placeholder:"在输入组件下方显示配置的解释说明信息",formType:"input",labelWidth:"120px"},{title:"选择/默认数据",dataIndex:"config_select_data",formType:"code-editor",labelWidth:"120px",height:200,extra:'用于配置下拉、单选、复选的数据，格式例子：[{"label":"数据一", "value":"shuju1"},...]'}]);return(e,t)=>{const o=r("a-page-header"),m=r("ma-form");return b(),h("div",null,[n(o,{title:"添加配置项","show-back":!1}),n(m,{ref_key:"formRef",ref:s,modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=p=>a.value=p),columns:u,class:"mt-7",onSubmit:d},null,8,["modelValue","columns"])])}}},C=g(v,[["__scopeId","data-v-853589eb"]]);export{C as default};