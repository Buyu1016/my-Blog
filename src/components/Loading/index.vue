<template>
  <div class="loading-container">
      <img src="@/assets/loading.svg" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="less">
.loading-container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        background: rgba(0,0,0, 0.3);
        padding: 10px;
        border-radius: 5px;
    }
}
</style>