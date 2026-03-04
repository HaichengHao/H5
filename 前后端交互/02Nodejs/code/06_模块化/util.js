const baseURL = 'https://hmajax.itheima.net'
const getArrySum = (arr)=>{
    return arr.reduce((prev,current)=>{
        return prev + current
    },0)
}
module.exports={
    bURL : baseURL,
    arrSum:getArrySum
}