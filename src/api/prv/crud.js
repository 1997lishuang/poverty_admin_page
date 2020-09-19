import request from '@/utils/request'
export default {
    //1 贫困人列表（条件查询分页）
    //current当前页 limit每页记录数 tpaQuery条件对象
    getPrvListPage(current,limit) {
        return request({
            url: `/jzfp/poverty/findPage?current=${current}&limit=${limit}`,
            method: 'get'
          })
    },
    //删除贫困人
    deletePrvId(id) {
        return request({
            // url: `/jzfp/poverty/deleteById/${id}`,
             url: `/jzfp/poverty/deleteById?id=${id}`,
            method: 'delete'
          })
    },
    //添加删除贫困人
    addPrv(formInline) {
        return request({
            url: `/jzfp/poverty/sava`,
            method: 'post',
            data: formInline
          })
    },
    //根据id查询贫困人
    getPrvInfo(id) {
        return request({
            url: `/poverty/findById/${id}`,
            method: 'get'
          })
    },
    //修改删除贫困人
    updatePrvInfo(formInline) {
        return request({
            url: `/jzfp/poverty/sava`,
            method: 'post',
            data: formInline
          })
    },
    //添加成员接口  这里没有修改接口名
    addPrvMember(formInline) {
        return request({
            url: `/jzfp/poverty/sava`,
            method: 'post',
            data: formInline
          })
    },
    //修改成员接口
    updatePrvMember(formInline) {
        return request({
            url: `/jzfp/poverty/sava`,
            method: 'post',
            data: formInline
          })
    },
    //删除成员接口
     deletePrvMemberId(id) {
        return request({
            // url: `/jzfp/poverty/deleteById/${id}`,
             url: `/jzfp/poverty/deleteById?id=${id}`,
            method: 'delete'
          })
    },
    // 获取成员info
        //根据id查询贫困人
    getPrvMemberInfo(id) {
        return request({
            url: `/poverty/findById/${id}`,
            method: 'get'
          })
    },

    
    //脱贫人信息的查询
}
