import { request } from '@/utils/request.js'

/**
 * 孕妈管理 API JS
 */

export default {

  /**
   * 获取孕妈管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/mother/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加孕妈管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/mother/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新孕妈管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/mother/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取孕妈管理
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/mother/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将孕妈管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/mother/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改孕妈管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/mother/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改孕妈管理数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'jpro/mother/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 孕妈管理导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'jpro/mother/import',
      method: 'post',
      data
    })
  },

  /**
   * 孕妈管理下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'jpro/mother/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 孕妈管理导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'jpro/mother/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },

  /**
   * 从回收站获取孕妈管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'jpro/mother/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复孕妈管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'jpro/mother/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除孕妈管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'jpro/mother/realDelete',
      method: 'delete',
      data
    })
  },


}