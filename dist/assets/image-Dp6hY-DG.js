import{X as r,k as a,a5 as d,x as l,r as p,o as u,c as s,d as m}from"./index-7niCPtNG.js";const k={getList(e={}){return r({url:"jpro/checkRecord/index",method:"get",params:e})},save(e={}){return r({url:"jpro/checkRecord/save",method:"post",data:e})},update(e,o={}){return r({url:"jpro/checkRecord/update/"+e,method:"put",data:o})},read(e){return r({url:"jpro/checkRecord/read/"+e,method:"get"})},deletes(e){return r({url:"jpro/checkRecord/delete",method:"delete",data:e})},getRecycleList(e={}){return r({url:"jpro/checkRecord/recycle",method:"get",params:e})},recoverys(e){return r({url:"jpro/checkRecord/recovery",method:"put",data:e})},realDeletes(e){return r({url:"jpro/checkRecord/realDelete",method:"delete",data:e})},changeStatus(e={}){return r({url:"jpro/checkRecord/changeStatus",method:"put",data:e})},numberOperation(e={}){return r({url:"jpro/checkRecord/numberOperation",method:"put",data:e})},importExcel(e={}){return r({url:"jpro/checkRecord/import",method:"post",data:e})},downloadTemplate(){return r({url:"jpro/checkRecord/downloadTemplate",method:"post",responseType:"blob"})},exportExcel(e={}){return r({url:"jpro/checkRecord/export",method:"post",responseType:"blob",params:e})}},R={__name:"image",props:{component:Object},setup(e){const o=e,t=a(),c=d("formModel");return l(()=>c._rawValue[o.component.dataIndex],()=>{t.value=c._rawValue[o.component.dataIndex],console.info(c),console.info(o.component),console.info(t.value)}),t.value=c._rawValue[o.component.dataIndex],(h,i)=>{const n=p("a-image");return u(),s("div",null,[m(n,{width:"100%",src:t.value},null,8,["src"])])}}};export{R as _,k as j};