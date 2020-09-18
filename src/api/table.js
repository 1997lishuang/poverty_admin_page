import request from '@/utils/request'

export function getList(params) {
  return request({
      url: `http://machaoyin.top:8080/jzfp/poverty/findPage?current=${current}&limit=${limit}`,
      method: 'get',
      withCredentials: true
  })
}
