import{X as t}from"./index-zqoWALrn.js";const m={getList(e={}){return t({url:"system/menu/index",method:"get",params:e})},getRecycleList(e={}){return t({url:"system/menu/recycle",method:"get",params:e})},tree(e={}){return t({url:"system/menu/tree",method:"get",params:e})},save(e={}){return t({url:"system/menu/save",method:"post",data:e})},deletes(e){return t({url:"system/menu/delete",method:"delete",data:e})},recoverys(e){return t({url:"system/menu/recovery",method:"put",data:e})},realDeletes(e){return t({url:"system/menu/realDelete",method:"delete",data:e})},update(e,r={}){return t({url:"system/menu/update/"+e,method:"put",data:r})},numberOperation(e={}){return t({url:"system/menu/numberOperation",method:"put",data:e})},changeStatus(e={}){return t({url:"system/menu/changeStatus",method:"put",data:e})}};export{m};