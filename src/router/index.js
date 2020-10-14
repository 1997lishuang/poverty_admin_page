import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/prv',
    component: Layout,
    redirect: '/prv/reliefinfo',
    name: '村民信息管理',
    meta: { title: '村民信息管理', icon: 'example' },
    children: [
      {
        path: '/prv/povetyinfo',
        name: '贫困村民信息',
        component: () => import('@/views/prv/reliefinfo'),
        meta: { title: '贫困村民信息', icon: 'table' }
      },
      {
        path: '/prv/reliefinfo',
        name: '脱贫村民信息',
        component: () => import('@/views/prv/reliefinfotwo'),
        meta: { title: '脱贫村民信息', icon: 'table' }
      },
      {
        path: '/prv/sava',
        name: '添加贫困村民',
        component: () => import('@/views/prv/CURDManage/sava'),
        meta: { title: '添加贫困村民', icon: 'table' },
        hidden: true
      },
      {
         path: '/prv/sava/:id',
         name: 'EduPtvEdit',
         component: () => import('@/views/prv/CURDManage/sava'),
         meta: { title: '编辑贫困村民信息', noCache: true },
         hidden: true
       },
       {
         path: '/prv/info/:id',
         name: 'prvinfo',
         component: () => import('@/views/prv/CURDManage/info'),
         meta: { title: '贫困村民详情信息', noCache: true },
         hidden: true
       },
      {
        path: '/prv/infoTwo',
        name: 'prvInfoTwo',
        component: () => import('@/views/prv/CURDManage/infoTwo'),
        meta: { title: '贫困村民详情信息二', noCache: true },
        hidden: true
      },
       {
         path: '/prv/savaMember/:id',
         name: 'prvinfo',
         component: () => import('@/views/prv/member/savaMember'),
         meta: { title: '修改户主成员', noCache: true },
         hidden: true
       },
      {
        path: '/prv/savaMember',
        name: 'prvinfo',
        component: () => import('@/views/prv/member/savaMember'),
        meta: { title: '添加户主成员', noCache: true },
        hidden: true
      },
       {
         path: '/pro/sava/:id',
         name: 'proSava',
         component: () => import('@/views/pro/sava'),
         meta: { title: '修改产业', noCache: true },
         hidden: true
       },
      {
         path: '/pro/sava',
         name: 'proSava',
         component: () => import('@/views/pro/sava'),
         meta: { title: '添加产业', noCache: true },
         hidden: true
       },
       {
         path: '/prv/help/:id',
         name: 'prvinfo',
         component: () => import('@/views/prv/help'),
         meta: { title: '帮扶人信息', noCache: true },
         hidden: true
       },
    ]
  },
  {
    path: '/jzhfp',
    component: Layout,
    redirect: '/jzhfp/doudi',
    name: '精准扶贫管理',
    meta: { title: '精准扶贫管理', icon: 'example' },
    children: [
      {
        path: '/jzhfp/doudi',
        name: '兜底保障扶贫',
        component: () => import('@/views/jzhfp/doudi'),
        meta: { title: '兜底保障扶贫', icon: 'table' }
      },
      {
        path: '/jzhfp/doudiInfo/:id',
        name: '兜底详情页面',
        component: () => import('@/views/jzhfp/doudiInfo'),
        meta: { title: '兜底详情页面', noCache: true },
        hidden: true
      },
      {
        path: '/jzhfp/doudiSave/:id',
        name: '兜底修改页面',
        component: () => import('@/views/jzhfp/doudiSava'),
        meta: { title: '兜底修改页面', noCache: true },
        hidden: true
      },
      {
        path: '/jzhfp/doudiSave',
        name: '兜底添加页面',
        component: () => import('@/views/jzhfp/doudiSava'),
        meta: { title: '兜底添加页面', noCache: true },
        hidden: true
      },
      {
        path: '/jzhfp/profupin',
        name: '产业扶贫',
        component: () => import('@/views/jzhfp/profupin'),
        meta: { title: '产业扶贫', icon: 'tree' }
      },
      {
        path: '/jzhfp/profupinSave/:id',
        name: '兜底保障扶贫详情页面',
        component: () => import('@/views/jzhfp/profupinSava'),
        meta: { title: '兜底保障扶贫', icon: 'tree' },
        hidden: true
      },
      {
        path: '/jzhfp/profupinSave',
        name: '兜底保障扶贫详情页面',
        component: () => import('@/views/jzhfp/profupinSava'),
        meta: { title: '兜底保障扶贫', icon: 'tree' },
        hidden: true
      },
      {
        path: '/jzhfp/profupinInfo',
        name: '兜底保障扶贫详情页面',
        component: () => import('@/views/jzhfp/profupinInfo'),
        meta: { title: '兜底保障扶贫', icon: 'tree' },
        hidden: true
      },
      {
        path: '/jzhfp/jiuye',
        name: '就业扶贫扶贫',
        component: () => import('@/views/jzhfp/jiuye'),
        meta: { title: '就业扶贫扶贫', icon: 'tree' }
      },
      {
        path: '/jzhfp/movefupin',
        name: '搬迁扶贫',
        component: () => import('@/views/jzhfp/movefupin'),
        meta: { title: '搬迁扶贫', icon: 'tree' }
      },
      {
        path: '/jzhfp/edufupin',
        name: '教育扶贫',
        component: () => import('@/views/jzhfp/edufupin'),
        meta: { title: '教育扶贫', icon: 'tree' }
      },
      {
        path: '/jzhfp/medicalfupin',
        name: '医疗扶贫',
        component: () => import('@/views/jzhfp/medicalfupin'),
        meta: { title: '医疗扶贫', icon: 'tree' }
      }
    ]
  },

  // {
  //   path: '/fupinshudata',
  //   component: Layout,
  //   redirect: '/fupinshudata/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: '/fupinshudata/',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
