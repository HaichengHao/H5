// import  {checkPhone,checkCode} from  '../utils/check.js'
const {checkPhone,checkCode} = require('../utils/check.js')
document.querySelector('.btn').addEventListener('click',()=>{
    const phone = document.querySelector('.login-form [name="mobile"]').value
    const code = document.querySelector('.login-form [name="code"]').value

    //然后执行校验逻辑

    if(!checkPhone(phone)){
        console.log('号码格式有误')
        return //有误则阻止代码继续向下运行
    }

    if(!checkCode(code)){
        console.log('验证码长度必须为6位')
        return
    }

    console.log('提交到服务器登录')
})  


//引入bootstrap
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap/dist/js/bootstrap.min.js')


//引入css文件
require('./index.css')

//引入less文件  
require('./index.less')