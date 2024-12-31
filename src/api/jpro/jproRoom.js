import { request } from '@/utils/request.js'

/**
 * 房间管理 API JS
 */

export default {

  /**
   * 获取房间管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'jpro/room/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加房间管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'jpro/room/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新房间管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'jpro/room/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取房间管理
   * @returns
   */
  read (id) {
    return request({
      url: 'jpro/room/read/' + id,
      method: 'get'
    })
  },

  /**
   * 将房间管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'jpro/room/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改房间管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'jpro/room/changeStatus',
      method: 'put',
      data
    })
  },


}