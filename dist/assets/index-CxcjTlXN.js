import{X as t,k as _,a7 as C,S as y,r as o,o as b,c as D,d as s,J as L,e as T,w as u,f,M as S}from"./index-BKl9qfEo.js";import M from"./paramsList-DA_dOLb8.js";const a={getList(e={}){return t({url:"system/api/index",method:"get",params:e})},getModuleList(){return t({url:"system/api/getModuleList",method:"get"})},getRecycleList(e={}){return t({url:"system/api/recycle",method:"get",params:e})},save(e={}){return t({url:"system/api/save",method:"post",data:e})},read(e){return t({url:"system/api/read/"+e,method:"post"})},deletes(e){return t({url:"system/api/delete",method:"delete",data:e})},recoverys(e){return t({url:"system/api/recovery",method:"put",data:e})},realDeletes(e){return t({url:"system/api/realDelete",method:"delete",data:e})},update(e,r={}){return t({url:"system/api/update/"+e,method:"put",data:r})},changeStatus(e={}){return t({url:"system/api/changeStatus",method:"put",data:e})}},V={class:"ma-content-block lg:flex justify-between p-4"},A={name:"system:api"},$=Object.assign(A,{setup(e){const r=_(),m=_();let g=C(()=>r.value?r.value.isRecovery:!1);const x=async(n,i)=>{const l=await a.changeStatus({id:i,status:n});l.success&&S.success(l.message)},p=(n,i)=>{m.value.open(n,i)},v=`{
  code: 200,
  success: true,
  message: '请求成功',
  data: []
}`,I=y({api:a.getList,recycleApi:a.getRecycleList,showIndex:!1,pageLayout:"fixed",rowSelection:{showCheckedAll:!0},operationColumn:!0,operationColumnWidth:260,add:{show:!0,api:a.save,auth:["system:api:save"]},edit:{show:!0,api:a.update,auth:["system:api:update"]},delete:{show:!0,api:a.deletes,auth:["system:api:delete"],realApi:a.realDeletes,realAuth:["system:api:realDeletes"]},recovery:{show:!0,api:a.recoverys,auth:["system:api:recovery"]},formOption:{id:"apiManage",width:"850px",viewType:"tag",tagId:"apiForm",tagName:"接口",titleDataIndex:"name",layout:[{formType:"tabs",tabs:[{title:"基础信息",formList:[{dataIndex:"group_id"},{dataIndex:"name"},{dataIndex:"access_name"},{dataIndex:"request_mode"},{dataIndex:"class_name"},{dataIndex:"method_name"},{dataIndex:"status"},{dataIndex:"auth_mode"},{dataIndex:"remark"}]},{title:"其他信息",formList:[{dataIndex:"description"},{dataIndex:"response"}]}]}]}}),w=y([{title:"所属组",dataIndex:"group_id",search:!0,commonRules:[{required:!0,message:"所属组必选"}],formType:"select",dict:{url:"system/apiGroup/list",props:{label:"name",value:"id"},translation:!0},width:140},{title:"接口名称",dataIndex:"name",search:!0,commonRules:[{required:!0,message:"应用名称必填"}],width:150},{title:"访问名称",dataIndex:"access_name",width:140,commonRules:[{required:!0,message:"访问名称必填"}],extra:'接口实际访问的路由，可以使用"."来区分层级，不支持"/"'},{title:"请求模式",dataIndex:"request_mode",search:!0,formType:"select",commonRules:[{required:!0,message:"请求模式必选"}],dict:{name:"request_mode",props:{label:"title",value:"key"},translation:!0},width:140},{title:"类名称",dataIndex:"class_name",commonRules:[{required:!0,message:"类名称必填"}],width:150},{title:"方法名称",dataIndex:"method_name",commonRules:[{required:!0,message:"方法名称必填"}],width:150},{title:"状态",dataIndex:"status",search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",width:80},{title:"认证模式",dataIndex:"auth_mode",formType:"radio",dict:{data:[{label:"简易模式",value:1},{label:"复杂模式",value:2}],translation:!0},addDefaultValue:1,width:130},{title:"应用介绍",dataIndex:"description",hide:!0,formType:"editor",height:300},{title:"返回示例",dataIndex:"response",hide:!0,formType:"code-editor",height:300,addDefaultValue:v},{title:"备注",dataIndex:"remark",hide:!0,formType:"textarea"},{title:"创建时间",dataIndex:"created_at",addDisplay:!1,editDisplay:!1,width:180}]);return(n,i)=>{const l=o("a-switch"),k=o("icon-left"),h=o("a-link"),R=o("icon-right"),q=o("ma-crud");return b(),D("div",V,[s(q,{options:I,columns:w,ref_key:"crudRef",ref:r},L({status:u(({record:d})=>[s(l,{"checked-value":1,"unchecked-value":"2",onChange:c=>x(c,d.id),"default-checked":d.status==1},null,8,["onChange","default-checked"])]),_:2},[T(g)?void 0:{name:"operationBeforeExtend",fn:u(({record:d})=>[s(h,{onClick:c=>p(d,"response")},{default:u(()=>[s(k),f(" 出参")]),_:2},1032,["onClick"]),s(h,{onClick:c=>p(d,"request")},{default:u(()=>[s(R),f(" 入参")]),_:2},1032,["onClick"])]),key:"0"}]),1032,["options","columns"]),s(M,{ref_key:"paramslist",ref:m},null,512)])}}});export{$ as default};