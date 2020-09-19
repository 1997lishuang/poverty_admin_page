import request from '@/utils/request'
export default {
   
    //删除产业
    deleteProId(id) {
        return request({
            url: `/industry/deleteById/${id}`,
            method: 'delete'
          })
    },
    //添加产业
    addPro(formInline) {
        return request({
            url: `/industry/sava`,
            method: 'post',
            data: formInline
          })
    },
    //根据id查询产业
    getProInfo(id) {
        return request({
            url: `/industry/findById/${id}`,
            method: 'get'
          })
    },
    //修改产业
    updateProInfo(formInline) {
        return request({
            url: `/industry/sava`,
            method: 'post',
            data: formInline
          })
    }
}
