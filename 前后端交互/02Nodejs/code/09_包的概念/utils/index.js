/**
 * 本文件是utils工具包的唯一出口
 * 把所有工具模块的方法集中起来,统一向外暴露
 */

//直接使用解构赋值来接收
const arrObj = require('./lib/arr.js')
console.log(arrObj)
//{ getArraySum: [Function: getArraySum] } 可以看到是一个JSON格式,我们用对象解构
const {getArraySum} = require('./lib/arr.js')

// console.log(getArraySum)
//[Function: getArraySum]  成功拿到function


//同样的,str也可以这样操作  
// const strObj = require('./lib/str.js')   
const {checkUser,checkPwd} = require('./lib/str.js')


//接下来还得向外导出  
//统一导出所有的函数
module.exports={
    getArraySum,
    checkPwd,
    checkUser
}