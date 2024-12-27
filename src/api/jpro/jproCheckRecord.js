import { request } from '@/utils/request.js'

/**
 * 就诊记录 API JS
 */

export default {

  /**
   * 获取就诊记录分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/checkRecord/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加就诊记录
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/checkRecord/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新就诊记录数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/checkRecord/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取就诊记录
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/checkRecord/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将就诊记录删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/checkRecord/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取就诊记录数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'jpro/checkRecord/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复就诊记录数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'jpro/checkRecord/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除就诊记录
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'jpro/checkRecord/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改就诊记录数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/checkRecord/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改就诊记录数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'jpro/checkRecord/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 就诊记录导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'jpro/checkRecord/import',
      method: 'post',
      data
    })
  },

  /**
   * 就诊记录下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'jpro/checkRecord/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 就诊记录导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'jpro/checkRecord/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}