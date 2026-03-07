const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry: path.resolve(__dirname, 'src/login/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './login/index.js'
    },
    plugins: [//然后引入我们要调用的插件
        new HtmlWebPackPlugin({
            template:path.resolve(__dirname,'public/login.html'), //模板文件
            filename: path.resolve(__dirname,'dist/login/index.html')//输出文件
        }

        )

    ]
}