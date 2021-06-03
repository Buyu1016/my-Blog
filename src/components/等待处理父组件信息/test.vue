<template>
  <AwaitMessage @active="handleClick" :click="handleClick"/>
</template>

<script>
import AwaitMessage from "./index.vue";
export default {
    components: {
        AwaitMessage
    },
    methods: {
        // 第一种利用抛出事件进行传递
        // handleClick(count, callback){
        //     setTimeout(() => {
        //         callback("请填写正确信息！");
        //     },3000)
        // }
        // 第二种利用$listeners
        // handleClick(){
        //    return new Promise((resolve)=>{
        //         setTimeout(() =>{
        //             resolve("请正确填写信息！");
        //         },3000)
        //    })
        // }
        handleClick(){
            return new Promise((resolve)=>{
                setTimeout(() =>{
                    resolve("请正确填写信息！");
                },3000)
           })
        }
    }
}
</script>

<style>

</style>