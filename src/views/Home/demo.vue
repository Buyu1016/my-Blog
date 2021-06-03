<template>
  <div class="home-container">
    Home
    <p>{{count}}</p>
    <button @click="count ++ ">click!</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count:0
    }
  },
  // 注册钩子函数
  // beforeCreate钩子函数存在于实例被创建到注入之间
  beforeCreate(){
    console.log("beforeCreate!");
  },
  // created钩子函数存在于注入到生成VNode之间
  created() {
    console.log("created!");
  },
  // beforeMount钩子函数存在于生成VNode和生成真实DOM之间
  beforeMount() {
    console.log("beforeMount!");
  },
  // mounted钩子函数存在于生成真实DOM到已挂载之间
  mounted() {
    console.log("mounted!");
  },
  // beforeUpdate钩子函数存在于已挂载之后数据发生变动还未重新渲染之间
  beforeUpdate() {
    console.log("beforeUpdate!");
  },
  // updated钩子函数发生于数据变动已后重新渲染到已挂载之间
  updated() {
    console.log("updated!");
  },
  // beforeDestroy钩子函数存在于已挂载到销毁组件之间
  beforeDestroy() {
    console.log("beforeDestroy!");
  },
  // destroyed钩子函数存在于销毁组件到已销毁之间
  destroyed() {
    console.log("destroyed!");
  }
}
</script>

<style>
</style>