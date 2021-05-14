import Mock from 'mockjs'

Mock.mock('http://login', function () {
  return Mock.mock({
    success: true,
    msg: '',
    token: '123ABCdef*',
    menu: {
      vueMenu: [
        {
          nodeId: 1,
          path: '/pms',
          label: '商品',
          name: 'pms',
          children: [
            {
              path: 'product',
              name: 'product',
              label: '商品列表',
              component: 'pms/product/index',
              parentId: 1
            },
            {
              path: 'addProduct',
              name: 'addProduct',
              label: '添加商品',
              component: 'pms/product/add',
              parentId: 1
            },
            {
              path: 'productAttr',
              name: 'productAttr',
              label: '商品类型',
              component: 'pms/productAttr/index',
              parentId: 1
            },
            {
              path: 'brand',
              name: 'brand',
              label: '品牌管理',
              component: 'pms/brand/index',
              parentId: 1
            }
          ]
        },
        {
          nodeId: 2,
          path: '/oms',
          name: 'oms',
          label: '订单',
          children: [
            {
              path: 'order',
              name: 'order',
              label: '订单列表',
              component: 'oms/order/index',
              parentId: 2
            },
            {
              path: 'orderSetting',
              name: 'orderSetting',
              label: '订单设置',
              component: 'oms/order/setting',
              parentId: 2
            },
            {
              path: 'returnApply',
              name: 'returnApply',
              label: '退货申请处理',
              component: 'oms/apply/index',
              parentId: 2
            },
            {
              path: 'returnReason',
              name: 'returnReason',
              label: '退货原因设置',
              component: 'oms/apply/reason',
              parentId: 2
            }
          ]
        },
        {
          nodeId: 3,
          path: '/sms',
          name: 'sms',
          label: '营销',
          children: [
            {
              path: 'flash',
              name: 'flash',
              label: '秒杀活动列表',
              component: 'sms/flash/index',
              parentId: 3
            },
            {
              path: 'coupon',
              name: 'coupon',
              label: '优惠券列表',
              component: 'sms/coupon/index',
              parentId: 3
            },
            {
              path: 'brand1',
              name: 'homeBrand',
              label: '品牌推荐',
              component: 'sms/brand/index',
              parentId: 3
            },
            {
              path: 'new',
              label: '新品推荐',
              component: 'sms/new/index',
              parentId: 3
            },
            {
              path: 'hot',
              name: 'hot',
              label: '人气推荐',
              component: 'sms/hot/index',
              parentId: 3
            },
            {
              path: 'subject',
              name: 'subject',
              label: '专题推荐',
              parentId: 3
            },
            {
              path: 'advertise',
              name: 'advertise',
              label: '广告列表',
              parentId: 3
            }
          ]
        },
        {
          nodeId: 4,
          path: '/ums',
          name: 'ums',
          label: '权限',
          children: [
            {
              path: 'admin',
              name: 'admin',
              label: '用户列表',
              parentId: 4
            },
            {
              path: 'role',
              name: 'role',
              label: '角色列表',
              parentId: 4
            },
            {
              path: 'menu',
              name: 'menu',
              label: '菜单列表',
              parentId: 4
            },
            {
              path: 'resource',
              name: 'resource',
              label: '资源列表',
              parentId: 4
            }
          ]
        }
      ]
    }
  })
})
