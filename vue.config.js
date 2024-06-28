const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  // lintOnSave:false,
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些文件自动引入，使用绝对路径
      patterns: [
        path.join(__dirname, './src/assets/style/viewables.less'),
        path.join(__dirname, './src/assets/style/micbeen.less'),
        path.join(__dirname, './src/assets/style/common.less')
      ]
    }
  }
})
