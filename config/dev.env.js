'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:8001"'
  BASE_API: '"http://machaoyin.top:8080"'
})
//BASE_API: '"http://machaoyin.top:8080"'

//添加对象为这个
// {"success":true,"code":20000,"message":"成功","data":{"roles":"[admin]","name":"admin","avatar":"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2835713736,365904859&fm=26&gp=0.jpg"}}