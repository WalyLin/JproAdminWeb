import { request } from '@/utils/request.js'

/**
 * 人员额外信息分类表 API JS
 */

export default {

  /**
   * 获取人员额外信息分类表分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/extraInfoType/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加人员额外信息分类表
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/extraInfoType/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新人员额外信息分类表数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/extraInfoType/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取人员额外信息分类表
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/extraInfoType/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将人员额外信息分类表删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/extraInfoType/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取人员额外信息分类表数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'jpro/extraInfoType/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复人员额外信息分类表数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'jpro/extraInfoType/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除人员额外信息分类表
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'jpro/extraInfoType/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改人员额外信息分类表数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/extraInfoType/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改人员额外信息分类表数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'jpro/extraInfoType/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 人员额外信息分类表导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'jpro/extraInfoType/import',
      method: 'post',
      data
    })
  },

  /**
   * 人员额外信息分类表下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'jpro/extraInfoType/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 人员额外信息分类表导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'jpro/extraInfoType/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}