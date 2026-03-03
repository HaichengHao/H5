const fs = require('fs')
const http = require('http')
const path = require('path')
const server = http.createServer()


server.on('request',(req,res)=>{
    if(req.url === '/index.html'){
        fs.readFile(path.join(__dirname,'dist/index.html'),(err,data)=>{
            if(err){
                console.log(err)
            }
            res.setHeader('Content-Type','text/html;charset=utf-8')
            res.end(data.toString())
        })
    }else{
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('你要访问的路径不存在')
    }
})

server.listen(3000,()=>{
    console.log('web服务已启动')
})