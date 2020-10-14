import request from '@/utils/request'

export default {
  //获取兜底人数集合
  doudiGetListPage(current,limit) {
    return request({
      url: `/jzfp/doudi/findPage?current=${current}&limit=${limit}`,
      method: 'get',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      withCredentials: true
    })
  },
  //获取兜底全部的类型List集合
  doudiTypeGetList(){
    return request({
      url: `/jzfp/doudi/findDoudiTypeList`,
      method: 'get',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      withCredentials: true
    })
  },
  //删除兜底类型
  doudiDeleteTyepId(id) {
    return request({
      url: `/doudi/deleteById?id=${id}`,
      method: 'delete'
    })
  },
  //添加兜底
  doudiAddType(formInline) {
    return request({
      url: `/doudi/sava`,
      method: 'post',
      data: formInline
    })
  },
  //根据id查询兜底类型
  doudiGetTypeInfo(id) {
    return request({
      url: `/doudi/findById?id=${id}`,
      method: 'get'
    })
  },
  //修改兜底
  doudiUpdateInfo(formInline) {
    return request({
      url: `/doudi/update`,
      method: 'post',
      data: formInline
    })
  }
}
