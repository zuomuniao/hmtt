const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  publicPath: './', // 加这一行的目的是，如果不加，打包出来的路径是网络根路径的写法，加了这个之后，路径变成了相对路径
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '黑马头条'
        return args
      })
  },
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
            hack: `true; @import "${path.join(__dirname, 'src/styles/theme.less')}";`
          }
        }
      }
    }
  }
})
