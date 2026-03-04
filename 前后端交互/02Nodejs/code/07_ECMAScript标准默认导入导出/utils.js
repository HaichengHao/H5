const baseURL='https://www.baidu.com'

const getArrySum=(arr)=>{
    return arr.reduce((prev,current)=>prev+=current,0)

} 

export default{
    baseurl:baseURL,
    arrsum:getArrySum
}