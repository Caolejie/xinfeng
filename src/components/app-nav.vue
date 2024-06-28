<template>
  <nav class="app-topnav">
    <div class="container">
        <ul>
          <template v-if="profile.token">
            <li><a href="javascript:;"><i class="iconfont icon-chenggong"></i>{{profile.account}}</a></li>
            <li><a href="javascript:;"><i class="iconfont icon-tuichu"></i>退出登录</a></li>
          </template>
          <template v-else>
            <li><a href="javascript:;">请先登录</a></li>
            <li><a href="javascript:;">开始注册</a></li>
          </template>
          <li><a href="javascript:;">订单详情</a></li>
          <li><a href="javascript:;"><i class="iconfont icon-huiyuanVIP"></i>成为会员</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;"><i class="iconfont icon-zhuanfa"></i>转发</a></li>
        </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
export default {
  name: 'AppTopnav',
  setup () {
    // 拿到用户信息，登录，控制切换导航菜单
    // 用户信息存在vuex
    const store = useStore()
    const profile = computed(() => {
      return store.state.user.profile
    })
    // 这个没有计算属性const profile = store.state.user
    return { profile }
  }
}
</script>

<style scoped lang="less">
  .app-topnav {
    background: #333;
    ul {
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;
      li {
        a {
          padding: 0 15px;
          color: #cdcdcd;
          line-height: 1;
          display: inline-block;
          i {
            font-size: 14px;
            margin-right: 2px;
          }
          &:hover {
            color: @xinfengColor;
          }
        }
        // ~ 波浪线选择器：选择某一个元素后的所有元素（li后面所有的li都会被拿到）
        ~ li {
          a {
            border-left: 2px solid #666;
          }
        }
      }
    }
  }
</style>
