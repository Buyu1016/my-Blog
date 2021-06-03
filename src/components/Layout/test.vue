<template>
    <div class="container">
        <Layout>
            <template v-slot:left>
                <div class="left">
                    左侧区域，宽度适应内容，移除隐藏
                </div>
            </template>
            <template v-slot:default>
                <div class="main">
                    主区域，宽度占满剩余空间，溢出隐藏
                </div>
            </template>
            <template v-slot:right>
                <div class="right">
                    右边栏区域，宽度适应内容，溢出隐藏
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout";
export default {
    components:{
        Layout
    }
}
</script>

<style scoped>
.container{
    width: 1000px;
    height: 800px;
    background: #fcc;
    white-space:nowrap;
}
.left{
    width: 200px;
    height: 100%;
    background:red;
}
.main{
    width: 100%;
    height: 100%;
    background: #abcdef;
}
.right{
    width: 200px;
    height: 100%;
    background:yellow;
}
</style>