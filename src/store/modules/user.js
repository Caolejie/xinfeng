// 用户模块

export default {
  namespaced: true,
  state () {
    return {
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        // token登陆状态
        token: ''
      }
    }
  },
  mutations: {
    // 修改用户信息方法：payload是用户信息对象
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
