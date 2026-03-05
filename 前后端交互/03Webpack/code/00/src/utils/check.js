//封装校验手机号和验证码长度的函数

// const checkphone = function(){

// }

export const checkphone = (phone)=>{
    return phone.length === 11
}

export const checkCode = (code)=>{
    return code.length === 6
}