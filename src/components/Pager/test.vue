<template>
  <div>
    <h1>Hello Vue</h1>
    <Pager :total="total" :current="current" @pageChange="handlePageChange" />
  </div>
</template>

<script>
import Pager from "./index.vue";
export default {
  components:{
    Pager
  },
  data(){
    return {
      current: 1,
      total:300
    }
  },
  methods:{
    handlePageChange(newPage){
      console.log(1);
      this.current = newPage;
    }
  }
}
</script>

<style>

</style>