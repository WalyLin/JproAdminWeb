import{g as Z,a as ee,A as te,b as ae}from"./appDetail-BumNv-b1.js";import se from"./app-DhrrlDI8.js";import{_ as oe,a as le,k as o,m as ne,S as z,A as ie,M as $,r as l,o as p,c as C,d as a,w as n,f as _,l as i,e as ce,F as D,g as E,h as I,t as M,i as pe,W as re,G as de,H as ue,I as ve}from"./index-Dz8v1PLH.js";const N=r=>(ue("data-v-ca5cdb10"),r=r(),ve(),r),_e={class:"rounded-md mt-2 flex justify-between"},me={class:"sticky card mt-2 -top-4 z-20 backdrop-blur border p-3 border-gray-200 dark:border-0 -mb-px rounded"},fe={class:"leading-8"},ye={class:"flex items-center"},ke=N(()=>i("span",null,"类型：",-1)),ge={class:"space-x-3 ml-3"},he={class:"flex items-center"},be=N(()=>i("span",null,"价格：",-1)),we={class:"space-x-3 yarnml-3"},Ae={__name:"appList",props:{isHasAccessToken:{type:Boolean,default:!1}},setup(r){const b=le(),P=r,R=o(ne.local.get("token")),H=o("http://13.251.66.158:9501/plugin/store/uploadLocalApp"),m=o(!1),O=o(),d=o(!1),w=o([]),f=o([]),T=o([]),A=o([]),y=o([]),j=o(0),u=z({page:1,size:9999,keywords:void 0,add_type:void 0,type:void 0,tag:void 0}),F=s=>window.open(s),L=(s={page:1,size:9999})=>{const e=Object.assign(u,s);m.value=!0,ae(e).then(g=>{var h;if(g.code===200){const{list:v,rowTotal:x}=(h=g.data)==null?void 0:h.data;w.value=v,T.value=w.value.filter(S=>!re.isUndefined(y.value[`${S.identifier}`])),j.value=x,m.value=!1,V()}})},V=()=>{d.value?f.value=T.value:f.value=w.value},c=z({addType:[{label:"全部",value:void 0},{label:"完整应用",value:"mixed"},{label:"后端应用",value:"backend"},{label:"前端应用",value:"frontend"}],types:[{label:"全部",value:void 0},{label:"免费应用",value:"0"},{label:"积分应用",value:"1"},{label:"付费应用",value:"2"}],keywords:void 0}),k=(s,e)=>{if(u[s]===e.value)return!0;u[s]=e.value,L()},q=async s=>{await O.value.open(s.identifier)},U=()=>{d.value=!d.value,V()},G=()=>{$.success("本地上传的应用已经安装成功"),de()};return ie(()=>{var s;if(P.isHasAccessToken||L(),Z().then(e=>{e.code===200&&(A.value=e.data)}),ee().then(e=>{e.code===200&&(y.value=e.data)}),(s=b.query)!=null&&s.install){const e=b.query.install.split("/")[1]??void 0;e?q({identifier:e}):$.error(`要安装插件：${b.query.install} 不存在`)}}),(s,e)=>{const g=l("a-alert"),h=l("icon-refresh"),v=l("a-button"),x=l("a-upload"),S=l("icon-desktop"),Q=l("icon-user"),W=l("a-space"),J=l("a-input-search"),B=l("a-tag"),K=l("a-empty"),X=l("a-spin");return p(),C("div",null,[a(g,null,{default:n(()=>[_("您可以在此页下载喜欢的应用，积分需要签到、做任务或者邀请好友、发布应用等方式获得。注意：只有开发环境才能使用应用市场")]),_:1}),i("div",_e,[i("div",null,[a(W,null,{default:n(()=>[a(v,{type:"primary",status:"danger",onClick:e[0]||(e[0]=t=>L())},{icon:n(()=>[a(h)]),_:1}),a(x,{action:H.value,accept:".zip,.rar",name:"file",limit:1,"show-file-list":!0,headers:{Authorization:`Bearer ${R.value}`},onSuccess:G,onError:e[1]||(e[1]=()=>ce($).error("上传失败"))},null,8,["action","headers"]),a(v,{type:d.value?"outline":"primary",onClick:U,status:"warning"},{icon:n(()=>[a(S)]),default:n(()=>[_("本地应用")]),_:1},8,["type"]),a(v,{status:"success",onClick:e[2]||(e[2]=t=>F("https://www.mineadmin.com/member/setting"))},{icon:n(()=>[a(Q)]),default:n(()=>[_("个人信息")]),_:1})]),_:1})]),a(J,{placeholder:"搜索应用...",modelValue:c.keywords,"onUpdate:modelValue":e[3]||(e[3]=t=>c.keywords=t),onPressEnter:e[4]||(e[4]=t=>k("keywords",{value:c.keywords})),onSearch:e[5]||(e[5]=t=>k("keywords",{value:c.keywords})),class:"w-52"},null,8,["modelValue"])]),i("div",me,[i("ul",fe,[i("li",ye,[ke,i("div",ge,[(p(!0),C(D,null,E(c.addType,t=>(p(),I(B,{checkable:"",color:"arcoblue",checked:u.add_type===t.value,onClick:Y=>k("add_type",t)},{default:n(()=>[_(M(t.label),1)]),_:2},1032,["checked","onClick"]))),256))])]),i("li",he,[be,i("div",we,[(p(!0),C(D,null,E(c.types,t=>(p(),I(B,{checkable:"",color:"arcoblue",checked:u.type===t.value,onClick:Y=>k("type",t)},{default:n(()=>[_(M(t.label),1)]),_:2},1032,["checked","onClick"]))),256))])])])]),f.value.length===0&&!m.value?(p(),I(K,{key:0,description:"暂无应用",class:"my-5 mt-20"})):pe("",!0),a(X,{loading:m.value,tip:"加载应用列表中...",class:"sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-60 -top-5 gap-4 mt-2 md:top-0 sm:top-2 relative md:mt-2.5"},{default:n(()=>[a(se,{myAppList:A.value,appList:f.value,localInstallList:y.value,isOnlyShowLocalApp:d.value,onOnOpenDetail:q},null,8,["myAppList","appList","localInstallList","isOnlyShowLocalApp"])]),_:1},8,["loading"]),a(te,{ref_key:"detailRef",ref:O,myApp:A.value,"install-list":y.value},null,8,["myApp","install-list"])])}}},$e=oe(Ae,[["__scopeId","data-v-ca5cdb10"]]);export{$e as default};