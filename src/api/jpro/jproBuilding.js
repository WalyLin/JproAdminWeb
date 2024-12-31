import { request } from '@/utils/request.js'

/**
 * 楼栋管理 API JS
 */

export default {

  /**
   * 获取楼栋管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/building/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加楼栋管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/building/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新楼栋管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/building/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取楼栋管理
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/building/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将楼栋管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/building/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改楼栋管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/building/changeStatus',
      method: 'put',
      data
    })
  },


}