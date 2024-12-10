import { request } from '@/utils/request.js'

/**
 * 人员管理 API JS
 */

export default {

  /**
   * 获取人员管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/user/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加人员管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/user/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新人员管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/user/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取人员管理
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/user/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将人员管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/user/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取人员管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'jpro/user/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复人员管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'jpro/user/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除人员管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'jpro/user/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改人员管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/user/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 修改人员管理数值数据，自增自减
   * @returns
   */
  numberOperation (data = {}) {
    return request({
      url: 'jpro/user/numberOperation',
      method: 'put',
      data
    })
  },

  /**
    * 人员管理导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'jpro/user/import',
      method: 'post',
      data
    })
  },

  /**
   * 人员管理下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'jpro/user/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 人员管理导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'jpro/user/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


  
  getEvents (params = {}) {
    return request({
      url: 'jpro/user/getEvents',
      method: 'get',
      params
    })
  },

}