import{m as B}from"./monitor-BYMaVqQO.js";import{_ as H,k as r,r as c,o as s,h as b,w as a,c as m,d as e,f as l,t,l as z,i as g}from"./index-BKl9qfEo.js";const I={key:0,class:"ma-content-block lg:flex p-4"},N={key:1,class:"flex justify-between w-full redis-info mt-3"},V={class:"echarts hidden lg:block"},A={key:1,class:"ma-content-block lg:flex p-4 mt-3"},G={key:1,class:"flex justify-between w-full redis-info mt-3"},O={class:"echarts hidden lg:block"},S={key:2,class:"ma-content-block lg:flex p-4 mt-3"},U={key:1,class:"flex justify-between w-full redis-info mt-3"},M={name:"system:monitor:server"},D=Object.assign(M,{setup(E){const x=r({}),P=r({}),u=r({}),i=r({}),n=r({}),d=r({}),p=r(!0);return(async()=>{var w,_,f,v;p.value=!0;const h=await B.getServerInfo();u.value=(w=h.data)==null?void 0:w.cpu,i.value=(_=h.data)==null?void 0:_.memory,n.value=(f=h.data)==null?void 0:f.phpenv,d.value=(v=h.data)==null?void 0:v.disk,x.value={tooltip:{formatter:"{b} : {c}%"},series:[{name:"CPU使用率",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}"},data:[{value:u.value.usage,name:"CPU使用率"}]}]},P.value={tooltip:{formatter:"{b} : {c}%"},series:[{name:"内存使用率",type:"gauge",progress:{show:!0},detail:{valueAnimation:!0,formatter:"{value}"},data:[{value:i.value.rate,name:"内存使用率"}]}]},p.value=!1})(),(h,w)=>{const _=c("a-skeleton-line"),f=c("a-space"),v=c("a-skeleton"),o=c("a-descriptions-item"),k=c("a-descriptions"),C=c("ma-chart"),y=c("a-divider"),j=c("a-layout-content");return s(),b(j,null,{default:a(()=>[u.value?(s(),m("div",I,[p.value?(s(),b(v,{key:0,animation:"",class:"w-full"},{default:a(()=>[e(f,{direction:"vertical",class:"w-full",size:"large"},{default:a(()=>[e(_,{rows:5})]),_:1})]),_:1})):(s(),m("div",N,[e(k,{column:1,size:"large",bordered:"",title:"CPU信息",class:"lg:w-9/12 w-full"},{default:a(()=>[e(o,{label:"型号"},{default:a(()=>[l(t(u.value.name),1)]),_:1}),e(o,{label:"核心数"},{default:a(()=>[l(t(u.value.cores),1)]),_:1}),e(o,{label:"缓存"},{default:a(()=>[l(t(u.value.cache),1)]),_:1}),e(o,{label:"使用率"},{default:a(()=>[l(t(u.value.usage)+"%",1)]),_:1}),e(o,{label:"空闲率"},{default:a(()=>[l(t(u.value.free)+"%",1)]),_:1})]),_:1}),z("div",V,[e(C,{options:x.value,width:"350px",height:"350px"},null,8,["options"])])]))])):g("",!0),i.value?(s(),m("div",A,[p.value?(s(),b(v,{key:0,animation:"",class:"w-full"},{default:a(()=>[e(f,{direction:"vertical",class:"w-full",size:"large"},{default:a(()=>[e(_,{rows:5})]),_:1})]),_:1})):(s(),m("div",G,[e(k,{column:1,size:"large",bordered:"",title:"内存信息",class:"lg:w-9/12 w-full"},{default:a(()=>[e(o,{label:"总内存"},{default:a(()=>[l(t(i.value.total)+"G",1)]),_:1}),e(o,{label:"已使用内存"},{default:a(()=>[l(t(i.value.usage)+"G",1)]),_:1}),e(o,{label:"PHP使用内存"},{default:a(()=>[l(t(i.value.php)+"M",1)]),_:1}),e(o,{label:"空闲内存"},{default:a(()=>[l(t(i.value.free)+"G",1)]),_:1}),e(o,{label:"使用率"},{default:a(()=>[l(t(i.value.rate)+"%",1)]),_:1})]),_:1}),z("div",O,[e(C,{options:P.value,width:"350px",height:"350px"},null,8,["options"])])]))])):g("",!0),n.value?(s(),m("div",S,[p.value?(s(),b(v,{key:0,animation:"",class:"w-full"},{default:a(()=>[e(f,{direction:"vertical",class:"w-full",size:"large"},{default:a(()=>[e(_,{rows:5})]),_:1})]),_:1})):(s(),m("div",U,[e(k,{column:2,size:"large",bordered:"",title:"PHP及环境信息",class:"w-full"},{default:a(()=>[e(o,{label:"操作系统"},{default:a(()=>[l(t(n.value.os),1)]),_:1}),e(o,{label:"PHP版本"},{default:a(()=>[l(t(n.value.php_version),1)]),_:1}),e(o,{label:"Swoole版本"},{default:a(()=>[l(t(n.value.swoole_version),1)]),_:1}),e(o,{label:"Hyperf版本"},{default:a(()=>[l(t(n.value.hyperf_version),1)]),_:1}),e(o,{label:"MineAdmin版本"},{default:a(()=>[l(t(n.value.mineadmin_version),1)]),_:1}),e(o,{label:"系统物理路径"},{default:a(()=>[l(t(n.value.project_path),1)]),_:1}),e(o,{label:"系统启动时间"},{default:a(()=>[l(t(n.value.start_time),1)]),_:1}),e(o,{label:"系统运行时间"},{default:a(()=>[l(t(n.value.run_time),1)]),_:1}),d.value?(s(),b(o,{key:0,label:"磁盘信息"},{default:a(()=>[l(" 总空间："+t(d.value.total)+" ",1),e(y,{direction:"vertical"}),l(" 已使用："+t(d.value.usage)+" ",1),e(y,{direction:"vertical"}),l(" 已剩余："+t(d.value.free)+" ",1),e(y,{direction:"vertical"}),l(" 使用率："+t(d.value.rate),1)]),_:1})):g("",!0)]),_:1})]))])):g("",!0)]),_:1})}}}),J=H(D,[["__scopeId","data-v-3a037d39"]]);export{J as default};