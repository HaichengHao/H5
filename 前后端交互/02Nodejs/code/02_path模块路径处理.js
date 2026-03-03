const path = require('path')  

const pth1 = 'demo/'
const pth2 = 'nikofox/haha.txt'

const finalpth = path.join(pth1,pth2)

console.log(finalpth)

const finalpth2 = path.join(__dirname,pth2)
console.log(finalpth2)

//打印当前文件的绝对路径 
console.log(__dirname)