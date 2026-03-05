# Node.js阶段总结

**Node.js模块化**
概念:每个文件当作一个模块,独立作用域,按需加载
使用:采用特定的标准语法导出和导入进行使用 

|| 导出 | 导入 |
| -- |  -- |  -- |
| CommonJS标准 | module.exports={} | require('模块名称或路径')|    
| ECMAScript标准(默认)|  export default{} | import 变量名from 模块名 |  
|ECMAScript标准(命名导入导出)| export 修饰定义语句 | import {同名变量} from '模块名或路径'|

**Node.js包**
概念:把模块文件,代码文件,其他资料聚合成一个文件夹  
项目包: 编写项目需求和业务逻辑的文件夹   
软件包: 封装工具和方法进行使用的文件夹(一般使用npm管理)

软件包分为两种 :     
一种是作用于本地的本地软件包(譬如dayjs,lodash..),一种是作用于全局的全局软件包(譬如nodemon...)


**常用命令**
> 值得注意的是  如果需要使用ECMAScript标准语法,在运行模块所在文件夹新建package.json文件,并设置{"type":"module"}    

|功能|命令|  
| -- | -- |
|执行js文件|node xx.js |
|初始化package.json| npm init -y (注意所在文件夹的名字不能有中文和特殊符号)|
|下载本地软件包|  npm i  软件包名 |
|下载全局软件包| npm i 软件包名 -g |
|删除软件包| npm   uni  软件包名|  

