<template>
  <div class="loading-container">
      <Loading />
  </div>
</template>

<script>
import Loading from "./index.vue";
export default {
    components:{
        Loading
    }
}
</script>

<style scoped>
.loading-container{
    width: 500px;
    height:500px;
}
</style>