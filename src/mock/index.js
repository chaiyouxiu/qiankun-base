import Mock from 'mockjs'

Mock.mock('http://login', function () {
  return Mock.mock({
    success: true,
    msg: '',
    token: '123ABCdef*',
    menu: {
      vueMenu: [
        {
          path: '/pms',
          label: '商品',
          name: 'pms',
          children: [
            {
              path: 'product',
              name: 'product',
              label: '商品列表'
            },
            {
              path: 'addProduct',
              name: 'addProduct',
              label: '添加商品'
            },
            {
              path: 'productCate',
              name: 'productCate',
              label: '商品分类'
            },
            {
              path: 'productAttr',
              name: 'productAttr',
              label: '商品类型'
            },
            {
              path: 'brand',
              name: 'brand',
              label: '品牌管理'
            }
          ]
        },
        {
          path: '/oms',
          name: 'oms',
          label: '订单',
          children: [
            {
              path: 'order',
              name: 'order',
              label: '订单列表'
            },
            {
              path: 'orderSetting',
              name: 'orderSetting',
              label: '订单设置'
            },
            {
              path: 'returnApply',
              name: 'returnApply',
              label: '退货申请处理'
            },
            {
              path: 'returnReason',
              name: 'returnReason',
              label: '退货原因设置'
            }
          ]
        },
        {
          path: '/sms',
          name: 'sms',
          label: '营销',
          children: [
            {
              path: 'flash',
              name: 'flash',
              label: '秒杀活动列表'
            },
            {
              path: 'coupon',
              name: 'coupon',
              label: '优惠券列表'
            },
            {
              path: 'brand1',
              name: 'brand1',
              label: '品牌推荐'
            },
            {
              path: 'new',
              label: '新品推荐'
            },
            {
              path: 'hot',
              name: 'hot',
              label: '人气推荐'
            },
            {
              path: 'subject',
              name: 'subject',
              label: '专题推荐'
            },
            {
              path: 'advertise',
              name: 'advertise',
              label: '广告列表'
            }
          ]
        },
        {
          path: '/ums',
          name: 'ums',
          label: '权限',
          children: [
            {
              path: 'admin',
              name: 'admin',
              label: '用户列表'
            },
            {
              path: 'role',
              name: 'role',
              label: '角色列表'
            },
            {
              path: 'menu',
              name: 'menu',
              label: '菜单列表'
            },
            {
              path: 'resource',
              name: 'resource',
              label: '资源列表'
            }
          ]
        }
      ]
    }
  })
})
