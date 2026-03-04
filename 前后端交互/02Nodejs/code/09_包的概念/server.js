//直接导入utils软件包,使用里面封装的工具函数


//下面写的话直接写到utils就行了,只要里面有index.js它就会自动帮我们找到index.js
const obj = require('./utils')
console.log(obj)

/**
 * PS D:\H5\前后端交互\02Nodejs\code\09_包的概念> node .\server.js
{ getArraySum: [Function: getArraySum] }
{
  getArraySum: [Function: getArraySum],
  checkPwd: [Function: checkPassWord],
  checkUser: [Function: checkUserName]
}
 */
const result = obj.getArraySum([9,9,6])
console.log(result) 
//24 成功