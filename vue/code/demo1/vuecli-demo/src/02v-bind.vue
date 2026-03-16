<template lang="">
    <div>
        <!-- 语法- v-bind:原生属性名="vue变量" -->
        <a v-bind:href="url">百度一下</a>
        <!-- 语法- :原生属性名="vue变量值" -->
        <img :src="imgUrl">
    </div>
</template>
<script>
export default {
    //准备变量
    data(){
        return{
            url:'https://www.baidu.com', 
            imgUrl:'https://ts1.tc.mm.bing.net/th/id/R-C.db2da88ddf8e95dff0259ad12674d033?rik=JNhAFS%2f%2b%2fEL8Yw&riu=http%3a%2f%2fe0.ifengimg.com%2f10%2f2019%2f0729%2fEC9EA9DF45F6E37637BFB7ECD134CC7B623D68E5_size61_w1000_h742.jpeg&ehk=Lq0JJySn0ZoQ%2fna4gdIxKZrc8c%2fro7yNTMnVQEp2CSM%3d&risl=&pid=ImgRaw&r=0'
        }
    }
}
</script>
<style lang="">
    
</style>