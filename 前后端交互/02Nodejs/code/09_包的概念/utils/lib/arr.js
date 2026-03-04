const getArraySum = arr=>arr.reduce((prev,current)=>prev+=current,0)

//利用CommonJS标准导出
module.exports={
    getArraySum
}