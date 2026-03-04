# ECMAScript标准-默认导出和导入 

**需求:封装并导出基地址和求数组元素的函数**

##  默认标准的使用  
1.  导出:export default {}   
```javascript
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
```
2. 导入:import 变量名 from '模块名或路径'
```javascript
import obj  from '模块名或路径' //和python的from .. import .. 刚好反过来   

```

**注意:Node.js默认支持CommonJS标准语法**  
如果需要使用ECMAScript标准语法,在运行模块所在文件夹新建package.json文件,并设置{"type":"module"}  
