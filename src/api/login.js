import request from '@/utils/request'
import qs from 'qs'
export function login(username, password) {
  return request({
    url: '/jzfp/login',
    // url: '/eduservice/user/login',
    method: 'post',
   //  data:{
   //  	username:username,
   //  	password:password
   // },
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    withCredentials: true,
    data: qs.stringify({ username: username,password:password })
  })
}

export function getInfo(token) {
  return request({
    url: '/jzfp/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/eduservice/user/logout',
    method: 'post'
  })
}


// {
// 	"code": "20000",
// 	"data": {
// 		"roles": "[admin]",
// 		"name": "admin",
// 		"avatar": "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2835713736,365904859&fm=26&gp=0.jpg"
// 	},
// 	"success": "true",
// 	"message": "成功"
// }
// {
// 	"success": true,
// 	"code": 20000,
// 	"message": "成功",
// 	"data": {
// 		"roles": "[admin]",
// 		"name": "admin",
// 		"avatar": "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2835713736,365904859&fm=26&gp=0.jpg"
// 	}
// }



// {
// 	"code": "20000",
// 	"data": {
// 		"token": "admin"
// 	},
// 	"message": "操作成功",
// 	"success": true
// }

// {
// 	"success": true,
// 	"code": 20000,
// 	"message": "成功",
// 	"data": {
// 		"token": "admin"
// 	}
// }
