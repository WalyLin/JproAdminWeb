import{X as f,_ as B,k as _,S as g,r as u,o as y,c as D,d as a,w as c,f as N,l as e,t as o,h as P,fE as R,i as T,ab as E,H as j,I as z}from"./index-7niCPtNG.js";const k={getPageList(s={}){return f({url:"system/logs/getQueueLogPageList",method:"get",params:s})},deletes(s){return f({url:"system/logs/deleteQueueLog",method:"delete",data:s})}},l=s=>(j("data-v-c47e138d"),s=s(),z(),s),Q={class:"ma-content-block lg:flex justify-between p-4"},U={class:"arco-descriptions arco-descriptions-layout-horizontal arco-descriptions-size-medium arco-descriptions-border"},A={class:"arco-descriptions-body"},H={class:"arco-descriptions-table"},J={class:"arco-descriptions-row"},O=l(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"交换机名称",-1)),W={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},X={class:"arco-descriptions-row"},$=l(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"路由名称",-1)),F={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},G={class:"arco-descriptions-row"},K=l(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"队列名称",-1)),M={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},Y={class:"arco-descriptions-row"},Z=l(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"延迟时间（秒）",-1)),ee={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},te={class:"arco-descriptions-row"},se=l(()=>e("td",{class:"arco-descriptions-item-label arco-descriptions-item-label-block"},"创建时间",-1)),oe={class:"arco-descriptions-item-value arco-descriptions-item-value-block",colspan:"1"},ae={name:"system:queueLog"},ce=Object.assign(ae,{setup(s){const w=_(),i=_(!1),t=_({request_data:void 0,response_data:void 0}),q=n=>{t.value=n,n.queue_content.length>0&&(t.value.queue_content=/\\\\/g.test(n.queue_content)?t.value.queue_content.replace(/,/g,`,
`):E(t.value.queue_content)),i.value=!0},x=g({api:k.getPageList,showIndex:!1,searchLabelWidth:"100px",pageLayout:"fixed",rowSelection:{showCheckedAll:!0},requestParams:{orderBy:"created_at",orderType:"desc"},delete:{show:!0,api:k.deletes,auth:["system:queueLog:delete"]}}),I=g([{title:"ID",dataIndex:"id",addDisplay:!1,editDisplay:!1,width:50,hide:!0},{title:"交换机名称",dataIndex:"exchange_name",search:!0,width:150},{title:"路由名称",dataIndex:"routing_key_name",search:!0,width:150},{title:"队列名称",dataIndex:"queue_name",width:150},{title:"生产状态",dataIndex:"produce_status",width:150,search:!0,formType:"select",dict:{name:"queue_produce_status",props:{label:"title",value:"key"},translation:!0}},{title:"消费状态",dataIndex:"consume_status",width:150,search:!0,formType:"select",dict:{name:"queue_consume_status",props:{label:"title",value:"key"},translation:!0}},{title:"延迟时间（秒）",dataIndex:"delay_time",width:150}]);return(n,r)=>{const L=u("ma-crud"),p=u("a-collapse-item"),V=u("a-collapse"),C=u("a-drawer");return y(),D("div",Q,[a(L,{options:x,columns:I,onRowClick:q,ref_key:"crudRef",ref:w},null,8,["options","columns"]),a(C,{visible:i.value,"onUpdate:visible":r[1]||(r[1]=d=>i.value=d),width:"600px",footer:!1},{title:c(()=>[N("队列日志详细信息")]),default:c(()=>{var d,m,h,v,b;return[e("div",U,[e("div",A,[e("table",H,[e("tbody",null,[e("tr",J,[O,e("td",W,o((d=t.value)==null?void 0:d.exchange_name),1)]),e("tr",X,[$,e("td",F,o((m=t.value)==null?void 0:m.routing_key_name),1)]),e("tr",G,[K,e("td",M,o((h=t.value)==null?void 0:h.queue_name),1)]),e("tr",Y,[Z,e("td",ee,o((v=t.value)==null?void 0:v.delay_time),1)]),e("tr",te,[se,e("td",oe,o((b=t.value)==null?void 0:b.created_at),1)])])])])]),a(V,{"default-active-key":["request","response"],"expand-icon-position":"right",class:"mt-3"},{default:c(()=>[a(p,{header:"队列数据",key:"request"},{default:c(()=>[i.value?(y(),P(R,{key:0,modelValue:t.value.queue_content,"onUpdate:modelValue":r[0]||(r[0]=S=>t.value.queue_content=S),height:150,readonly:""},null,8,["modelValue"])):T("",!0)]),_:1}),a(p,{header:"队列日志",key:"response"},{default:c(()=>[e("pre",null,o(t.value.log_content==null?"无日志数据":t.value.log_content),1)]),_:1})]),_:1})]}),_:1},8,["visible"])])}}}),ie=B(ce,[["__scopeId","data-v-c47e138d"]]);export{ie as default};