import{X as t,k as p,a0 as b,S as f,r as d,o as y,c as D,d as s,J as R,e as x,fz as C,w as n,f as _,h as S,t as q,i as A}from"./index-BdmCqAiM.js";import B from"./addCheckRecord-DPN7gTmP.js";import"./jproCheckRecord-CoTQV_c7.js";const a={getList(e={}){return t({url:"jpro/mother/index",method:"get",params:e})},save(e={}){return t({url:"jpro/mother/save",method:"post",data:e})},update(e,o={}){return t({url:"jpro/mother/update/"+e,method:"put",data:o})},read(e){return t({url:"jpro/mother/read/"+e,method:"get"})},deletes(e){return t({url:"jpro/mother/delete",method:"delete",data:e})},changeStatus(e={}){return t({url:"jpro/mother/changeStatus",method:"put",data:e})},numberOperation(e={}){return t({url:"jpro/mother/numberOperation",method:"put",data:e})},importExcel(e={}){return t({url:"jpro/mother/import",method:"post",data:e})},downloadTemplate(){return t({url:"jpro/mother/downloadTemplate",method:"post",responseType:"blob"})},exportExcel(e={}){return t({url:"jpro/mother/export",method:"post",responseType:"blob",params:e})},getRecycleList(e={}){return t({url:"jpro/mother/recycle",method:"get",params:e})},recoverys(e){return t({url:"jpro/mother/recovery",method:"put",data:e})},realDeletes(e){return t({url:"jpro/mother/realDelete",method:"delete",data:e})}},E={class:"ma-content-block lg:flex justify-between p-4"},O={name:"jpro:mother"},V=Object.assign(O,{setup(e){const o=p(),i=p({}),m=p(null),g=b().format("YYYY-MM-DD"),T=u=>{i.value=u,m.value.open()},I=f({id:"jpro_mother",rowSelection:{showCheckedAll:!0},pk:"id",operationColumn:!0,operationColumnWidth:200,showTools:!1,formOption:{viewType:"modal",width:800,layout:[{formType:"grid",cols:[{span:24,formList:[{dataIndex:"name"}]}]},{formType:"grid",cols:[{span:8,formList:[{dataIndex:"age"}]},{span:8,formList:[{dataIndex:"height"}]},{span:8,formList:[{dataIndex:"weight"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"body_status"}]},{span:12,formList:[{dataIndex:"gravida"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"bleed_amount"}]},{span:12,formList:[{dataIndex:"children_amount"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"last_menstrual_time"}]},{span:12,formList:[{dataIndex:"arrive_time"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"hospital_id"}]},{span:12,formList:[{dataIndex:"doctor_id"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"operation"}]},{span:12,formList:[{dataIndex:"food_allergy"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"drug_allergy"}]},{span:12,formList:[{dataIndex:"complication"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"menstrual_freq"}]},{span:12,formList:[{dataIndex:"tag"}]}]},{formType:"grid",cols:[{span:12,formList:[{dataIndex:"tag_remark"}]},{span:12,formList:[{dataIndex:"remark"}]}]},{formType:"grid",cols:[{span:24,formList:[{dataIndex:"extra"}]}]}]},api:a.getList,recycleApi:a.getRecycleList,add:{show:!0,api:a.save,auth:["jpro:mother:save"]},edit:{show:!0,api:a.update,auth:["jpro:mother:update"]},delete:{show:!0,api:a.deletes,auth:["jpro:mother:delete"],realApi:a.realDeletes,realAuth:["jpro:mother:realDeletes"]},recovery:{show:!0,api:a.recoverys,auth:["jpro:mother:recovery"]},import:{show:!1,url:"jpro/mother/import",templateUrl:"jpro/mother/downloadTemplate",auth:["jpro:mother:import"]},export:{show:!0,url:"jpro/mother/export",auth:["jpro:mother:export"]}}),j=f([{title:"",dataIndex:"id",formType:"input",addDisplay:!1,editDisplay:!1,hide:!0,commonRules:{required:!0,message:"请输入"}},{title:"姓名",dataIndex:"name",formType:"input",search:!0,commonRules:{required:!0,message:"请输入姓名"}},{title:"年龄",dataIndex:"age",formType:"input-number",search:!0,sortable:{sortDirections:["ascend","descend"],sorter:!0},max:200},{title:"身体状态",dataIndex:"body_status",formType:"select",search:!0,dict:{name:"body_status",props:{label:"title",value:"key"},translation:!0}},{title:"医院",dataIndex:"hospital_id",formType:"select",dict:{url:"jpro/common/hospitals",props:{label:"name",value:"id"},translation:!0},search:!0},{title:"医生",dataIndex:"doctor_id",formType:"select",dict:{url:"jpro/common/doctors",props:{label:"name",value:"id"},translation:!0},search:!0},{title:"最近一次就诊",dataIndex:"last_check_record",formType:"input",addDisplay:!1,editDisplay:!1},{title:"怀孕次数",dataIndex:"gravida",formType:"input-number",search:!0,sortable:{sortDirections:["ascend","descend"],sorter:!0},max:30},{title:"手术情况",dataIndex:"operation",formType:"textarea",hide:!0},{title:"食物过敏",dataIndex:"food_allergy",hide:!0,formType:"textarea"},{title:"药物过敏",dataIndex:"drug_allergy",hide:!0,formType:"textarea"},{title:"并发症",dataIndex:"complication",hide:!0,formType:"textarea"},{title:"身高",dataIndex:"height",formType:"input"},{title:"体重",dataIndex:"weight",formType:"input"},{title:"上次月经时间",dataIndex:"last_menstrual_time",formType:"date",width:200,showTime:!1},{title:"到格鲁吉亚时间",dataIndex:"arrive_time",formType:"date",width:200,showTime:!1},{title:"流血量",dataIndex:"bleed_amount",formType:"input",hide:!0},{title:"小孩数量",dataIndex:"children_amount",formType:"input-number",search:!0,max:20},{title:"多少天一次月经",dataIndex:"menstrual_freq",formType:"input-number",hide:!0},{title:"标签",dataIndex:"tag",formType:"input"},{title:"标签备注",dataIndex:"tag_remark",formType:"input",hide:!0},{title:"备注",dataIndex:"remark",formType:"textarea",hide:!0},{title:"扩展信息",dataIndex:"extra",formType:"editor",hide:!0},{title:"",dataIndex:"created_at",formType:"date",addDisplay:!1,editDisplay:!1,hide:!0,showTime:!0}]);return(u,c)=>{const k=d("icon-plus-circle"),v=d("a-link"),L=d("a-tag"),w=d("ma-crud");return y(),D("div",E,[s(w,{options:I,columns:j,ref_key:"crudRef",ref:o},R({last_check_record:n(({record:r})=>{var l;return[r.last_check_record?(y(),S(L,{key:0,color:((l=r.last_check_record)==null?void 0:l.check_time)==x(g)?"red":"green"},{default:n(()=>{var h;return[_(q((h=r.last_check_record)==null?void 0:h.check_time),1)]}),_:2},1032,["color"])):A("",!0)]}),_:2},[x(C)("jpro:checkRecord:save")?{name:"operationBeforeExtend",fn:n(({record:r})=>[s(v,{onClick:l=>T(r)},{default:n(()=>[s(k),_("就诊")]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1032,["options","columns"]),s(B,{mother:i.value,"onUpdate:mother":c[0]||(c[0]=r=>i.value=r),ref_key:"addCheckRecordRef",ref:m,parentCrudRef:o.value},null,8,["mother","parentCrudRef"])])}}});export{V as default};