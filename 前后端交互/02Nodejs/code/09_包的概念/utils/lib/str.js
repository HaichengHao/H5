const checkUserName = username =>{
    return username.length >= 0
}

const checkPassWord = password =>{
    return password.length >= 6
}

//使用CommonJS标准
module.exports={
    checkUser:checkUserName,
    checkPwd:checkPassWord
}