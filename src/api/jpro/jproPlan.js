import { request } from '@/utils/request.js'

/**
 * 事件管理 API JS
 */

export default {

  /**
   * 获取事件管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/plan/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加事件管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/plan/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新事件管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/plan/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取事件管理
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/plan/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将事件管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/plan/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取事件管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'jpro/plan/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复事件管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'jpro/plan/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除事件管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'jpro/plan/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改事件管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/plan/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改事件管理数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'jpro/plan/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 事件管理导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'jpro/plan/import',
      method: 'post',
      data
    })
  },

  /**
   * 事件管理下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'jpro/plan/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 事件管理导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'jpro/plan/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}