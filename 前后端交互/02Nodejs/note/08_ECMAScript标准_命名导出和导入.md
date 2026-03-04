# ECMAScript标准-命名导出和导入   

需求:疯转表导出基地址和求数组元素的函数    
命名标准使用   
1. 导出;export 修饰定义语句
utils.js   
```javascript
export const baseURL = 'https://www.baidu.com'
export const getArrySum  = arr=>arr.reduce((prev,current)=>prev+=current,0)  
```

2. 导入:import {同名变量} from '模块名或路径'
index.js   
```javascript
import {baseURL,getArrySum} from "./utils.js"
```

如何选择?  
按需加载,使用命名导出和导入
全部加载,使用默认导出和导入


-----   

总结    

1. Node.js支持哪两种模块化标准?   
- CommonJS标准语法(默认)
- ECMAScript标准语法(官方推荐的)

2. ECMAScript标准,命名导出和导入的语法   
- 导出:export 修饰定义的语句  
- 导入: import{同名变量}from'模块名或路径'  
3. ECMAScript标准,默认导出和导入的语法   
- 导出:export default{别名:实名}
- 导入: import 变量名 from 模块名或路径


代码示例:  

默认导出  
```javascript
//在utils.js中
const baseURL = 'https://hmajax.itheima.net'
const getArrySum = arr =>{
    arr.reduce((prev,current)=>{
        prev+=next
    },0)
}

export default{
    对外属性名1:baseURL，
    对外属性名2:getArrySum
}

//在index.js中
import obj  from '模块名或路径'
```


命名导出 
```javascript
//在utils.js中
export const baseURL = 'https://www.baidu.com'
export const getArrySum  = arr=>arr.reduce((prev,current)=>prev+=current,0) 

//在index.js中
import {baseURL,getArrySum} from "./utils.js"
```

CommonJS中

```javascript
//utils.js
const baseURL = 'https://hmajax.itheima.net'
const getArrySum = (arr)=>{
    return arr.reduce((prev,current)=>{
        return prev + current
    },0)
}
module.exports={
    bURL : baseURL,
    arrSum:getArrySum
}
//index.js
const obj = require('./utils.js')
```


