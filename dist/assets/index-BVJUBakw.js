import{X as t,k as i,S as a,r as n,o as u,c,d as m}from"./index-BdmCqAiM.js";const r={getPageList(e={}){return t({url:"system/notice/index",method:"get",params:e})},getRecyclePageList(e={}){return t({url:"system/notice/recycle",method:"get",params:e})},save(e={}){return t({url:"system/notice/save",method:"post",data:e})},read(e={}){return t({url:"system/notice/read",method:"post",data:e})},deletes(e){return t({url:"system/notice/delete",method:"delete",data:e})},recoverys(e){return t({url:"system/notice/recovery",method:"put",data:e})},realDeletes(e){return t({url:"system/notice/realDelete",method:"delete",data:e})},update(e,s={}){return t({url:"system/notice/update/"+e,method:"put",data:s})}},p={class:"ma-content-block lg:flex justify-between p-4"},y={name:"system:post"},g=Object.assign(y,{setup(e){const s=i(),o=a({api:r.getPageList,recycleApi:r.getRecyclePageList,showIndex:!1,searchColNumber:3,pageLayout:"fixed",rowSelection:{showCheckedAll:!0},operationColumn:!0,operationColumnWidth:160,add:{show:!0,api:r.save,auth:["system:notice:save"]},edit:{show:!0,api:r.update,auth:["system:notice:update"]},delete:{show:!0,api:r.deletes,auth:["system:notice:delete"],realApi:r.realDeletes,realAuth:["system:notice:realDeletes"]},recovery:{show:!0,api:r.recoverys,auth:["system:notice:recovery"]},formOption:{width:800}}),d=a([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"公告标题",dataIndex:"title",search:!0,width:500,commonRules:[{required:!0,message:"公告标题必填"}]},{title:"公告类型",dataIndex:"type",search:!0,width:180,commonRules:[{required:!0,message:"公告类型必选"}],formType:"radio",dict:{name:"backend_notice_type",props:{label:"title",value:"key"},translation:!0},addDefaultValue:1},{title:"接收用户",dataIndex:"users",formType:"user-select",editDisplay:!1,hide:!0,formExtra:"如不选择，默认将为所有用户发送"},{title:"公告内容",dataIndex:"content",formType:"editor",hide:!0,commonRules:[{required:!0,message:"公告内容必填"}]},{title:"备注",dataIndex:"remark",hide:!0,formType:"textarea"},{title:"创建时间",dataIndex:"created_at",addDisplay:!1,editDisplay:!1,search:!0,formType:"range",width:180}]);return(h,f)=>{const l=n("ma-crud");return u(),c("div",p,[m(l,{options:o,columns:d,ref_key:"crudRef",ref:s},null,8,["options","columns"])])}}});export{g as default};