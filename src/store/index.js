import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [
    createPersistedstate({
      // 默认存储在localstatus
      // 插件配置:本地存储的名字 + 指定需要存储的模块
      key: 'xinfeng-client-pc-1020',
      paths: ['user', 'cart']
    })
  ]
})
