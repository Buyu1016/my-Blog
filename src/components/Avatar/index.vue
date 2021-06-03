<template>
<div class="avatar-container">
    <img class="avatar-img" :src="url" :style="{width:size+'px',height:size+'px'}" />
</div>
</template>

<script>
export default {
    props:{
        url:{
            type: String,//约束传入的参数的值只能为String类型   
            required: true //必须传入参数
        },
        size:{
            type: Number,
            default: 100
        }
    },
    // 计算属性
    computed:{
        fullName(){
        }
    }
}
</script>

<style scoped>
/* 当style标签上带有 scoped时 此块css代码就会有作用域 */
    .avatar-img{
        border-radius: 50%;
        object-fit: cover;
    }
</style>