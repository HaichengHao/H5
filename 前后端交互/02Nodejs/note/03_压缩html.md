# 压缩html  
> 需要用到fs和path模块  

1. 读取并拿到html字符串   
2. 利用正则表达式和replace替换,将换行和回车替换为空
3. 然后重新写入
```javascript
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'public/index.html'),(err,data)=>{
  if(err){
    console.log(err)
  }else{
    const readStr = data.toString()  //读取并拿到字符串

    const resultStr = readStr.replace(/[\r\n]/g,'')  
    console.log(resultStr)

    //然后将其写入同文件夹下dist文件夹下的index.html中   
    fs.writeFile(path.join(__dirname,'dist/index.html'),resultStr,err=>{
      if(err){
        console.log(err)

      }else{
        console.log('写入成功')
      }
    })
  }
})
```