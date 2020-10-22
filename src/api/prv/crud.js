import request from '@/utils/request'
export default {
    //1 贫困人列表（条件查询分页）
    //current当前页 limit每页记录数 tpaQuery条件对象
    getPrvListPage(current,limit) {
        return request({
            url: `/jzfp/poverty/findPage?current=${current}&limit=${limit}`,
            method: 'get',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            withCredentials: true
          })
    },
    //模糊查询贫困人信息集合
    getLikeList() {
      return request({
        url: `/jzfp/poverty/findLikePage`,
        method: 'get',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        withCredentials: true
      })
    },
  //删除贫困人 (户主)
    deletePrvId(id) {
        return request({
            // url: `/jzfp/poverty/deleteById/${id}`,
             url: `/jzfp/poverty/deleteById?id=${id}`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            withCredentials: true,
            method: 'delete'
          })
    },
    //添加贫困人
    addPrv(formInline) {
        return request({
            url: `/jzfp/poverty/sava`,
            method: 'post',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            withCredentials: true,
            data: formInline
          })
    },
    //根据id查询贫困人
    getPrvInfo(id) {
        return request({
            url: `/jzfp/poverty/findById?id=${id}`,
            method: 'get',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            withCredentials: true
          })
    },
    //修改贫困人
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
    //删除户主的成员接口
     deletePrvMemberId(id) {
        return request({
            // url: `/jzfp/poverty/deleteById/${id}`,
             url: `/jzfp/poverty/deleteById?id=${id}`,
            method: 'delete'
          })
    },
    //根据id//获取户主成员的信息
    getPrvMemberInfo(id) {
        return request({
            url: `/poverty/findById/${id}`,
            method: 'get'
          })
    },


    //脱贫人信息的查询

    // 添加帮扶贫人信息 需要的场合速为 helpid 和 被棒读喷 的id
    helpPerson(helpId,prvId){
      return request({
          url:`/poverty/helpById/${helpId}/${prvId}`,
          method: 'get'
      })
    }
}
