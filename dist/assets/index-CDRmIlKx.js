import{X as a,k as g,S as r,r as l,o as _,c as y,d as p,w as b,M as j}from"./index-7niCPtNG.js";const s={getList(e={}){return a({url:"jpro/building/index",method:"get",params:e})},save(e={}){return a({url:"jpro/building/save",method:"post",data:e})},update(e,o={}){return a({url:"jpro/building/update/"+e,method:"put",data:o})},read(e){return a({url:"jpro/building/read/"+e,method:"get"})},deletes(e){return a({url:"jpro/building/delete",method:"delete",data:e})},changeStatus(e={}){return a({url:"jpro/building/changeStatus",method:"put",data:e})}},w={class:"ma-content-block lg:flex justify-between p-4"},k={name:"jpro:building"},v=Object.assign(k,{setup(e){const o=g(),c=(d,u,i)=>{let n=u.id;u.status=d,s.changeStatus({id:n,statusName:i,statusValue:d}).then(t=>{t.success&&j.success(t.message)}).catch(t=>{console.log(t)})},m=r({id:"jpro_building",rowSelection:{showCheckedAll:!0},pk:"id",operationColumn:!0,operationColumnWidth:160,formOption:{viewType:"modal",width:600},api:s.getList,add:{show:!0,api:s.save,auth:["jpro:building:save"]},edit:{show:!0,api:s.update,auth:["jpro:building:update"]},delete:{show:!0,api:s.deletes,auth:["jpro:building:delete"]}}),h=r([{title:"",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1,hide:!0,commonRules:{required:!0,message:"请输入"}},{title:"楼栋名称",dataIndex:"title",formType:"input",search:!0},{title:"地址",dataIndex:"address",formType:"input",search:!0},{title:"房间数量",dataIndex:"room_num",formType:"input-number"},{title:"已录入房间数量",dataIndex:"room_count",formType:"input",addDisplay:!1,editDisplay:!1},{title:"已入住孕妈",dataIndex:"mother_count",addDisplay:!1,editDisplay:!1},{title:"状态",dataIndex:"status",search:!0,formType:"radio",dict:{name:"data_status",props:{label:"title",value:"key"}},addDefaultValue:"1",width:180},{title:"备注",dataIndex:"remark",formType:"input"}]);return(d,u)=>{const i=l("a-switch"),n=l("ma-crud");return _(),y("div",w,[p(n,{options:m,columns:h,ref_key:"crudRef",ref:o},{status:b(({record:t})=>[p(i,{"checked-value":1,"unchecked-value":"2",onChange:f=>c(f,t,"status"),"default-checked":t.status==1},null,8,["onChange","default-checked"])]),_:1},8,["options","columns"])])}}});export{v as default};