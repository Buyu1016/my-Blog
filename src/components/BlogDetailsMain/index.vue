<template>
  <div class="blog-details-main-container">
      <h1>{{blog.title}}</h1>
      <div class="messages">
        <span>日期 : {{blog.createDate}}</span>
        <span>浏览 : {{blog.scanNumber}}</span>
        <span><a href="#message-submit-container">评论 : {{blog.commentNumber}}</a></span>
        <span><RouterLink :to="{
          name: 'BlogChildren',
          params: {
            categoryId:blog.category.id
          }
        }">{{blog.category.name}}</RouterLink></span>
      </div>
      <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
export default {
  props: {
    blog:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-details-main-container{
  .messages{
    font-size: 12px;
    color: @gray;
    margin-top: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid @gray;
    padding-bottom: 20px;
    span{
      margin-right: 10px;
      a{
        cursor: pointer;
      }
    }
  }
}
</style>