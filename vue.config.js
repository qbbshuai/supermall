module.exports = {
    //配置项目路径的别名   @表示的是src 内部已经配置了
    configureWebpack: {
      resolve: {
        alias: {
          'components': '@/components',
          'content': 'components/content',
          'common': 'components/common',
          'assets': '@/assets',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
  