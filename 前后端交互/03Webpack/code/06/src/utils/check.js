const checkPhone = (phone)=>{
    return phone.length === 11
}
const checkCode = (code)=>{
    return code.length === 6
}

module.exports={
    checkPhone,
    checkCode
}

//ECMAScript命名导出
// export const checkPhone = (phone)=>{
//     return phone.length === 11
// }
// export const checkCode = (code)=>{
//     return code.length === 6
// }
