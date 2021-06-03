<template>
  <div class="empty-container">
        <div class="box">
            <Icon :type="'&#xe601;'" />
            <div class="empty-text">{{text}}</div>
        </div>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";
export default {
    components:{
        Icon
    },
    props:{
        text: {
            type: String,
            default: "无数据"
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.empty-container{
    font-size: 100px;
    font-weight: 800;
    color: @gray;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    div{
        text-align: center;
        .empty-text{
            font-size: 16px;
        }
    }
}
</style>