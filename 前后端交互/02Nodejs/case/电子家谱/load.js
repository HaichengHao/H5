const http = require('http')
const server = http.createServer()
const path = require('path')
const fs = require('fs') 

server.on('request',(req,res)=>{
    if(req.url === '/origin.html'){
        fs.readFile(path.join(__dirname,'origin.html'),(err,data)=>{
            if(err){
                console.log(err)
            }
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(data.toString())
        })
    }else{
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('你要访问的页面不存在')
    }
})

server.listen(3333,()=>{
    console.log('web服务已启动')
})