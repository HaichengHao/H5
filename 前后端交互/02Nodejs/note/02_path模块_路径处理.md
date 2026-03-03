# path模块-路径处理   

问题:Node.js代码中,相对路径是根据终端所在的路径来查找的,可能无法找到你想要的文件    

- 建议:在Node.js代码中,使用绝对路径  
- 补充:__dirname内置变量(获取当前模块目录-绝对路径)
- [x] windows: D:\H5\前后端交互\02Nodejs\code>  
- [x] Linux/Mac /H5/前后端交互/02Nodejs/code  

注意: path.join()会使用特定于平台的分隔符,作为定界符,将所有给定的路径片段连接在一起

语法:

1.加载path模块
```javascript
const path = require('path')
```
2.使用path.join 方法,拼接路径   
```javascript
path.join('路径1','路径2',...)
```

例:
```javascript
const path = require('path')  

const pth1 = 'demo/'
const pth2 = 'nikofox/haha.txt'

const finalpth = path.join(pth1,pth2)

console.log(finalpth)
```
```powershell
PS D:\H5\前后端交互\02Nodejs\code> node .\02_path模块路径处理.js
demo\nikofox\haha.txt
```

3. 打印当前文件绝对路径
```javascript
console.log(__dirname)
```








