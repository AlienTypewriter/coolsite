module.exports = {
  chainWebpack: config => {
    config
      .plugin('pug')
      .tap(args => {
        args[0].title = "Cool website"
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
