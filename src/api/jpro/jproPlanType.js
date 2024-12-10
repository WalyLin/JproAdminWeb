import { request } from '@/utils/request.js'

/**
 * 事件类型管理 API JS
 */

export default {

  /**
   * 获取事件类型管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/planType/index',      
      method: 'get',
      params
    })
  },

  /**
   * 添加事件类型管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/planType/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新事件类型管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/planType/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取事件类型管理
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/planType/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将事件类型管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/planType/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取事件类型管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'jpro/planType/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复事件类型管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'jpro/planType/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除事件类型管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'jpro/planType/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改事件类型管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/planType/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改事件类型管理数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'jpro/planType/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 事件类型管理导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'jpro/planType/import',
      method: 'post',
      data
    })
  },

  /**
   * 事件类型管理下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'jpro/planType/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 事件类型管理导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'jpro/planType/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}