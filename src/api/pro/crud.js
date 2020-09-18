import request from '@/utils/request'
export default {
   
    //删除产业
    deletePrvId(id) {
        return request({
            url: `/poverty/deleteById/${id}`,
            method: 'delete'
          })
    },
    //添加产业
    addPrv(formInline) {
        return request({
            url: `/poverty/sava`,
            method: 'post',
            data: formInline
          })
    },
    //根据id查询产业
    getPrvInfo(id) {
        return request({
            url: `/poverty/findById/${id}`,
            method: 'get'
          })
    },
    //修改产业
    updatePrvInfo(formInline) {
        return request({
            url: `/poverty/sava`,
            method: 'post',
            data: formInline
          })
    }
}
