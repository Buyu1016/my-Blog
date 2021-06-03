<template>
  <div>
    <h1>Hello Vue</h1>
    <Avatar url="https://img1.baidu.com/it/u=2209725520,3622622143&fm=26&fmt=auto&gp=0.jpg" :size="100" />
  </div>
</template>

<script>
import Avatar from "./index.vue";
export default {
  components:{
    Avatar
  }
}
</script>

<style>

</style>