import{k as i,S as b,r as o,o as k,c as N,l as r,f as l,d as a,w as e,t as _,q as L}from"./index-BdmCqAiM.js";const T={class:"w-full lg:w-9/12 ma-content-block rounded-sm p-3 mt-3"},B={class:"flex justify-between"},C=["innerHTML"],H={__name:"st-announced",setup(V){const p=i([]),f=b([{title:"标题",dataIndex:"title",slotName:"title"},{title:"发布时间",dataIndex:"created_at",width:180,align:"right"}]),n=i({}),c=i(!1),g=async s=>{n.value=s,c.value=!0};return(async()=>{const s=await L.getNoticeList({pageSize:5,orderBy:"id",orderType:"desc"});p.value=s.data.items})(),(s,d)=>{const u=o("a-link"),v=o("a-table"),y=o("a-typography-title"),h=o("a-space"),m=o("a-typography-paragraph"),x=o("a-typography"),w=o("a-modal");return k(),N("div",T,[r("div",B,[l(" 系统公告 "),a(u,null,{default:e(()=>[l("更多")]),_:1})]),a(v,{data:p.value,columns:f,class:"mt-2",pagination:!1},{title:e(({record:t})=>[a(u,{onClick:S=>g(t)},{default:e(()=>[l(_(t.title),1)]),_:2},1032,["onClick"])]),_:1},8,["data","columns"]),a(w,{visible:c.value,"onUpdate:visible":d[0]||(d[0]=t=>c.value=t),fullscreen:"",footer:!1},{title:e(()=>[l("公告详情")]),default:e(()=>[a(x,{style:{marginTop:"-30px"}},{default:e(()=>[a(y,{class:"text-center"},{default:e(()=>{var t;return[l(_((t=n.value)==null?void 0:t.title),1)]}),_:1}),a(m,{class:"text-right",style:{"font-size":"13px",color:"var(--color-text-3)"}},{default:e(()=>[a(h,{size:"large"},{default:e(()=>{var t;return[r("span",null,"创建时间："+_((t=n.value)==null?void 0:t.created_at),1)]}),_:1})]),_:1}),a(m,null,{default:e(()=>{var t;return[r("div",{innerHTML:(t=n.value)==null?void 0:t.content},null,8,C)]}),_:1})]),_:1})]),_:1},8,["visible"])])}}};export{H as default};