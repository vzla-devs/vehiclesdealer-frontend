module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
