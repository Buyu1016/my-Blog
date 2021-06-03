<template>
  <div class="comment-module-container" v-if="list.length !== 0">
      <MessageSubmit v-on="$listeners" />
      <h3>
          {{title}}
          <span>{{subTitle}}条信息</span>
      </h3>
      <CommentMessagesList :list="list" />
      <div v-if="isListLoading" class="loading">
          <img src="@/assets/loading.svg" alt="">
      </div>
  </div>
</template>

<script>
import MessageSubmit from "@/components/MessageSubmit"
import CommentMessagesList from "@/components/CommentMessagesList"
export default {
    components:{
        MessageSubmit,
        CommentMessagesList
    },
    props: {
        // 列表标题
        title: {
            type: String,
            default: ""
        },
        // 列表副标题
        subTitle: {
            type: Number,
            default: 0
        },
        list: {
            type: Array,
            default:() => []
        },
        isListLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.comment-module-container{
    h3{
        span{
            font-size: 12px;
            color: @gray;
        }
    }
    .loading{
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>