<template lang="">
    <div>
        <p>你要购买的商品的数量{{ count }}</p>
        <!-- 1.绑定事件
        语法 v-on:事件名="少量代码" 
        -->
        <button v-on:click="count+=1">点击+1</button>
        <!-- 语法:v-on:事件名="methods里函数名" -->
        <button  v-on:click="addFn">点击+1</button>
        <!-- 语法:v-on:事件名="methods里函数名(值)" -->
        <button  v-on:click="addCountFn(5)">点击+5</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:1
        }
    },

    //定义函数
    methods:{
        addFn(){//this指向export default的{}
            //data函数会把对象挂到当前组件的对象上
            this.count++ //this指向被调用者
        },
        addCountFn(num){
            this.count+=num
        }
    }
}
</script>
<style lang="">
    
</style>