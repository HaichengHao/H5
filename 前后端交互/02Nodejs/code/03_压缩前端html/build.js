/**
 * 目标1：压缩 html 代码
 * 需求：把回车符 \r，换行符 \n 去掉，写入到新 html 文件中
 *  1.1 读取源 html 文件内容
 *  1.2 正则替换字符串
 *  1.3 写入到新的 html 文件中
 */
// 1.1 读取源 html 文件内容
//引入需要的模块
// const fs = require('fs')
// const path = require('path')

// //先读取然后再写入,读取的是当前文件下public/index.html的绝对路径
// fs.readFile(path.join(__dirname, 'public/index.html'), (err, data) => {
//   if (err) console.log(err)
//   else {
//     const htmlStr = data.toString()
//     // 1.2 正则替换字符串
//     const resultStr = htmlStr.replace(/[\r\n]/g, '')  //利用正则表达式将\r和\n全局替换为' '
//     console.log(resultStr)
//     // 1.3 写入到新的 html 文件中
//     fs.writeFile(path.join(__dirname, 'dist/index.html'), resultStr, err => {
//       if (err) console.log(err)
//       else console.log('写入成功')
//     })
//   }
// })

const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'public/index.html'),(err,data)=>{
  if(err){
    console.log(err)
  }else{
    const readStr = data.toString()  

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