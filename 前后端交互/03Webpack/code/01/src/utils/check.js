const checkPhone  =  (phone)=>{
    return phone.length === 11
}

const checkCode = (code)=>{
    return code.length === 6
}

module.exports={
    checkCode,
    checkPhone
}