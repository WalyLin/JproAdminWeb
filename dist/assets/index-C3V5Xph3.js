import{X as a,k as x,S as m,r as d,o as l,c as h,d as _,w as c,t as f,h as w,f as v,M as b}from"./index-7niCPtNG.js";const s={getList(e={}){return a({url:"jpro/room/index",method:"get",params:e})},save(e={}){return a({url:"jpro/room/save",method:"post",data:e})},update(e,r={}){return a({url:"jpro/room/update/"+e,method:"put",data:r})},read(e){return a({url:"jpro/room/read/"+e,method:"get"})},deletes(e){return a({url:"jpro/room/delete",method:"delete",data:e})},changeStatus(e={}){return a({url:"jpro/room/changeStatus",method:"put",data:e})}},T={class:"ma-content-block lg:flex justify-between p-4"},C={key:0},I={name:"jpro:room"},D=Object.assign(I,{setup(e){const r=x(),g=(i,p,n)=>{let u=p.id;s.changeStatus({id:u,statusName:n,statusValue:i}).then(o=>{o.success&&b.success(o.message)}).catch(o=>{console.log(o)})},y=m({id:"jpro_room",rowSelection:{showCheckedAll:!0},pk:"id",operationColumn:!0,operationColumnWidth:160,formOption:{viewType:"modal",width:600},api:s.getList,add:{show:!0,api:s.save,auth:["jpro:room:save"]},edit:{show:!0,api:s.update,auth:["jpro:room:update"]},delete:{show:!0,api:s.deletes,auth:["jpro:room:delete"]}}),k=m([{title:"",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1,hide:!0,commonRules:{required:!0,message:"请输入"}},{title:"房间名称",dataIndex:"title",formType:"input",search:!0},{title:"所属楼栋",dataIndex:"building_id",formType:"select",dict:{url:"/jpro/building/remote",method:"post",props:{label:"title",value:"id"},translation:!0},search:!0},{title:"可容纳人数",dataIndex:"max_num",formType:"input-number"},{title:"已入住孕妈",dataIndex:"mother_count",formType:"input",addDisplay:!1,editDisplay:!1},{title:"状态",dataIndex:"status",formType:"radio",dict:{name:"data_status",props:[{label:"label",value:"key"}]},addDefaultValue:1},{title:"备注",dataIndex:"remark",formType:"input"}]);return(i,p)=>{const n=d("a-switch"),u=d("a-tag"),o=d("ma-crud");return l(),h("div",T,[_(o,{options:y,columns:k,ref_key:"crudRef",ref:r},{status:c(({record:t})=>[_(n,{"checked-value":1,"unchecked-value":"2",onChange:j=>g(j,t,"status"),"default-checked":t.status==1},null,8,["onChange","default-checked"])]),mother_count:c(({record:t})=>[t.mother_count<t.max_num?(l(),h("span",C,f(t.mother_count),1)):(l(),w(u,{key:1,color:"red"},{default:c(()=>[v(f(t.mother_count),1)]),_:2},1024))]),_:1},8,["options","columns"])])}}});export{D as default};