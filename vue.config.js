const path = require('path')
module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    // 修改 src 为 examples
    pages: {
        index: {
            entry: 'examples/main.ts',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 强制内联CSS
    css: { extract: false },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include.add(path.resolve(__dirname, 'packages')).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
        config.resolve.alias
            .set('@', path.join(__dirname, 'examples')) 
    }
}