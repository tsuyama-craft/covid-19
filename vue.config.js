module.exports = {
    configureWebpack: {
        devtool: 'inline-source-map'
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/covid-19/' : '/',
    outputDir: 'docs'
}
