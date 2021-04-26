configFile = require("./config.json")

module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './public/index.html'
        args[0].title = configFile.name
        return args
      })
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ua',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
