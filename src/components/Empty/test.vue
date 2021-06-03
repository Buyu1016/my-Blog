<template>
  <div>
    <Empty />
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
    components:{
        Empty
    }
}
</script>

<style scoped>
  div{
    width: 500px;
    height: 500px;
    border: 1px solid red;
  }
</style>