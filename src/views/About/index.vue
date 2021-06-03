<template>
  <div class="about-container" v-loading="loading || !isSrcLoading">
      <iframe :src="data" frameborder="0" @load="isSrcLoading=true"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data(){
    return {
      isSrcLoading: false //判断iframe的src是否加载完成
    }
  },
  computed: {
    ...mapState("about",["data","loading"])
  },
  created() {
    this.$store.dispatch("about/asyncSetData");
  }
}
</script>

<style scoped lang="less">
.about-container{
  width: 100%;
  height: 100%;
  position: relative;
  iframe{
    width: 100%;
    height: 100%;
  }
}
</style>