const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devtool:'true',
  transpileDependencies: true,
  lintOnSave:false, //关闭eslint检查
  devServer:{
    port:3333,
    open:true,
    
  }
})
