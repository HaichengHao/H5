//1.加载fs模块对象
const fs = require('fs')   
//2.写入文件内容
// fs.writeFile('../demofile/hello.txt','hello nodjs',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('写入成功')
//     }
// })
//3.读取文件内容  

fs.readFile('../demofile/hello.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data) //读取的是buffer的数据流,我们需要调用toString()方法将字节流转换为字符串
    console.log(data.toString())
})