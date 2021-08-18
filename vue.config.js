module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/app.scss";',
      },
    },
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/practical/'
    : '/'
};
