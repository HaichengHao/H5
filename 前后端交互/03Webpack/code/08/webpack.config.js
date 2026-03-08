const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    mode: "production",//development模式默认不压缩html到一整行,但是production会开启压缩
    //加载器:让webpack能识别更多模块内容的代码
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    ],
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset',
                    generator: { //指定生成到何处
                    filename: 'assets/[hash][ext][query]'
                    }
                }
                        
        ],
    },

    entry: path.resolve(__dirname, 'src/login/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './login/index.js'
    },
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [//然后引入我们要调用的插件
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/login.html'), //模板文件
            filename: path.resolve(__dirname, 'dist/login/index.html')//输出文件
        }

        ),
        new MiniCssExtractPlugin() , //为了生成css文件


    ]
}