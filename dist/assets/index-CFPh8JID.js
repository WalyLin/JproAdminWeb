import{d as a}from"./datasource-Bv9Sckt2.js";import{k as x,S as s,r as e,o as w,c as g,d as t,w as o,f as k,M as d}from"./index-BTGspiIM.js";const D={class:"ma-content-block p-4"},T={name:"setting:datasource"},N=Object.assign(T,{setup(v){const n=x(),r=async i=>{d.info("测试连接中，请稍等..."),(await a.testLink({id:i.id})).success&&d.success("数据源连接成功")};s([{label:"utf8mb4_bin",value:"utf8mb4_bin"},{label:"utf8mb4_general_ci",value:"utf8mb4_general_ci"},{label:"utf8mb4_unicode_ci",value:"utf8mb4_unicode_ci"}]);const l=s({id:"setting_datasource",rowSelection:{showCheckedAll:!0},pk:"id",operationColumn:!0,operationColumnWidth:180,searchLabelWidth:"100px",labelWidth:"120px",searchColNumber:2,formOption:{viewType:"modal",width:600},api:a.getList,add:{show:!0,api:a.save,auth:["setting:datasource:save"]},edit:{show:!0,api:a.update,auth:["setting:datasource:update"]},delete:{show:!0,api:a.deletes,auth:["setting:datasource:delete"]},import:{show:!0,url:"setting/datasource/import",templateUrl:"setting/datasource/downloadTemplate",auth:["setting:datasource:import"]},export:{show:!0,url:"setting/datasource/export",auth:["setting:datasource:export"]}}),u=s([{title:"主键",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1,hide:!0},{title:"数据源名称",dataIndex:"source_name",formType:"input",search:!0,commonRules:{required:!0,message:"请输入数据源名称"},width:120},{title:"DSN连接串",dataIndex:"dsn",formType:"textarea",commonRules:{required:!0,message:"请输入DSN连接串"},width:350,addDefaultValue:"mysql:host=数据库地址;dbname=数据库名称;port=3306;charset=utf8mb4",extra:"例如，mysql:host=myhost;dbname=mydb;port=3306"},{title:"数据库用户",dataIndex:"username",formType:"input",commonRules:{required:!0,message:"请输入数据库用户"},width:120,addDefaultValue:"root"},{title:"数据库密码",dataIndex:"password",formType:"input-password",hide:!0},{title:"创建者",dataIndex:"created_by",formType:"input",addDisplay:!1,editDisplay:!1,hide:!0},{title:"更新者",dataIndex:"updated_by",formType:"input",addDisplay:!1,editDisplay:!1,hide:!0},{title:"创建时间",dataIndex:"created_at",formType:"date",addDisplay:!1,editDisplay:!1,showTime:!0,width:180},{title:"更新时间",dataIndex:"updated_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0},{title:"备注",dataIndex:"remark",formType:"textarea",hide:!0}]);return(i,c)=>{const p=e("icon-link"),m=e("a-link"),_=e("icon-question-circle"),f=e("a-button"),h=e("a-tooltip"),y=e("ma-crud");return w(),g("div",D,[t(y,{options:l,columns:u,ref_key:"crudRef",ref:n},{operationBeforeExtend:o(({record:b})=>[t(m,{onClick:I=>r(b)},{default:o(()=>[t(p),k(" 测试连接")]),_:2},1032,["onClick"])]),tools:o(()=>[t(h,{content:"目前仅支持 Mysql 数据库"},{default:o(()=>[t(f,{shape:"circle"},{default:o(()=>[t(_)]),_:1})]),_:1})]),_:1},8,["options","columns"])])}}});export{N as default};