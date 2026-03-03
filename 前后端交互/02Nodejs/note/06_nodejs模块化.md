## CommonJS标准  
- 需求:定义utils.js模块,封装基地地址和求数组总和的函数  

使用: 
1. 导出:module.exports = {}  
```javascript
const baseURL = 'https://hmajax.itheima.net' 
const getArrySum = arr => arr.reduce((sum,val)=>sum+=val,0)

module.export = {
    对外属性名1:baseURL,
    对外属性名2:getArrySum
}
```
2. 导入:require('模块名或路径')
```javascript
const obj = require('模块名或路径')
//obj 就等于module.exports 导出的对象
```


模块名或路径:
- [x] 内置模块:直接写名字(例如:fs,path,http)
- [x] 自定义模块:写模块文件路径(例如:./utils.js)

