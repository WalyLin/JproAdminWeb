import{X as g,_ as A,k as u,S as y,r as p,o as m,c as E,d as l,w as d,f as T,l as e,t as a,h as x,fE as I,i as L,ac as V,H as U,I as j}from"./index-Dz8v1PLH.js";const q={getPageList(t={}){return g({url:"system/logs/getApiLogPageList",method:"get",params:t})},deletes(t){return g({url:"system/logs/deleteApiLog",method:"delete",data:t})}},i=t=>(U("data-v-811e332f"),t=t(),j(),t),z={class:"ma-content-block lg:flex justify-between p-4"},H={class:"arco-descriptions arco-descriptions-layout-horizontal arco-descriptions-size-medium arco-descriptions-border"},J={class:"arco-descriptions-body"},O={class:"arco-descriptions-table"},X={class:"arco-descriptions-row"},$=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"接口名称",-1)),F={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},G={class:"arco-descriptions-row"},K=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"请求接口",-1)),M={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},Q={class:"arco-descriptions-row"},W=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"状态代码",-1)),Y={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},Z={class:"arco-descriptions-row"},ee=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"请求时间",-1)),se={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},te={class:"arco-descriptions-row"},oe=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"访问IP",-1)),ae={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},ie={class:"arco-descriptions-row"},ce=i(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"访问地点",-1)),le={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},de={name:"system:apiLog"},re=Object.assign(de,{setup(t){const C=u(),c=u(!1),s=u({request_data:void 0,response_data:void 0}),P=r=>{s.value=r,s.value.request_data=V(r.request_data),s.value.response_data=V(r.response_data),c.value=!0},S=y({api:q.getPageList,showIndex:!1,pageLayout:"fixed",rowSelection:{showCheckedAll:!0},requestParams:{orderBy:"access_time",orderType:"desc"},delete:{show:!0,api:q.deletes,auth:["system:apiLog:delete"]}}),B=y([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"接口名称",dataIndex:"api_name",search:!0,width:180},{title:"接口地址",dataIndex:"access_name",search:!0,width:180},{title:"访问IP",dataIndex:"ip",width:150,search:!0},{title:"访问地点",dataIndex:"ip_location",width:150},{title:"状态码",dataIndex:"response_code",width:120},{title:"访问时间",dataIndex:"access_time",width:180,search:!0,formType:"range"}]);return(r,o)=>{const D=p("ma-crud"),h=p("a-collapse-item"),N=p("a-collapse"),R=p("a-drawer");return m(),E("div",z,[l(D,{options:S,columns:B,onRowClick:P,ref_key:"crudRef",ref:C},null,8,["options","columns"]),l(R,{visible:c.value,"onUpdate:visible":o[2]||(o[2]=n=>c.value=n),width:"600px",footer:!1},{title:d(()=>[T("接口日志详细信息")]),default:d(()=>{var n,v,b,f,w,k;return[e("div",H,[e("div",J,[e("table",O,[e("tbody",null,[e("tr",X,[$,e("td",F,a((n=s.value)==null?void 0:n.api_name),1)]),e("tr",G,[K,e("td",M,a((v=s.value)==null?void 0:v.access_name),1)]),e("tr",Q,[W,e("td",Y,a((b=s.value)==null?void 0:b.response_code),1)]),e("tr",Z,[ee,e("td",se,a((f=s.value)==null?void 0:f.access_time),1)]),e("tr",te,[oe,e("td",ae,a((w=s.value)==null?void 0:w.ip),1)]),e("tr",ie,[ce,e("td",le,a((k=s.value)==null?void 0:k.ip_location),1)])])])])]),l(N,{"default-active-key":["request","response"],"expand-icon-position":"right",class:"mt-3"},{default:d(()=>[l(h,{header:"请求数据",key:"request"},{default:d(()=>[c.value?(m(),x(I,{key:0,modelValue:s.value.request_data,"onUpdate:modelValue":o[0]||(o[0]=_=>s.value.request_data=_),height:150,readonly:""},null,8,["modelValue"])):L("",!0)]),_:1}),l(h,{header:"响应数据",key:"response"},{default:d(()=>[c.value?(m(),x(I,{key:0,modelValue:s.value.response_data,"onUpdate:modelValue":o[1]||(o[1]=_=>s.value.response_data=_),height:150,readonly:""},null,8,["modelValue"])):L("",!0)]),_:1})]),_:1})]}),_:1},8,["visible"])])}}}),pe=A(re,[["__scopeId","data-v-811e332f"]]);export{pe as default};