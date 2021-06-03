<template>
  <div class="message-container">
      <div class="content">
        <h3>默认插槽</h3>
        <!-- slot就是插槽，会把slot标签替换为外面传入的HTML结构 -->
        <slot></slot>
      </div>
      <div>
        <h3>具名插槽</h3>
        <slot name="header"></slot>
      </div>
      <button>确定</button>
      <button>关闭</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .message-container{
    padding: 10px 30px;
    border: 1px solid black;
  }
  button{
    float: right;
  }
</style>