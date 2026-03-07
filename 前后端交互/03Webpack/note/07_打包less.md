# 打包less代码
[less-loader:](https://www.webpackjs.com/loaders/less-loader/#root)可以打包less代码   


- 下载
```bash
npm install less less-loader --save-dev
```

**注意:less-loader需要配合less软件包使用**

- webpack.config.json中配置  

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
};
```

- 可选项  

|名称|	类型|	默认值|	描述|
| -- | -- | -- | -- |
|lessOptions|	{Object\|Function}|	{ relativeUrls: true }|	Less 的可选项。|
|additionalData|	{String\|Function}|	undefined|	在入口文件起始或末尾添加 Less 代码。|
|sourceMap|	{Boolean}	|compiler.devtool|	是否生成 source map。|
|webpackImporter|	{Boolean}	|true|	是否启用默认的 webpack importer。|
|implementation|	{Object\|String}  |	less	|配置 Less 使用的实现库|  


--- 

案例  

首先将assets文件夹放入src文件夹的login文件夹下面   


1. 安装


```bash
npm install less less-loader --save-dev
```

2. 然后将编写的在src/index.less文件并引入到index.js中  
index.less
```less
html{
    body{
        background-image: url(./assets/login-bg.png) no-repeat center/cover;
    }
}
```

```javascript
// import  {checkPhone,checkCode} from  '../utils/check.js'
const {checkPhone,checkCode} = require('../utils/check.js')
document.querySelector('.btn').addEventListener('click',()=>{
    const phone = document.querySelector('.login-form [name="mobile"]').value
    const code = document.querySelector('.login-form [name="code"]').value

    //然后执行校验逻辑

    if(!checkPhone(phone)){
        console.log('号码格式有误')
        return //有误则阻止代码继续向下运行
    }

    if(!checkCode(code)){
        console.log('验证码长度必须为6位')
        return
    }

    console.log('提交到服务器登录')
})  


//引入bootstrap
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js')


//引入css文件
require('./index.css')

//引入less文件  
require('./index.less')
```

3. 配置webpack.config.js

一定要注意module的顺序,是从下往上的匹配,所以要把less写到css下面

```javascript
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
```

4. 配置好之后 
```bash
npm run build
```    


5. 然后dist文件生成了,可以发现dist文件中已经打包好了,甚至连图片也加载好了   


**注意,为了支持更多形式的打包,加载器(或者说模组更好理解)是推荐的(module),而不是加更多插件**