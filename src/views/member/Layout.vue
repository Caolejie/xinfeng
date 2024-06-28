<template>
  <div>
     <!-- 顶部 -->
     <appnav />
     <!-- 头部组件 -->
     <appheader />
     <!-- 内容容器 -->
     <div class="main">
       <!-- 二级路由 -->
       <RouterView />
     </div>
     <!-- 底部组件 -->
     <appfooter />
  </div>

</template>

<script>
import appnav from '@/components/app-nav'
import appheader from '@/components/app-header'
import appfooter from '@/components/app-footer'
export default {
  name: 'LayOut',
  components: {
    appnav,
    appfooter,
    appheader
  }
}
</script>

<style lang="less">
  .main {
    min-height: 600px;
  }
</style>
